/**
 * TinyMCE buttons for custom shortcodes
 */
( function() {
    var open_media_window = function () {
        var first={};
        
        var window = wp.media({
            title: 'Insert a media',
            library: {type: 'image'},
            multiple: false,
            button: {text: 'Insert'}
        });
        window.on('select', function(){
            var files = window.state().get('selection').toArray();
            first = files[0].toJSON();
            console.log ("first is: " + first);
            return first.id;
        });
        window.open();
        return first.id;
        
    };
    tinymce.create( 'tinymce.plugins.hhImage', {
    	init: function( ed, url ) {
    	    ed.addButton( 'hh_image', {
    		title: 'Insert Historical Image Overlay',
    		image: url + '/hist-image.png',
    		onclick: function() {
                    
    		    //old = prompt( "Enter id of old photo", "" );
                    var promise = new Promise(function(resolve,reject) {
                        var window =  wp.media({
                            title: 'Choose HISTORICAL image',
                            library: {type: 'image'},
                            multiple: false,
                            button: {text: 'Use as HISTORICAL image'}
                        });
                        window.on('select', function(){
                            var files = window.state().get('selection').toArray();
                            first = files[0].toJSON();
                            console.log ("first is: " + first);
                            resolve(first.id);
                        });
                        window.open();  
                    });
                    promise.then(function(data) {
                        var old = data;
                        var promise2  = new Promise(function (resolve,reject) {
                            var window =  wp.media({
                                title: 'Choose CONTEMPORARY image',
                                library: {type: 'image'},
                                multiple: false,
                                button: {text: 'Use as CONTEMPORARY image'}
                            });
                            window.on('select', function(){
                                var files = window.state().get('selection').toArray();
                                first = files[0].toJSON();
                                console.log ("first is: " + first);
                                resolve(first.id);
                            });
                            window.open();  
                        });
                        promise2.then(function(data2) {
                            var newImage = data2;
                            ed.execCommand( 'mceInsertContent', false, '[image-fade old="' + old + '" new="' + newImage + '"]' );
                        });
                    });
                
                
                                      
                      //  open_media_window();
                      //  old = promise.done();
    		        //newImage = prompt( "Enter id of new photo", "" );
                        //newImage = open_media_window();
    		        //ed.execCommand( 'mceInsertContent', false, '[image-fade old="' + old + '" new="' + newImage + '"]' );
    		    }
    	        });
    	                },
    	    createControl: function( n, cm ) { return null; },
        });
                    tinymce.PluginManager.add( 'hh_image', tinymce.plugins.hhImage );
                  })();

  /*global tinymce:true */

  // tinymce.PluginManager.add('hh_image', function(editor) {


  //     // function addImage () {
  //     //     // Create a new media frame
  //     //     var frame = wp.media({
  //     //         title: 'Select or Upload Image',
  //     //         button: {
  //     //             text: 'Use this image'
  //     //         },
  //     //         multiple: false  // Set to true to allow multiple files to be selected
  //     //     });

  
  //     //     // When an image is selected in the media frame...
  //     //     frame.on( 'select', function() {
  
  //     //         // Get media attachment details from the frame state
  //     //         var image = frame.state().get('selection').first().toJSON();

  //     //         // Send the attachment URL to our custom image input field.
  //     //         //imgContainer.append( '<img src="'+attachment.url+'" alt="" style="max-width:100%;"/>' );

  //     //         // Send the attachment id to our hidden input
  //     //         //imgIdInput.val( attachment.id );

  //     //         // Hide the add image link
  //     //         //addImgLink.addClass( 'hidden' );

  //     //         // Unhide the remove image link
  //     //         //delImgLink.removeClass( 'hidden' );
  //     //     });

  //     //     // Finally, open the modal on click
  //     //     frame.open();
  //     // };
  //     function open_media_window() {
  //         var window = wp.media({
  //             title: 'Insert a media',
  //             library: {type: 'image'},
  //             multiple: false,
  //             button: {text: 'Insert'}
  //         });
  //         window.on('select', function(){
  //             var files = window.state().get('selection').toArray();
  //             var first = files[0].toJSON();
  //             return first.id;
  //         });
  //     };
  
  
  //     editor.addCommand('InsertHistImageOverlay', function() {
  //         //old = prompt( "Enter id of old photo", "" );
  //         old = open_media_window();
  //         newImage = prompt( "Enter id of new photo", "" );
  // 	editor.execCommand('mceInsertContent', false,
  //                            '[image-fade old="' + old + '" new="' + newImage + '"]');
  //     });

  //     //editor.addCommand(
  //     editor.addButton('hhImage', {
  // 	//icon: 'II',
  // 	tooltip: 'Insert Historical Image Overlay',
  // 	cmd: 'InsertHistImageOverlay'
  //     });

  //     editor.addMenuItem('hhImage', {
  // 	icon: 'II',
  // 	text: 'Historical Image Overlay',
  // 	cmd: 'InsertHistImageOverlay',
  // 	context: 'insert'
  //     });
  // });
