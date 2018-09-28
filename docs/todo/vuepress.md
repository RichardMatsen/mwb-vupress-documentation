# Vuepress implementation

## Adapting test reports to display in a Vue component

Several test and test-related pages are produced in the application lifecycle:

- Karma/Jasmine **unit test results**, displayed in the Karma window after the test run completes
- **Cypress test results**. Normally just displayed in the Cypress test runner app, but can be directed to a file
- **Code coverage report** also produced by the Karma unit test run
- **Webpack bundle analysis** produced by the VueJs version when serving in dev mode

Originally I took screenshots of the results using ShareX to scroll the web pages and capture all lines. Two problems with this approach

- some artifacts appear in the saved screenshot which makes it look clunky and can partly obscure some of the information.
- the screenshots are large and take time to load when the docs page is displayed.

Displaying these results as html in the documentation pages is similar to displaying the MWB results pages in ResultsWrapper.vue.

- grab all or part of the original web page and save it to a folder in the Docs project public folder
- read into a component in the Docs app with http
- parse the file
- append the html to a container div in the component template
- adapt any javascript as component methods
- add a scope selector to any styles so that they do not affect other Docs pages
  
### Cypress Test Results

ToDo

### Code Coverage

ToDo

### Unit Test Results

The Karma web page is saved after the run using browser ctrl-S. The result is an html file plus a '_files' folder which contains `jasmine.css`.

From the html file we parse out the html template, and some embedded styles. These are then combined into a clean html file which can be attached to the container div.

The javascript on the saved page is just for re-running tests, so we can ignore it. However, we also need to take out anchor tags which call to the active test server to run individual specs (otherwise the user gets a 404 page when clicking these links).

### Webpack Bundle Analyzer

This is the trickiest one to implement. The page displays a heatmap of webpack bundles in an SVG, and adds a mouse-tracking tooltip which displays stats on hover.

#### Problems

- The javascript `viewer.js` in the original page is not workable in the docs component.
- It is also minified, so it is near impossible to adapt to component methods
- The js is open source, but is written in React/ejs which requires translation before it can be used in Vue (but is readable after a fashion)
- The html in the saved page looks a bit dubious - there is essentially a single div referring to a small part of the overall heatmap, so conclude that the browser save-page command failed to capture the html required.

#### Appraoch

- The original Webpack Bundle Analyzer is based on the free version of `foamtreeLib`, which is well documented and has many example apps, so base the Docs component on one of these examples.
- Parse only the data from the saved test results page (it is complete).
- Add methods based on understanding the OS Webpack Bundle Analyzer React code.
- Limit the features - only want the heatmap in descending size order and the mouse-tracking tooltip. Drop the side panel and ability to switch numeric display from Stats (raw code size) / Parsed (??) / GZipped. The latter two figures appear to be absent anyway, possibly because the bundle analyzer is produced in Vue dev mode.

#### Notes

- The Webpack Bundle Analyzer React code is more convoluted than we want in the Vue component. For instance, the Tooltip is a separate component but is heavily reliant on data from the heatmap component. The heatmap is originally built in two layers, but the code becomes a lot smaller when they are combined.
- Vue has a very simple animation system using the `<transition>` wrapper component, so we can add this in for a better tooltip change experience.
- Most of the work consists of implementing `foamtree`, making use of the various configuration options. 
- One key feature, the weighted ordering of the heatmap, is very obscure in the original Webpack Bundle Analyzer React project, so have re-invented this part based on `foamtree` documentation. The changes consist of 
  - rename the 'Stats' property throughout the data to 'weight', and appropriate changes to the methods
  - set `layoutByWeightOrder: true` so that foamtree will order the heatmap based on the weight property.