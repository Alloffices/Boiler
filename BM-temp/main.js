$(document).ready(function() {

	// WoW Animation Logic Below
	// Apply Animation Delay: 
	// data-wow-duration="2s" data-wow-delay="5s"
	var wow = new WOW(
	  {
	    boxClass:     'wow',      // animated element css class (default is wow)
	    animateClass: 'animated', // animation css class (default is animated)
	    offset:       0,          // distance to the element when triggering the animation (default is 0)
	    mobile:       true,       // trigger animations on mobile devices (default is true)
	    live:         true,       // act on asynchronously loaded content (default is true)
	    callback:     function(box) {
	      // the callback is fired every time an animation is started
	      // the argument that is passed in is the DOM node being animated
	    },
	    scrollContainer: null // optional scroll container selector, otherwise use window
	  }
	);
	wow.init();

	$(function() {
		$('.l-one').on('mouseover', function() {
			$('.l-one .list-group-item').addClass('active');
			$('.desktop .list-group img').addClass('thing');
			$('.desktop .list-group').prepend('<img id="lap-top" src="http://images.apple.com/macbook-air/images/overview_wireless_hero_enhanced.png" />')
			$('.desktop .list-group').remove('<img id="lap-top" src="http://www.metrocomputeratlanta.com/wp-content/uploads/2015/06/MBPR13.png" />')
			$('.desktop .list-group').remove('<img id="lap-top" src="http://sophisticatedfinance.typepad.com/.a/6a00e00981da57883301053677a277970c-pi" />')
			$('.desktop .list-group').remove('<img id="lap-top" class="thing" src="https://cdn0.vox-cdn.com/thumbor/SI8op_HeoHy-McFrBIlt7z16sUY=/cdn0.vox-cdn.com/uploads/chorus_asset/file/3782882/image_large_2x.0.png">');
		});

		$('.l-one').on('mouseout', function() {
			$('.l-one .list-group-item').removeClass('active');
			$("desktop list-group img").removeClass('thing');
		});
	});

	$(function() {
		$('.l-two').on('mouseover', function() {
			$('.l-two .list-group-item').addClass('active');
			$('.desktop .list-group img').addClass('thing');
			$('.desktop .list-group').prepend('<img id="lap-top" src="http://www.metrocomputeratlanta.com/wp-content/uploads/2015/06/MBPR13.png" />')
			$('.desktop .list-group').remove('<img id="lap-top" src="http://images.apple.com/macbook-air/images/overview_wireless_hero_enhanced.png" />')
			$('.desktop .list-group').remove('<img id="lap-top" src="http://sophisticatedfinance.typepad.com/.a/6a00e00981da57883301053677a277970c-pi" />')
		});

		$('.l-two').on('mouseout', function() {
			$('.l-two .list-group-item').removeClass('active');
			$("desktop list-group img").removeClass('thing');
		});
	});

	$(function() {
		$('.l-three').on('mouseover', function() {
			$('.l-three .list-group-item').addClass('active');
			$('.desktop .list-group img').addClass('thing');
			$('.desktop .list-group').prepend('<img id="lap-top" src="http://sophisticatedfinance.typepad.com/.a/6a00e00981da57883301053677a277970c-pi" />')
			$('.desktop .list-group').remove('<img id="lap-top" src="http://www.metrocomputeratlanta.com/wp-content/uploads/2015/06/MBPR13.png" />')
			$('.desktop .list-group').remove('<img id="lap-top" src="http://images.apple.com/macbook-air/images/overview_wireless_hero_enhanced.png" />')
		});

		$('.l-three').on('mouseout', function() {
			$('.l-three .list-group-item').removeClass('active');
			$("desktop list-group img").removeClass('thing');
		});
	});
});

document.getElementByClassName("desktop list-group").addEventListener("mouseout", function() {
   document.getElementByClassname("desktop list-group img").removeClass('thing');
}, false);

