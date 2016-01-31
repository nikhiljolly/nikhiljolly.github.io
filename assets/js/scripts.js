
 //------- MAGNIFICENT POPUP ---//

      $(document).ready(function() {

        "use strict";

          $('.image-modal').magnificPopup({

          type:'inline',
          fixedContentPos: false,
          removalDelay: 100,
          closeBtnInside: true,
          preloader: false,
          mainClass: 'mfp-fade'

          });

          $(document).on('click', '.popup-modal-dismiss', function (e) {
          e.preventDefault();
          $.magnificPopup.close();
          });


        $('.image-popup-no-margins').magnificPopup({
          type: 'image',
          closeOnContentClick: true,
          closeBtnInside: false,
          fixedContentPos: true,
          mainClass: 'mfp-no-margins mfp-with-zoom', // class to remove default margin from left and right side
          image: {
            verticalFit: true
          },
          zoom: {
            enabled: true,
            duration: 300 // don't foget to change the duration also in CSS
          }
        });

        $('.popup-youtube, .popup-vimeo, .popup-gmaps').magnificPopup({
          disableOn: 700,
          type: 'iframe',
          mainClass: 'mfp-fade',
          removalDelay: 160,
          preloader: false,

          fixedContentPos: false
        });

      });




window.jQuery = window.$ = jQuery;
//------- SITE LOADER ---//

jQuery(window).load(function() { 
    jQuery(".spinner").fadeOut(); 
    jQuery(".loading-mask").delay(400).fadeOut("slow"); 


});

/*---- NAV MENU ---- */


$('.menu-icon').click(function() {
   $(this).toggleClass('menu-icon-clicked');
   $('.menu-nav').toggleClass('menu-nav-open');
  });


//------- JQUERY ISOTOPE ---//

$(window).load(function() {

    "use strict";


// external js: isotope.pkgd.js, classie.js

// ----- getText helper ----- //

var textProp = document.documentElement.textContent !== undefined ? 'textContent' : 'innerText';

function getText( elem ) {
  return elem[ textProp ];
}

// -----  ----- //

docReady( function() {
  // init Isotope
  var iso = new Isotope( '#isotopeGrid', {
    itemSelector: '.itemIso',
    gutter: 10
  });

  // filter functions
  var filterFns = {
    // show if number is greater than 50
    numberGreaterThan50: function( itemElem ) {
      var number = getText( itemElem.querySelector('.number') );
      return parseInt( number, 10 ) > 50;
    },
    // show if name ends with -ium
    ium: function( itemElem ) {
      var name = getText( itemElem.querySelector('.name') );
      return name.match( /ium$/ );
    }
  };

  // bind filter button click
  var filtersElem = document.querySelector('.filters');
  eventie.bind( filtersElem, 'click', function( event ) {
    // only work with buttons
    if ( !matchesSelector( event.target, '.filter' ) ) {
      return;
    }
    var filterValue = event.target.getAttribute('data-filter');
    // use matching filter function
    filterValue = filterFns[ filterValue ] || filterValue;
    iso.arrange({ filter: filterValue });
  });

  // change is-checked class on buttons
  var buttonGroups = document.querySelectorAll('.filters-group');
  for ( var i=0, len = buttonGroups.length; i < len; i++ ) {
    var buttonGroup = buttonGroups[i];
    radioButtonGroup( buttonGroup );
  }

});

function radioButtonGroup( buttonGroup ) {
  eventie.bind( buttonGroup, 'click', function( event ) {
    // only work with buttons
    if ( !matchesSelector( event.target, '.filter' ) ) {
      return;
    }
    classie.remove( buttonGroup.querySelector('.is-checked'), 'is-checked' );
    classie.add( event.target, 'is-checked' );
  });
}


});



