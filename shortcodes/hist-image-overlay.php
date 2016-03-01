<?php 

//function to add a slider element:
function hh_make_unique_range_slider ($id) {
    return '<div id="slider-' . $id .'"  class="slider" data-slider data-initial-start="0.5" data-end="1">
   <span class="slider-handle"  data-slider-handle role="slider" tabindex="1"></span>
   <span class="slider-fill" data-slider-fill></span>
   <input type="hidden">
   </div>
   <script >
   //jQuery(document).foundation();
   //jQuery("#slider-' . $id . '").html().foundation();
   jQuery("#slider-' .$id .'").on("moved.zf.slider", function(){
   var opacity =jQuery(this).children(".slider-handle").attr("aria-valuenow");
   jQuery("#old-' . $id . '").css("opacity", opacity);
   console.log(jQuery(this).children(".slider-handle").attr("aria-valuenow"));
   });
   </script>';
}


// add a function to make "timemachine" images
if (! function_exists ('hh_image_fade') ) {
    function hh_image_fade ($atts) {
        extract(shortcode_atts(array(
            'old' => 8,
            'new' => 38,
        ), $atts));
        echo '<div class="time-machine-container">
   <div id="new-' . $new .'">
   ' . wp_get_attachment_image ($new, "large") . '
   </div>
   <div id ="old-' . $old . '" class="overlay">
   ' . wp_get_attachment_image ($old, "large") . '
   </div>';
        
        echo '</div>';
        echo hh_make_unique_range_slider ($old);
    }
}

function hh_register_shortcodes(){
    add_shortcode('image-fade', 'hh_image_fade');
}

add_action( 'init', 'hh_register_shortcodes'); 

/**
 * Add TinyMCE buttons for shortcodes
 *
 * @link http://wp.smashingmagazine.com/2012/05/01/wordpress-shortcodes-complete-guide/
 * @link http://brettterpstra.com/adding-a-tinymce-button/
 * @link https://gist.github.com/gyrus/3156062
 */

/* Add the shortcode UI on init */
add_action( 'init', 'hh_tinymce_shortcode_buttons' );
/* Make sure to refresh the tinymce UI so that the button shows up */
add_filter( 'tiny_mce_version', 'hh_refresh_tinymce' );

/* registration function */
function hh_tinymce_shortcode_buttons() {
    // Don't bother doing this stuff if the current user lacks permissions
    if ( ! current_user_can( 'edit_posts' ) && ! current_user_can( 'edit_pages' ) )
	return;
    // Add only in Rich Editor mode
    if ( get_user_option( 'rich_editing' ) == 'true' ) {
	add_filter( 'mce_external_plugins', 'hh_tinymce_plugins' );
	add_filter( 'mce_buttons', 'hh_register_tinymce_shortcode_buttons' );
    }
}

/* Add the hh_image button to the TinyMCE button array */
function hh_register_tinymce_shortcode_buttons( $buttons ) {
    array_push( $buttons, "|", "hh_image" );
    return $buttons;
}

/* add the plugin, too */
function hh_tinymce_plugins( $plugin_array ) {
    $plugin_array['hh_image'] = plugin_dir_url(__FILE__) . 'js/historical-photo-mce-button.js';
    return $plugin_array;
}

function hh_refresh_tinymce( $ver ) {
    $ver += 3;
    return $ver;
}



?>
