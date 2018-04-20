// scripts.js/

document.addEventListener('DOMContentLoaded', function() {
 	"use strict";

	console.log("DOMReady");
 	var menu = document.getElementById('mobile_menu'),
 		body = document.getElementsByName('body')[0],
		haburger = document.getElementById('hamburger'),

		mobileBreakpoint = 767;

	function checkWidth() {
		var width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
		return width;
	}

	window.addEventListener('resize', function () {
		if(checkWidth() < mobileBreakpoint ) {
			closeMenu();
		}
	});

	 // STICKY NAV
	 window.addEventListener('scroll', stickyNavbar);

	 function stickyNavbar() {
	 	var navabr = document.getElementById('navbar');
	 	if (this.pageYOffset > 0) {
	 		navbar.classList.add('sticky');
	 	} else {
	 		navbar.classList.remove('sticky');
	 	}
	 }

	 // MENU
	 hamburger.addEventListener('click', function(e){
	 	toggleMenu(e);
	 });

	 function toggleMenu(e) {
	 	document.body.classList.toggle('noscroll');
	 	menu.classList.toggle('show');
	 	hamburger.classList.toggle('active');
	 }

	 function closeMenu() {
	 	document.body.classList.remove('noscroll');
	 	menu.classList.remove('show');
	 	hamburger.classList.remove('active');
	 }

	 // SMOOTH SCROLL 
	 //BY CHRIS COYIER CSSTRICKS
	$('a[href*="#"]')
	  .not('[href="#"]')
	  .not('[href="#0"]')
	  .click(function(event) {
	    if (
	      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
	      && 
	      location.hostname == this.hostname
	    ) {
	      var target = $(this.hash);
	      if (target.length) {
	        event.preventDefault();
	        $('html, body').animate({
	          scrollTop: target.offset().top - 50
	        }, 1000,);

	        if(checkWidth() < mobileBreakpoint) {
	        	toggleMenu();
	        }
	      }
	    }
	  });



	// SCROLLREVEAL 
	window.sr = ScrollReveal();

	sr.reveal('section', {
		duration: 'bottom',
		distance: '25px',
		duration: 500,
		delay: 5,
		rotate: {x: 40}
	});



 	//GOOGLE MAPS 
      var map;
      initMap();
      function initMap() {
        map = new google.maps.Map(document.getElementById('map'), {
          center: {lat: 50.06143, lng: 19.93658},
          zoom: 15,
          styles: [
			    {
			        "featureType": "all",
			        "elementType": "labels",
			        "stylers": [
			            {
			                "visibility": "off"
			            }
			        ]
			    },
			    {
			        "featureType": "administrative",
			        "elementType": "all",
			        "stylers": [
			            {
			                "visibility": "off"
			            },
			            {
			                "color": "#efebe2"
			            }
			        ]
			    },
			    {
			        "featureType": "landscape",
			        "elementType": "all",
			        "stylers": [
			            {
			                "color": "#efebe2"
			            }
			        ]
			    },
			    {
			        "featureType": "poi",
			        "elementType": "all",
			        "stylers": [
			            {
			                "color": "#efebe2"
			            }
			        ]
			    },
			    {
			        "featureType": "poi.attraction",
			        "elementType": "all",
			        "stylers": [
			            {
			                "color": "#efebe2"
			            }
			        ]
			    },
			    {
			        "featureType": "poi.business",
			        "elementType": "all",
			        "stylers": [
			            {
			                "color": "#efebe2"
			            }
			        ]
			    },
			    {
			        "featureType": "poi.government",
			        "elementType": "all",
			        "stylers": [
			            {
			                "color": "#dfdcd5"
			            }
			        ]
			    },
			    {
			        "featureType": "poi.medical",
			        "elementType": "all",
			        "stylers": [
			            {
			                "color": "#dfdcd5"
			            }
			        ]
			    },
			    {
			        "featureType": "poi.park",
			        "elementType": "all",
			        "stylers": [
			            {
			                "color": "#bad294"
			            }
			        ]
			    },
			    {
			        "featureType": "poi.place_of_worship",
			        "elementType": "all",
			        "stylers": [
			            {
			                "color": "#efebe2"
			            }
			        ]
			    },
			    {
			        "featureType": "poi.school",
			        "elementType": "all",
			        "stylers": [
			            {
			                "color": "#efebe2"
			            }
			        ]
			    },
			    {
			        "featureType": "poi.sports_complex",
			        "elementType": "all",
			        "stylers": [
			            {
			                "color": "#efebe2"
			            }
			        ]
			    },
			    {
			        "featureType": "road.highway",
			        "elementType": "geometry.fill",
			        "stylers": [
			            {
			                "color": "#ffffff"
			            }
			        ]
			    },
			    {
			        "featureType": "road.highway",
			        "elementType": "geometry.stroke",
			        "stylers": [
			            {
			                "visibility": "off"
			            }
			        ]
			    },
			    {
			        "featureType": "road.arterial",
			        "elementType": "geometry.fill",
			        "stylers": [
			            {
			                "color": "#ffffff"
			            }
			        ]
			    },
			    {
			        "featureType": "road.arterial",
			        "elementType": "geometry.stroke",
			        "stylers": [
			            {
			                "visibility": "off"
			            }
			        ]
			    },
			    {
			        "featureType": "road.local",
			        "elementType": "geometry.fill",
			        "stylers": [
			            {
			                "color": "#fbfbfb"
			            }
			        ]
			    },
			    {
			        "featureType": "road.local",
			        "elementType": "geometry.stroke",
			        "stylers": [
			            {
			                "visibility": "off"
			            }
			        ]
			    },
			    {
			        "featureType": "transit",
			        "elementType": "all",
			        "stylers": [
			            {
			                "visibility": "off"
			            }
			        ]
			    },
			    {
			        "featureType": "water",
			        "elementType": "all",
			        "stylers": [
			            {
			                "color": "#a5d7e0"
			            }
			        ]
			    }
			]
        });
      }

});
 