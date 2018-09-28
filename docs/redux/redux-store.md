# Redux Store

## Motivation

### **'Managed Global' data**  

Two key features of Angular apps are

- Variables scoped to components (classes), avoids unintended clashes and overwrites

- Routing - the user may enter the app from multiple URL's.

These features work against us in some cases where there is no clear 'owner' of the data. For this type of data, we want a global object (Redux) to own the data and all components to subscribe to it.  

When multiple routing paths must load the data, the OneWay-Data-Flow (or Command-Query-Separation) pattern used by Redux is useful to avoid duplicate loading calls.  

<mermaid>
sequenceDiagram
  participant Route A
  participant Route B
  Route A->>Redux Store: loadMyData()
  Redux Store->>Data Service: loadMyData()
  activate Data Service
  Note over Redux Store, Data Service: Async call
  Data Service->>Redux Store: returns myData
  deactivate Data Service
  Redux Store--XComponent A: myData (via subscription)
  Route B->>Redux Store: loadMyData()
  Redux Store->>Redux Store: data already loaded
  Redux Store--XComponent B: myData (via subscription)
</mermaid>

<br/>

### **Replacing @Input and @Output.**  

Angular uses `@Input` and `@Output` to provide a clear data API for components, which works fine for shallow nested structures but can degenerate into noisy templates when there are many data items or many component levels.

Redux state management reduces clutter in the template, reduce chance of typo's (particularly in template which may not raise an error).  

### **Replacing shared data services.**  

Using redux state instead of an Angular service to share data gives a cleaner application.  
The shared service must be injected, and must be provided in the appropriate place in the injector tree. Mistakes in injector placement can lead to different instances being used.  
For example, in this app, we want to cache files read from disk so they can be used on the Dashboard or on the Detail pages. Without Redux, the cache is implemented in a service provided at the app level and injected into each page.

## Redux described

Redux moves state out of components and into a central store object. State updates are carried out by issuing actions, and state usage is via observable subscription to slices of the overall state.  

State changes occur in reducer functions, which preserve the previous state (via immutability). This is a bonus that makes debugging much easier.

### **Advantages**

- clearer state management, particularly when more than one component uses the same state
- automatic audit trail, and nice debugging tool with the chrome devtool
- separation of state update code makes it more testable

### **Disadvantages**

- State access via subscriptions means more complex usage expressions
  - Async pipe is required in templates
  - Code access requires subscription  
  - Subscriptions need to be explicitly closed when component is destroyed 

- Unless careful, mutation can occur where state is nested, with no warning  signs. The change audit trail is then quite misleading. See section below on **freezeState**.

- Subscriptions are 'always on', so mixing subscriptions and action dispatch in the same code (chain) can lead to repeated firing. For example, if a dispatch is conditional on the existing state, and one of the update values is non-deterministic (e.g time of last refresh). See section below on **selector-helpers**.  

- Need to be aware that when changing sequential code to dispatch / subscribe pattern, the dispatch is async and likely to finish after the next sequential statement executes. The upshot is:
  - the AppState tree is initialized in the root component, before any services can run to provide values.
  - therefore, it is easiest to make state branches nullable
  - subscriptions on nullable brances may return null (until initialized), and therefore need additional guard code at the point of use. See section below on **selector-helpers**.

## The library

Redux state store was implemented with [angular-redux/store](https://github.com/angular-redux/store). This library is relatively un-opinionated, so is a good choice if you want to work from basic principles.  

This library provides:

- an injectable reference to the store, mainly used to access the `dispatch()` function

```javascript
  import { NgRedux } from '@angular-redux/store';
  import { IAppState } from '../store/state/AppState';

  constructor(
    private ngRedux: NgRedux<IAppState>,
    ...
  ) {}
```

- an observable decorator for component properties

```javascript
  import { select } from '@angular-redux/store';

  @select('measures') measures$: Observable<IMeasure[]>
```

## Steps to implement

### 1. **Initilize the store.**  

  The common pattern is to use `createStore()` or `configureStore()` in the root app module. A slightly better approach is the do this work in a StoreModule and import it into the root app module.

  Ref: ['angular-redux/example-app/src/app/store/store.module.ts'](https://github.com/angular-redux/example-app/blob/master/src/app/store/store.module.ts)  

  - _app.module.ts_  

  ```javascript
    import { StoreModule } from './store/store.module';
    ...
    @NgModule({
      imports: [
        ...
        StoreModule,
      ],
      ...
      bootstrap: [AppComponent]
    })
    export class AppModule {}

  ```

  - _store.module.ts (simplified)_

  ```javascript
  import { NgReduxModule, NgRedux, DevToolsExtension } from '@angular-redux/store';
  import { reduxLogger, createLogger } from 'redux-logger';

  import freezeState from './freezeState';
  import { HttpMiddleware } from './http.middleware'

  @NgModule({
    imports: [ NgReduxModule ],
    providers: [
      HttpMiddleware,
    ],
  })
  export class StoreModule {
    constructor(
      public store: NgRedux<IAppState>,
      devTools: DevToolsExtension,
      httpMiddleware: HttpMiddleware,
    ) {
      store.configureStore(
        rootReducer,                                            // reducer
        initialState,                                           // state
        [freezeState, httpMiddleware.httpMiddlewareFactory()],  // middleware
        devTools.isEnabled() ? [ devTools.enhancer() ] : []     // enhancers
      );
    }
  }
  ```
<br/>

### 2. **Create actions.**  

  Actions are simple declarative notification of events. As in all event based patterns, the benefits for extra effort are:

  - Separation of event cause from event handling, so easier testing (less mocking).
  - Cross-cutting concerns (logging, async calls) implemented in middleware, part of the pipeline.
  - An easy hook to log the events, along with a great tool to review (redux chrome devtool). 

  Actions are easy to construct, but there's a few descisions about which actions to create.  
    - Which state should move to the store? Not all state needs to move out of components, these are candidates:
      - Shared state (probably resides in services) decouples the components that share it.
      - State that that is useful for debugging (immediate or replay)
      - State that is subject to external error (e.g api calls)

<MiniMap></MiniMap>
