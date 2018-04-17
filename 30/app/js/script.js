// scripts.js/

document.addEventListener('DOMContentLoaded', function() {
 	"use strict";

	console.log("DOMReady");

	 var haburger = document.getElementById('hamburger');

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
	 	var menu = document.getElementById('mobile_menu'),
	 		body = document.getElementsByName('body')[0];


	 	menu.classList.toggle('show');
	 	document.body.classList.toggle('noscroll');
	 	// console.log(e.target.parentElement);
	 	hamburger.classList.toggle('active');
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
	      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');

	      if (target.length) {
	        event.preventDefault();
	        $('html, body').animate({
	          scrollTop: target.offset().top
	        }, 1000, function() {
	          var $target = $(target);
	          $target.focus();
	          if ($target.is(":focus")) {
	            return false;
	          } else {
	            $target.attr('tabindex','-1');
	            $target.focus(); 
	          };
	        });
	      }
	    }
	  });

	  // NAVBAR 

	// Cache selectors
	// var lastId,
	//  topMenu = $("#desktop_nav"),
	//  topMenuHeight = topMenu.outerHeight()+1,
	//  // All list items
	//  menuItems = topMenu.find("a"),
	//  // Anchors corresponding to menu items
	//  scrollItems = menuItems.map(function(){
	//    var item = $($(this).attr("href"));
	//     if (item.length) { return item; }
	//  });

	// // Bind click handler to menu items
	// // so we can get a fancy scroll animation
	// menuItems.click(function(e){
	//   var href = $(this).attr("href"),
	//       offsetTop = href === "#" ? 0 : $(href).offset().top-topMenuHeight+1;
	//   $('html, body').stop().animate({ 
	//       scrollTop: offsetTop
	//   }, 850);
	//   e.preventDefault();
	// });

	// // Bind to scroll
	// $(window).scroll(function(){
	//    // Get container scroll position
	//    var fromTop = $(this).scrollTop()+topMenuHeight;
	   
	//    // Get id of current scroll item
	//    var cur = scrollItems.map(function(){
	//      if ($(this).offset().top < fromTop)
	//        return this;
	//    });
	//    // Get the id of the current element
	//    cur = cur[cur.length-1];
	//    var id = cur && cur.length ? cur[0].id : "";
	   
	//    if (lastId !== id) {
	//        lastId = id;
	//        // Set/remove active class
	//        menuItems
	//          .parent().removeClass("active")
	//          .end().filter("[href='#"+id+"']").parent().addClass("active");
	//    }                   
	// });



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
 