# Hacking History Shortcodes &c

This is a very simple plugin that currently contains a single shortcode. The plugin was designed for use by students in [Hacking History](http://www.hackinghistory.ca), and will grow as the needs of their projects grow.

## Usage

To use the shortcode, activate the plugin and insert the text

    [image-fade old='ID' new='ID2']

into your post, where ID and ID2 are the actual numerical ID's of existing photos.

Alternatively, use the new "HI" button in the visual editor to generate the shortcode. THis will activate the media selection window twice, once for the historical image and once for the contemporary image.  

## Styling
I have entirely avoided adding new CSS classes. To apply styles to the overlay, you would want something like this in your `_main.scss` (in JointsWP; other Foundation-based themes use different SCSS partial layouts):

``` scss
div.time-machine-container {
  div.new {
    img {}
  }
  div.old {
    img {} 
  }
  div.slider {}
}
```
Insert the rules in the appropriate places. 

## Limitations

- The slider that controls image fading currently uses the slider component from Zurb foundation, so don't try to use this plugin in a non-Foundation theme! Could probably be rewritten fairly easily
- See "Styling", above

## To Do

- Comment the code properly so students can understand what's happening
- Refactor tinyMCE plugin with a "Promise" subclass, again, so code is easier to understand and maintain
- Optionally add code to render the shortcode as image or something similar in the tinyMcE editor (rather than displaying shortcode directly)
- follow examples (https://codex.wordpress.org/Javascript_Reference/wp.media, http://code.tutsplus.com/tutorials/getting-started-with-the-wordpress-media-uploader--cms-22011) that show how to creating multiple frames; but this requires fixing the inefficient and ugly current code). 
- Rewrite shortcode as a PHP object to be more standards-compliant and maintainable
- add anything else we need for Hacking History!
