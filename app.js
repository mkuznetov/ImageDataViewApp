/*
 * This file launches the application by asking Ext JS to create
 * and launch() the Application class.
 */

Ext.application({
    extend: 'ImageApp.Application',

    name: 'ImageApp',

    requires: [
        // This will automatically load all classes in the ImageApp namespace
        // so that application classes do not need to require each other.
        'ImageApp.*'
    ],

    views: [
        'ImageApp.view.main.Main', 'ImageApp.view.main.ImageList', 'ImageApp.view.main.MainSubView'
    ],

    // The name of the initial view to create.
    mainView: 'ImageApp.view.main.ImageList'
});

