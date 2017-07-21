/**
 * This view is an example list of people.
 */

    Ext.define('ImageApp.model.ImageList', {
        extend: 'Ext.data.Model',
        fields: [
           { name: 'src', type: 'string' }
        ]
    });

    var imgStore = Ext.create('Ext.data.Store', {
        id: 'imageStore',
        model: 'ImageApp.model.ImageList',
        data: [
        ]
    });

    var imageTpl = new Ext.XTemplate(
        '<tpl for="."><div style="thumb-wrap"><img src="{src}"/><br /></div></tpl>'
    );

    var mainSubView = Ext.ClassManager.get('ImageApp.view.main.MainSubView');
    if (!mainSubView) {
        mainSubView = Ext.ClassManager.getByAlias('app-mainsubview');
    }

    Ext.define('ImageApp.view.main.ImageList', {
        extend: 'Ext.DataView',
        xtype: 'app-imagelist',
        alias: 'app-imagelist',
        store: imgStore,
        tpl: imageTpl,
        html: mainSubView ? mainSubView.prototype.getCustomImageListAsHTML() : 'undefined',
        itemSelector: 'div.thumb-wrap',
        //emptyText: 'No images available',
        renderTo: Ext.getBody()
    });

