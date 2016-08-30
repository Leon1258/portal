'use strict';

$(function () {

	// Поиск
	$('.search-trigger').on('click', function(e) {
		e.preventDefault();
		var $this = $(this),
			searchModule = $this.closest('.search-module'),
			menu = $('.menu');

		searchModule.toggleClass('active');
		menu.toggleClass('_left');
	});

	// Слайдер
	$('.main-slider').slick({
		autoplay: true,
		autoplaySpeed: 5000,
		prevArrow: '<button type="button" class="slick-prev"></button>',
		nextArrow: '<button type="button" class="slick-next"></button>',
		dots: true,
		speed: 500
	});
});