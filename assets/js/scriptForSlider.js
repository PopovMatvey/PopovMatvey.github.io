$(document).ready(function () {
	$('.slider').slick({
		arrows: true,
		dots: true,
		slidesToShow: 1,
		autoplay: true,
		speed: 500,
		autoplaySpeed: 5000,
		// responsive: [
		// 	{
		// 		breakpoint: 768,
		// 		settings: {
		// 			slidesToShow: 1
		// 		}
		// 	},
		// 	{
		// 		breakpoint: 550,
		// 		settings: {
		// 			slidesToShow: 1
		// 		}
		// 	}
		// ]
	});

	$('.main-slider').slick({
		arrows: true,
		dots: true,
		slidesToShow: 1,
		autoplay: false,
		speed: 500,
		autoplaySpeed: 5000,
		responsive: [
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 1
				}
			},
			{
				breakpoint: 550,
				settings: {
					slidesToShow: 1
				}
			}
		]
	});

});