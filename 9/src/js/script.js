// scripts.js/

document.addEventListener('DOMContentLoaded', function() {
 	"use strict";


 	var nav = document.querySelector('.main-nav');
 	var topOfNav = nav.offsetTop;

 	function stickyNav() {
 		if (window.scrollY >= topOfNav + 10) {
 			document.body.style.paddingTop = nav.offsetHeight + 'px';
 			nav.classList.add('sticky');
 		} else {
 			document.body.style.paddingTop = 0 + 'px';
 			nav.classList.remove('sticky');
 		}
 	}

 	window.addEventListener('scroll', stickyNav);

	// MOBILE HAMBURGER
 	var hamburger = document.getElementById('hamburger');

 	hamburger.addEventListener('click', function(e) {
 		var button = e.target.parentElement;
 		var list = button.nextElementSibling;
	 		button.classList.toggle('active');
	 		list.classList.toggle('active');
	 		document.body.classList.toggle('noScroll');
 	});


 	// INIT SMOOTH scroll

 	var scroll = new SmoothScroll('a[href*="#"]', {
 		offset: 70,
 	});

 	// // OWL CAROUSEL
 	$('.owl-carousel').owlCarousel({
	    loop:true,
	    items: 1,
	    margin:15,
	    dots: true,
	});


 	// FORMS //

 	// labels / placeholders

 	var input = document.querySelectorAll('input, textarea');

 	[].forEach.call(input, function(e){
 		e.addEventListener('focus', function(e) {
 			var label = e.target.previousElementSibling;
 				label.style.top = 0;
 		});
 	});

 	// VALIDATION

 	function validateText() {
 		var name = document.ContactForm.Name,
 			email = document.ContactForm.Email,
 			text = document.ContactForm.Text,
 			message = document.getElementById('msg');

 			message.innerHTML = "";

 		if( name.value == "") {
 			message.style.display = 'inline-block';
 			message.innerHTML += "Please enter your name ! <br>";
 			name.focus();
 			return false;

 		} else {
 			message.innerHTML = "";
 		}

 		if( email.value == "") {
 			message.style.display = 'inline-block';
 			message.innerHTML += "Please enter your email ! <br>";
 			email.focus();
 			return false;

 		} else {
 			message.innerHTML = ""
 		}

 		var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

 		if( !re.test(email.value)) {
 			message.style.display = 'inline-block';
 			message.innerHTML += "Please enter valid email ! <br>"
 			email.focus();
 			return false;
 		} else {
 			message.innerHTML = "";
 		}

 		if( text.value == "") {
 			message.style.display = 'inline-block';
 			message.innerHTML += "Please type some message ! <br>";
 			text.focus();
 			return false;
 		} 

 		message.style.display = 'none';
 		return true;


 	}

 	var contactForm = document.getElementById('form');
 		contactForm.addEventListener('submit', validateText);

});
 

// fade out

function fadeOut(el){
  el.style.opacity = 1;

  (function fade() {
    if ((el.style.opacity -= .1) < 0) {
      el.style.display = "none";
    } else {
      requestAnimationFrame(fade);
    }
  })();
}


 // Video

 var playBtn = document.getElementById('videoPlay');
 playBtn.addEventListener('click', function() {
 	var placeholder = document.querySelector('.video__content'),
 		placeholderW = placeholder.offsetWidth,
 		placeholderH = placeholder.offsetHeight,

 		video = document.getElementById('ytvideo');

 	placeholder.style.display = 'none';

 	video.style.display = 'block';
 	video.width = placeholderW;
 	video.height = placeholderH;

 	fadeOut(this);

 })