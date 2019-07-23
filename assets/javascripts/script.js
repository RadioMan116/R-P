$(document).ready(function () {

	var swiper = new Swiper('.right .swiper-container', {
		slidesPerView: 1,
		spaceBetween: 0,
		pagination: {
			el: '.right .swiper-pagination'
		},
		navigation: {

			nextEl: '.right .swiper-button-next',
			prevEl: '.right .swiper-button-prev',
		},
	});
	var swiper2 = new Swiper('.work-examples .swiper-container', {
		slidesPerView: 1,
		spaceBetween: 0,
		pagination: {
			el: '.work-examples .swiper-pagination'
		},
		navigation: {

			nextEl: '.work-examples .swiper-button-next',
			prevEl: '.work-examples .swiper-button-prev',
		},
	});

});