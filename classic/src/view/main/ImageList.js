
// Taking an inspiration from:
// http://www.w3resource.com/API/flickr/your-first-app-on-flicker-api.html

    console.log('classic: ImageApp.view.main.ImageList');

    var imageTpl = new Ext.XTemplate(

'<div class="divContainer photoContainer">' +
    '<div class="divRow">' +
        '<div class="divColumn photoColumn1">' +
            '<fieldset>' +
                '<legend>Size</legend>' +
                    '<div id="divPhotosBySize">' +

                        '<tpl for=".">' +
                            '<li class="list-row">{group}</li>' +
                        '</tpl>' +

                    '</div>' +
           '</fieldset>' +
        '</div>' +
        '<div class="divColumn photoColumn2">' +
            '<fieldset>' +
                '<legend>Photos (fetched from Flickr)</legend>' +
                  '<div id="divPhotosFetched">{src} {caption}<div/>' +
            '</fieldset>' +
        '</div>' +
    '</div>' +
'</div>'
    );

    Ext.define('ImageApp.view.main.ImageList', {
        extend: 'Ext.view.View',
        xtype: 'app-imagelist',
        alias: 'app-imagelist',
        store: {
            data: [{group: 'Square [75 X 75]'}, {group: 'Large Square'}, {group: 'Thumbnail'}, {group: 'Small'}, {group: 'Medium'}, {group: "Original"}],
            fields: ['group']
        },
        tpl: imageTpl,
        autoScroll: true,
        scrollable: 'vertical',
        autoEl: 'ul',
        itemSelector: '.list-row',
        overItemCls: 'list-row-over',
        selectedItemCls: 'list-row-selected',
        simpleSelect: false,
        renderTo: Ext.get('divPhotosFetched'),

             listeners: {

                 // Add the listener to the component's main el
                 el: {
                     // Use a CSS class to filter the propagated clicks
                     delegate: '.list-row',

                     click: function(ev, li) {
                         var currentItem = li.innerHTML;
                         console.log("item clicked: " + currentItem);

                         var selected_size = getItemSize(currentItem);

                var divImages = $('#divPhotosFetched');
                divImages.hide();
                divImages.html("");

                var apiurl = "https://api.flickr.com/services/rest/?method=flickr.photos.getRecent&api_key=ca370d51a054836007519a00ff4ce59e&per_page=10&format=json&nojsoncallback=1";

                $.getJSON(apiurl, function(json) {
                    $.each(json.photos.photo, function(i, myresult) {
                        apiurl_size = "https://api.flickr.com/services/rest/?method=flickr.photos.getSizes&api_key=ca370d51a054836007519a00ff4ce59e&photo_id=" + myresult.id + "&format=json&nojsoncallback=1";
                        $.getJSON(apiurl_size, function(size) {
                            $.each(size.sizes.size, function(i, myresult_size) {
                                if (myresult_size.width == selected_size) {
                                    divImages.append('<p><a href="' + myresult_size.url + '" target="_blank"><img src="' + myresult_size.source + '"/></a></p>');
                                }
                            })
                        })
                    });
                });

                divImages.fadeIn(2000);
                     }, // click

                     mouseover: {
                         fn: function (event, html, eOpts) {

                         }
                     }, // mouseover

                     mouseout: {
                         fn: function (event, html, eOpts) {

                         }
                     } // mouseout
                 }
             },

    });

