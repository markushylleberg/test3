$(".pin1_img").hover(function(){
    $('.pin1_tekst').css("height", "80px", 500);
},function(){
    $('.pin1_tekst').css("height", "0px");
}, 'fast');

$(".pin1_img").hover(
function(){
  $(this).filter(':not(:animated)').animate({
     marginTop:'4%',
  });
},
function() {
  $(this).animate({
     marginTop:'0%'
  },'fast');
});


$(".pin2_img").hover(function(){
    $('.pin2_tekst').css("height", "80px", 500);
},function(){
    $('.pin2_tekst').css("height", "0px");
}, 'fast');

$(".pin2_img").hover(
function(){
  $(this).filter(':not(:animated)').animate({
     marginTop:'4%',
  });
},
function() {
  $(this).animate({
     marginTop:'0%'
  },'fast');
});


$(".pin3_img").hover(function(){
    $('.pin3_tekst').css("height", "80px", 500);
},function(){
    $('.pin3_tekst').css("height", "0px");
}, 'fast');

$(".pin3_img").hover(
function(){
  $(this).filter(':not(:animated)').animate({
     marginTop:'4%',
  });
},
function() {
  $(this).animate({
     marginTop:'0%'
  },'fast');
});



$(".pin4_img").hover(function(){
    $('.pin4_tekst').css("height", "50px", 500);
},function(){
    $('.pin4_tekst').css("height", "0px");
}, 'fast');

$(".pin4_img").hover(
function(){
  $(this).filter(':not(:animated)').animate({
     marginTop:'4%',
  });
},
function() {
  $(this).animate({
     marginTop:'0%'
  },'fast');
});

