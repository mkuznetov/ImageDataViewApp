
console.log('modern: ImageApp.view.main.ImageList');

    // TODO: store, model should be defined in the correct locations (/app/model, /app/store), but have been moved here for better readability.

    Ext.define('ImageApp.model.ImageList', {
        extend: 'Ext.data.Model',
        fields: [
           { name: 'src', type: 'string' },
           { name: 'caption', type: 'string' }
        ]
    });

    var imgStore = Ext.create('Ext.data.Store', {
        id: 'imageStore',
        model: 'ImageApp.model.ImageList',
        data: [
            { src:'http://www.sencha.com/img/20110215-feat-drawing.png', caption:'Drawing & Charts' },
            { src:'http://www.sencha.com/img/20110215-feat-data.png', caption:'Advanced Data' },
            { src:'http://www.sencha.com/img/20110215-feat-html5.png', caption:'Overhauled Theme' },
            { src:'http://www.sencha.com/img/20110215-feat-perf.png', caption:'Performance Tuned' }
        ]
    });
    //imgStore.load();

    var imageTpl = new Ext.XTemplate(
        '<tpl for="."><div style="thumb-wrap"><img src="{src}"/><br/><span>{caption}</span></div></tpl>'
    );

    // THIS DOESN'T WORK, WHY?
    //Ext.define('ImageApp.view.main.ImageList', {
    //    extend: 'Ext.DataView',
    //    xtype: 'app-imagelist',
    //    alias: 'app-imagelist',
    //    store: imgStore,
    //    tpl: imageTpl,
    //    itemSelector: 'div.thumb-wrap',
    //    emptyText: 'No images available',
    //    renderTo: Ext.getBody()
    //});


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
        emptyText: 'No images available',
        renderTo: Ext.getBody()
    });

