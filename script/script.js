$(document).ready(function(){
  $(".owl-carousel").owlCarousel({
    navigation: true, 
        slideSpeed: 300,
        paginationSpeed: 400,
        singleItem: true,
        transitionStyle: "fadeUp",
        autoPlay: true,
        navigationText: [
        "<img src='../assets/images/arrow.svg'>", "<img src='../assets/images/arrow2.svg'>"     
        ],
        responsive : {
          // breakpoint from 0 up
          0 : {
            items:1
          },
          // breakpoint from 768 up
          768 : {
            items:3
          }
      }
  });

});

var toggle = false;
console.log('toggle',toggle);
function toggleMenu(){
  if(!toggle){
    $('.secondary-nav').css('display','block');
    toggle = true;
  }
  else{
    $('.secondary-nav').css('display','none');
    toggle = false;
  }
}

$(window).scroll(function() {   
    if(window.pageYOffset >= 1430){
         $('.big-cart h4').addClass('fw');
    }
    else{
      $('.big-cart h4').removeClass('fw');
    }
}); 
