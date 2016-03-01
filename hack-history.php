<?php

/**
 * The plugin bootstrap file
 *
 *
 * @link              http://hackinghistory.ca
 * @since             1.0.0
 * @package           hacking_history_tools
 *
 * @wordpress-plugin
 * Plugin Name:       Hacking History Wordpress Toolkit
 * Plugin URI:        http://hackinghistory.ca
 * Description:       Image Fade shortcode, and other commonly used code snippets
 * Version:           0.1
 * Author:            Matt Price via Ahmad Awais
 * Author URI:        http://matt.hackinghistory.ca/
 * License:           GPL-2.0+
 * License URI:       http://www.gnu.org/licenses/gpl-2.0.txt
 * Text Domain:       hacking_history_tools
 * Domain Path:       /languages
 */

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}




/**
 * 
 * Including all the different shortcode modules here
 *
 */
	require_once plugin_dir_path( __FILE__ ) . 'shortcodes/hist-image-overlay.php';

 ?>
