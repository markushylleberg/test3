window.sr = ScrollReveal({ reset: true });
sr.reveal('.foo-1', { duration: 200 });

sr.reveal('.foo-2', { 
  origin: 'bottom', 
  duration: 1500 
});

sr.reveal('.foo-3', { 
  rotate: { x: 100, y: 100, z: 0 },
  duration: 1500
});

sr.reveal('.foo-4', { 
  rotate: { x: 100, y: 0, z: 0 },
  duration: 400
});

sr.reveal('.foo-5', { 
  rotate: { x: 100, y: 100, z: 0 },
  duration: 300
});


$('a').magnificPopup({
		type: 'image',
		closeBtnInside: false,
    closeOnContentClick: false,
  
    callbacks: {
      open: function() {
        var self = this;
        self.wrap.on('click.pinhandler', 'img', function() {
          self.wrap.toggleClass('mfp-force-scrollbars');
        });
      },
      beforeClose: function() {
            this.wrap.off('click.pinhandler');
        this.wrap.removeClass('mfp-force-scrollbars');
      }
    },
     
    image: {
			verticalFit: false
		}
  
	});


(function () {

  "use strict";

  // Feature test to rule out some older browsers
  if ("querySelector" in document && "addEventListener" in window) {

    // forEach method, that passes back the stuff we need
    var forEach = function (array, callback, scope) {
      for (var i = 0; i < array.length; i++) {
        callback.call(scope, i, array[i]);
      }
    };


$(".knap_miele").click(function () {
    $('.gif_big').css('z-index', '1');
    $('.gif_qcells').css('z-index', '1');
    $('.gif_danfoss').css('z-index', '1');
    $('.gif_grundfos').css('z-index', '1');
    $('.gif_miele').css('z-index', '10');
    $('.tekst_big').css('opacity', '0');
    $('.tekst_niras').css('opacity', '0');
    $('.tekst_miele').css('opacity', '1');
    $('.tekst_qcells').css('opacity', '0');
    $('.tekst_danfoss').css('opacity', '0');
    $('.tekst_grundfos').css('opacity', '0');
    $('.logo_niras').css('opacity', '0');
    $('.logo_big').css('opacity', '0');
    $('.logo_qcells').css('opacity', '0');
    $('.logo_danfoss').css('opacity', '0');
    $('.logo_grundfos').css('opacity', '0');
    $('.logo_miele').css('opacity', '1');
    $('.kontakt_big').css('opacity', '0');
    $('.kontakt_grundfos').css('opacity', '0');
    $('.kontakt_danfoss').css('opacity', '0');
    $('.kontakt_qcells').css('opacity', '0');
    $('.kontakt_niras').css('opacity', '0');
    $('.kontakt_miele').css('opacity', '1');
});

$(".knap_big").click(function () {
    $('.gif_qcells').css('z-index', '1');
    $('.gif_danfoss').css('z-index', '1');
    $('.gif_grundfos').css('z-index', '1');
    $('.gif_miele').css('z-index', '1');
    $('.gif_big').css('z-index', '10');
    $('.tekst_big').css('opacity', '1');
    $('.tekst_niras').css('opacity', '0');
    $('.tekst_miele').css('opacity', '0');
    $('.tekst_qcells').css('opacity', '0');
    $('.tekst_danfoss').css('opacity', '0');
    $('.tekst_grundfos').css('opacity', '0');
    $('.logo_niras').css('opacity', '0');
    $('.logo_qcells').css('opacity', '0');
    $('.logo_danfoss').css('opacity', '0');
    $('.logo_grundfos').css('opacity', '0');
    $('.logo_miele').css('opacity', '0');
    $('.logo_big').css('opacity', '1');
    $('.kontakt_big').css('opacity', '1');
    $('.kontakt_grundfos').css('opacity', '0');
    $('.kontakt_danfoss').css('opacity', '0');
    $('.kontakt_qcells').css('opacity', '0');
    $('.kontakt_niras').css('opacity', '0');
    $('.kontakt_miele').css('opacity', '0');
});

$(".knap_qcells").click(function () {
    $('.gif_danfoss').css('z-index', '1');
    $('.gif_grundfos').css('z-index', '1');
    $('.gif_miele').css('z-index', '1');
    $('.gif_big').css('z-index', '1');
    $('.gif_qcells').css('z-index', '10');
    $('.tekst_big').css('opacity', '0');
    $('.tekst_niras').css('opacity', '0');
    $('.tekst_miele').css('opacity', '0');
    $('.tekst_qcells').css('opacity', '1');
    $('.tekst_danfoss').css('opacity', '0');
    $('.tekst_grundfos').css('opacity', '0');
    $('.logo_niras').css('opacity', '0');
    $('.logo_danfoss').css('opacity', '0');
    $('.logo_grundfos').css('opacity', '0');
    $('.logo_miele').css('opacity', '0');
    $('.logo_big').css('opacity', '0');
    $('.logo_qcells').css('opacity', '1');
    $('.kontakt_big').css('opacity', '0');
    $('.kontakt_grundfos').css('opacity', '0');
    $('.kontakt_danfoss').css('opacity', '0');
    $('.kontakt_qcells').css('opacity', '1');
    $('.kontakt_niras').css('opacity', '0');
    $('.kontakt_miele').css('opacity', '0');
});

$(".knap_danfoss").click(function () {
    $('.gif_grundfos').css('z-index', '1');
    $('.gif_miele').css('z-index', '1');
    $('.gif_big').css('z-index', '1');
    $('.gif_qcells').css('z-index', '1');
    $('.gif_danfoss').css('z-index', '10');
    $('.tekst_big').css('opacity', '0');
    $('.tekst_miele').css('opacity', '0');
    $('.tekst_niras').css('opacity', '0');
    $('.tekst_qcells').css('opacity', '0');
    $('.tekst_danfoss').css('opacity', '1');
    $('.tekst_grundfos').css('opacity', '0');
    $('.logo_niras').css('opacity', '0');
    $('.logo_grundfos').css('opacity', '0');
    $('.logo_miele').css('opacity', '0');
    $('.logo_big').css('opacity', '0');
    $('.logo_qcells').css('opacity', '0');
    $('.logo_danfoss').css('opacity', '1');
    $('.kontakt_big').css('opacity', '0');
    $('.kontakt_grundfos').css('opacity', '0');
    $('.kontakt_danfoss').css('opacity', '1');
    $('.kontakt_qcells').css('opacity', '0');
    $('.kontakt_niras').css('opacity', '0');
    $('.kontakt_miele').css('opacity', '0');
});

$(".knap_grundfos").click(function () {
    $('.gif_miele').css('z-index', '1');
    $('.gif_big').css('z-index', '1');
    $('.gif_qcells').css('z-index', '1');
    $('.gif_danfoss').css('z-index', '1');
    $('.gif_grundfos').css('z-index', '10');
    $('.tekst_big').css('opacity', '0');
    $('.tekst_miele').css('opacity', '0');
    $('.tekst_niras').css('opacity', '0');
    $('.tekst_qcells').css('opacity', '0');
    $('.tekst_danfoss').css('opacity', '0');
    $('.tekst_grundfos').css('opacity', '1');
    $('.logo_niras').css('opacity', '0');
    $('.logo_miele').css('opacity', '0');
    $('.logo_big').css('opacity', '0');
    $('.logo_qcells').css('opacity', '0');
    $('.logo_danfoss').css('opacity', '0');
    $('.logo_grundfos').css('opacity', '1');
    $('.kontakt_big').css('opacity', '0');
    $('.kontakt_grundfos').css('opacity', '1');
    $('.kontakt_danfoss').css('opacity', '0');
    $('.kontakt_qcells').css('opacity', '0');
    $('.kontakt_niras').css('opacity', '0');
    $('.kontakt_miele').css('opacity', '0');
});

$(".knap_niras").click(function () {
    $('.gif_miele').css('z-index', '1');
    $('.gif_big').css('z-index', '10');
    $('.gif_qcells').css('z-index', '1');
    $('.gif_danfoss').css('z-index', '1');
    $('.gif_grundfos').css('z-index', '1');
    $('.tekst_big').css('opacity', '0');
    $('.tekst_miele').css('opacity', '0');
    $('.tekst_niras').css('opacity', '1');
    $('.tekst_qcells').css('opacity', '0');
    $('.tekst_danfos').css('opacity', '0');
    $('.tekst_grundfos').css('opacity', '0');
    $('.logo_niras').css('opacity', '1');
    $('.logo_miele').css('opacity', '0');
    $('.logo_big').css('opacity', '0');
    $('.logo_qcells').css('opacity', '0');
    $('.logo_danfoss').css('opacity', '0');
    $('.logo_grundfos').css('opacity', '0');
    $('.kontakt_big').css('opacity', '0');
    $('.kontakt_grundfos').css('opacity', '0');
    $('.kontakt_danfoss').css('opacity', '0');
    $('.kontakt_qcells').css('opacity', '0');
    $('.kontakt_niras').css('opacity', '1');
    $('.kontakt_miele').css('opacity', '0');
});



