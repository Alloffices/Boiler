<?php

// Embeds Files
function board_management_script_enqueue() {

	// Embeds Main Custom CSS File
	wp_enqueue_style('customstyle', get_template_directory_uri() . '/css/board_management.css', array(), '1.0.0', 'all');

	// Embeds Main Custom JS File
	wp_enqueue_script('customjs', get_template_directory_uri() . '/js/board_management.js', array(), '1.0.0', true);
}

add_action('wp_enqueue_scripts', 'board_management_script_enqueue');

?>