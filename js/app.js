$(document).ready(function () {
	
	$(window).resize(function () {
		console.log($(window).width());
		if ($(window).width() >= 1024) {
			$('#mobile-nav').hide(); 
		}

	});

	$(window).resize(function () {	
		if ($(window).width() >= 850) {
			$('mobile-h1').hide();
		}
	});

	$('#burger').click(function () {
		$('#mobile-nav').slideToggle();
	});

	$('#desktop-h1').addClass('animated fadeInLeft');
	$('#landing-img').addClass('animated fadeInUp');

	/* $(window).scroll(function(){
		$('desktop-h1').addClass('animated fadeOutUp');
		$('landing-img').addClass('animated fadeOutLeft');
	}); */
});