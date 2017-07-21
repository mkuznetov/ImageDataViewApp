
console.log('app: ImageApp.view.main.MainSubView');

// Custom subview (shared for both modern and classic toolkits).
Ext.define('ImageApp.view.main.MainSubView', {
    extend: 'Ext.DataView',
    xtype: 'app-mainsubview',
    alias: 'app-mainsubview',
    //renderTo: NoWhere,
    //imagesDataMarkup: '',

    getCustomImageListAsHTML: function() {
        // List of loaded images (template).
        var imgList = '<div id="divParentSubView"><p />&nbsp;&nbsp;&nbsp;<input id="hdnThumbnails" type="hidden" name="URLs" value="" /><input id="btnThumbnails" type="button" onclick="get10Thumbnails()" name="btnThumbnails10" value="Get thumbnails" /><p /><div id="divPhotos"></div></div>';// + this.imagesDataMarkup;
        return imgList;
    }
});

function get10Thumbnails() {
    console.log('get10Thumbnails');

    // Ajax GET request to Flickr
    var url = 'https://api.flickr.com/services/rest/?method=flickr.photos.getRecent&api_key=ca370d51a054836007519a00ff4ce59e&per_page=10&format=json&nojsoncallback=1'
    Ext.Ajax.request({
        url: url,

        // cors: false,

        useDefaultXhrHeader: false,
               
        success: function(response, opts) {
            var json = JSON.parse(response.responseText);

            
            if (json) {
                var isAsync = $.ajaxSetup.async;
                $.ajaxSetup({
                    async: false
                });

                var btnThumbnails = $("#btnThumbnails");
                //btnThumbnails.attr("disabled", true);
                btnThumbnails.prop("disabled", true);
                var divPhotos = $("#divPhotos");
                divPhotos.hide();
                divPhotos.html('');

                var photoHtmlContent = '';
                //var newData = [];
                var imageStore = Ext.getStore('imageStore');
                imageStore.removeAll();

                $.each(json.photos.photo, function(i, myresult) {
                    apiurl_size = "https://api.flickr.com/services/rest/?method=flickr.photos.getSizes&api_key=ca370d51a054836007519a00ff4ce59e&photo_id=" + myresult.id + "&format=json&nojsoncallback=1";
                    $.getJSON(apiurl_size, function(size) {
                        $.each(size.sizes.size, function(i, myresult_size) {
                            if (myresult_size.width == 100 /*thumbnail*/) {

                                // Populate the datastore with the newly loaded data
                                //imageStore.add({
                                //    src: 'myresult_size.source'
                                //});
                                //newData.push({
                                //    src: myresult_size.source
                                //});

                                photoHtmlContent += '&nbsp;<a href="' + myresult_size.source + '"><img style="margin: 10px;" src="' + myresult_size.source + '"></img></a><br />';
                            }
                        })
                    })
                });

                divPhotos.html(photoHtmlContent);
                divPhotos.fadeIn(2000);
                btnThumbnails.removeAttr("disabled");

                //imageStore.loadData(newData, false);
                //imageStore.loadRecords(newData, {addRecords: true});

                $.ajaxSetup({
                    async: isAsync
                });
            }
        },

        failure: function(response, opts) {
            //console.log('ext failure: ' + response.responseText);
        }
    });

}

