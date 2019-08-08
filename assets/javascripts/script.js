$(document).ready(function () {

	$(".main a").on("click", "a", function (event) {
		event.preventDefault();
		var id = $(this).attr('href'),
			top = $(id).offset().top;
		$('body,html').animate({
			scrollTop: top
		}, 1500);
	});

	$("#call").on("click", function (event) {
		document.getElementById("myForm").style.display = "block";
	});

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

	$('#myForm form').on('submit', function () {

		var _form = $(this);


		$.post('/send.php', _form.serialize(), function (data) {


			if (data.success) {

				alert('OK');

				_form.find('input[type="text"],input[type="tel"]').val('');

			} else {

				alert('ERROR');

			}

		}, 'json');

		return false;
	});

});
