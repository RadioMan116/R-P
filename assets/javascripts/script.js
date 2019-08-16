$(document).ready(function () {


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
	var swiper3 = new Swiper('.discount .swiper-container', {
		slidesPerView: 1,
		spaceBetween: 0,
		// loop: true,
		// autoplay: {
		// 	delay: 500,
		// 	disableOnInteraction: false,
		// },
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
	Inputmask.extendAliases({
		'customAlias': {
			mask: "+7 (999) 999-99-99",
			oncomplete: function () {
				$(this).removeClass('BadPols');
			},
			onincomplete: function () {
				$(this).addClass('BadPols');
				$(this).val('');
			},
		}
	});
	Inputmask("customAlias").mask("[type=tel]");
	$("[data-scroll]").click(function () {
		event.preventDefault();
		var id = $(this).attr('href'),
			top = $(id).offset().top;
		$('body,html').animate({
			scrollTop: top
		}, 1500);
		return false;
	})
});
