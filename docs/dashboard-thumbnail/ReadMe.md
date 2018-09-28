# DashboardThumbnail Component

Dashboard thumbnails are the key component for the dashboard view.

![dashboard thumbnail](../images/DashboardThumbnail.jpg)

## Features

- A panel for each metric
- Panels vertically stacked, mobile responsive
- Elements within panel should be vertically aligned
- Left side elements: icon and title
- Right side elements: badge with color and value, sparkline
- Click icon and title to go to detail page
- Optional auth required on link

**Basic layout**  
Panels are implemented with bootstrap `class="well well-sm"` (mobile responsive).

**Aligning elements vertically**  
Content elements of the thumbnail are vertically aligned with `{display: flex}` on the enclosing div and `{margin: auto}` on the element.  
Content elements can also adjust left and right margins (but not top and bottom).

```javascript
div.metric {
  display: flex;
  justify-content: space-between;
}
error-badge {
  ...
  margin: auto;
  margin-left: 10px;
  margin-right: 10px;
}
```

**Shifting elements left and right**  
Left-side and right-side elements are separated by a filler element, which uses CSS flex-grow to fill remaining space, thereby right-justifying following elements.

```javascript
<div class="filler"></div>

div.filler {
  flex-grow: 1;
}
```

**Linking to detail pages**  
Link is implemented with routerLink attribute:

```html
<a class="measure" [routerLink]="['/'+ measure.link ]" >`.  
```

Auth on Task metric is implemented with a route guard in AppRoutingModule:

```javascript
{
  path: 'tasks',
  canActivate: [AuthguardService],
  component: TasksComponent,
  data: { toastrPrompt: 'Team Tasks'}
}
```

The data attribute allows a common Authguard component to receive use-specific static data (e.g Toastr text).

## See also

### [Dropdown Panel](./narrative-dropdown-panel.md)  

### [Scrollbar CSS Adjustments](./scrollbar-css-adjustments.md)

<MiniMap></MiniMap>
