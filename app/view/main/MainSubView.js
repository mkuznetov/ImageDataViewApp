
console.log('app: ImageApp.view.main.MainSubView');

// Custom subview (shared for both modern and classic toolkits).
Ext.define('ImageApp.view.main.MainSubView', {
    extend: 'Ext.DataView',
    xtype: 'app-mainsubview',
    alias: 'app-mainsubview',
    //renderTo: NoWhere,

    getCustomImageListAsHTML: function() {
        // List of loaded images (hardcoded, for simplicity).
        var imgList = '<div><img src="http://www.sencha.com/img/20110215-feat-drawing.png" style="max-width: 100%; max-height: 100%;"><br/><b>Drawing & Charts</b><br/></div>' +
                      '<div><img src="http://www.sencha.com/img/20110215-feat-data.png" style="max-width: 100%; max-height: 100%;"><br/><b>Advanced Data</b><br/></div>' +
                      '<div><img src="http://www.sencha.com/img/20110215-feat-html5.png" style="max-width: 100%; max-height: 100%;"><br/><b>Overhauled Theme</b><br/></div>' +
                      '<div><img src="http://www.sencha.com/img/20110215-feat-perf.png" style="max-width: 100%; max-height: 100%;"><br/><b>Performance Tuned</b><br/></div>';
        return imgList;
    }
});

