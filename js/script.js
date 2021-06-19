$(document).ready(function() {


	new WOW().init();
 


	$('.company__slider').slick({
		arrows: false,
		infinite: true,
		slidesToShow: 5,
		slidesToScroll: 1,
		cssEase: 'linear',
		autoplay: true,
		autoplaySpeed: 0,
		speed: 2000,
		responsive: [
			{
			  breakpoint: 990,
			  settings: {
				slidesToShow: 4,
				
				
			  }
			},
			{
			  breakpoint: 680,
			  settings: {
				slidesToShow: 3,
				
			  }
			},
			{
				breakpoint: 360,
				settings: {
				  slidesToShow: 3,
				  slidesToScroll: 2,
				}
			  },
				
			
		  ]
	});

$(function () {
    $('.popup-modal').magnificPopup({
        type: 'inline',
        preloader: false,
        focus: '#username',
        modal: true
    });
    $(document).on('click', '.popup-modal-dismiss', function (e) {
        e.preventDefault();
        $.magnificPopup.close();
    });
});


$('.form__mask').mask('+7 (999) 999-99-99');


	const getId = (link) => link.getAttribute('href').replace('#', '');

	const observer = new IntersectionObserver((entries) => {
		entries.forEach((entry) => {
			if (entry.isIntersecting) {
				document.querySelectorAll('.menu__nav-link').forEach((link)=> {
					link.classList.toggle(
						'active', 
						getId(link) === entry.target.id
					);
				});
			}
		});
	}, { 
		threshold: 0.7,
	
	});
	document.querySelectorAll('.section').forEach(
		(section)=> observer.observe(section),
	);

const anchors = document.querySelectorAll('nav a[href*="#"]')

for (let anchor of anchors) {
	anchor.addEventListener("click", function(event){
		event.preventDefault();
		const blockID = anchor.getAttribute('href')
		document.querySelector('' + blockID).scrollIntoView({
			behavior: "smooth"
			
		});
	});
}



});






jQuery(function($) {
	
	$.mask.definitions['H']='[012]';
	$.mask.definitions['M']='[012345]';
	$('#eITDbegintime').mask('H9:M9' + "   " + '(По Мск)');
	$('#eITDendtime').mask('H9:M9');

});



