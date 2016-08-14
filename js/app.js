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


$(#'desktop-h1').load(function () {
	$('#desktop-h1').addClass('fadeInUp');
});
	
});