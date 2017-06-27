# ImageDataViewApp

A simple demo of the DataView usage in the ExtJS universal application.

Assuming the app is running locally on port 1841, switching between the toolkits
(classic/modern) can be done this way:

### http://localhost:1841/?classic

or

### http://localhost:1841/?modern

The main view of the application outputs several images with corresponding labels (everything in vertical layout)
(for simplicity, the loaded content is hardcoded).

Also, an app is available as static HTML page:

### <Application_Root_Folder>/index-test.html

During loading, the app outputs a number of console log entries from different components,
just to track their initialization order.

