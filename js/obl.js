var carouselMe = function(){
  var Index = 0;
  var count = 4;
   var widDisp = document.documentElement.clientWidth;
   if (widDisp < 1024 && widDisp > 766) {
    count = 3;
      var num = document.querySelectorAll('.obl-carousel .card').length -count;
   }
  else if (widDisp < 766){
    count = 1;
      var num = document.querySelectorAll('.obl-carousel .card').length/4 -1;
   }
   else{
      var num = document.querySelectorAll('.obl-carousel .card').length -count;
   }
  document.querySelector('.obl-carousel .owl-next').onclick = function(){
     if (Index < num) {
      Index++;
      var widthSlide = $('.obl-carousel .card').outerWidth()+absolutePx(getComputedStyle(document.querySelector('.obl-carousel .card')).marginLeft)+absolutePx(getComputedStyle(document.querySelector('.obl-carousel .card')).marginRight);
      $('.obl-carousel .holste').animate({marginLeft: absolutePx(getComputedStyle(document.querySelector('.obl-carousel .holste')).marginLeft)-widthSlide+'px'},300);
      }
  }
  document.querySelector('.obl-carousel .owl-prev').onclick = function(){
    if (Index > 0) {
      Index--;
      var widthSlide = $('.obl-carousel .card').outerWidth()+absolutePx(getComputedStyle(document.querySelector('.obl-carousel .card')).marginLeft)+absolutePx(getComputedStyle(document.querySelector('.obl-carousel .card')).marginRight);
    $('.obl-carousel .holste').animate({marginLeft: absolutePx(getComputedStyle(document.querySelector('.obl-carousel .holste')).marginLeft)+widthSlide+'px'},300);
    }
  }
}();