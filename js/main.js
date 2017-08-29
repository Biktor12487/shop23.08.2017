$(window).scroll(function () {if ($(this).scrollTop() > 0) {$('#scroller').fadeIn();} else {$('#scroller').fadeOut();}});
$('#scroller').click(function () {$('body,html').animate({scrollTop: 0}, 400); return false;});
$(document).ready(function(){
  $("#header-slider").owlCarousel({
  	items: 1,
  	dots: true,
  	nav: true,
  	navText: false,
  	margin: 0,
  	autoWidth: true,
  });
});
// $(document).ready(function(){
//   $("#popularProducts-slider").owlCarousel({
//   	items: 4,
//   	dots: false,
//   	nav: true,
//   	navText: false,
//   	margin: 0,
//     responsive:{ 
//       1024:{
//         items: 4,
//       },
//       768:{
//         items:3
//       }
//       ,
//       0:{
//         items: 1,
//       }
//     }
//   });
// });
$(document).ready(function(){
  $("#long-slider").owlCarousel({
  	items: 1,
  	dots: false,
  	nav: true,
  	navText: false,
  	margin: 0,
  });
});
$(document).ready(function(){
  $("#youWasSee-slider").owlCarousel({
  	items: 10,
  	dots: false,
  	nav: true,
  	navText: false,
  	margin: 10,
    responsive: {
      766:{
        items: 6,
      },
      980:{
        items: 8,
      },
       1100:{
        items: 10,
      },
       478:{
        items: 3,
      }
      ,
      0:{
        items: 2,
      }
    }
  });
});
$(document).ready(function(){
  $(".recomendation-slider").owlCarousel({
    items: 4,
    dots: false,
    nav: true,
    navText: false,
    margin: 10,
  });
});
function absolutePx(str){
  return Number(str.substr(0,str.length -2));
}

var chekbox = function(){
	var el = document.querySelectorAll('.psevodCheckBox');
	for (var i = el.length - 1; i >= 0; i--) {
		el[i].onclick = function(){
			if (this.getAttribute('data-status') == 'off' || !this.getAttribute('data-status')) {
				this.setAttribute('data-status','on')
				this.querySelector('input').setAttribute('checked','checked')
			}
			else{
				this.setAttribute('data-status','off')
				this.querySelector('input').removeAttribute('checked')
			}
		}
	}
}();
$(document).ready(function(){
  $('.sizeSelect').customSelect();
  $('.orderSelect').customSelect();
});
var countField = function(){
  var el = document.querySelectorAll('.countField');
  for (var i = el.length - 1; i >= 0; i--) {
    el[i].querySelector('input').value = 1;
     el[i].querySelector('.minus').onclick = function() {
        if ( Number( this.parentNode.querySelector('input').value) > 1) {
          this.parentNode.querySelector('input').value = Number( this.parentNode.querySelector('input').value) -1;
        }
        else{
          this.parentNode.querySelector('input').value = 1;
        }
      }
     el[i].querySelector('.plus').onclick = function() {
        if ( Number( this.parentNode.querySelector('input').value) < 999) {
          this.parentNode.querySelector('input').value = Number( this.parentNode.querySelector('input').value) +1;
        }
        else{
          this.parentNode.querySelector('input').value = 999;
        }
      }
     el[i].querySelector('input').onchange = function(){
        if (Number(this.value) < 1) {
          this.value = 1;
        }
        else if (Number(this.value) > 999) {
          this.value = 999;
        }
        else if (this.value % 1 != 0) {
          this.value = 1;
        }
      }
  }
}();
var sliderMint = function(){
  var index = 0;
  var slider = document.querySelectorAll('.sliderMint');
  if (slider.length) {
    slider = slider[0];
      var el = document.querySelectorAll('.link');
  for (var i = el.length - 1; i >= 0; i--) {
    el[i].setAttribute('data-index',i)
  }
  var el =  slider.querySelectorAll('.link img');
  for (var i = el.length - 1; i >= 0; i--) {
    el[i].onclick = function(){
      index =  this.parentNode.getAttribute('data-index');
      var src = this.getAttribute('src');
      var src1 = this.getAttribute('data-src');
      slider.querySelector('.link[data-status="active"]').removeAttribute('data-status');
      this.parentNode.setAttribute('data-status','active');
      slider.querySelector('.holste img').setAttribute('src',src1 || src);
    }
  }
  var left = slider.querySelector('.arrow-prev');
  var rigth = slider.querySelector('.arrow-next');
  rigth.onclick = function(){
    console.log(index)
    // var inex = Numver(this.getAttribute('data-index'))++;
    if (index < document.querySelectorAll('.sliderMint .link').length -1) {
        index ++;
       var src = document.querySelector('.link[data-index="'+index+'"] img').getAttribute('src');
        var src1 = document.querySelector('.link[data-index="'+index+'"]').getAttribute('data-src');
        slider.querySelector('.link[data-status="active"]').removeAttribute('data-status');
      slider.querySelector('.holste img').setAttribute('src',src1 || src);
      if (document.querySelector('.link[data-status="active"]')) {
          document.querySelector('.link[data-status="active"]').removeAttribute('data-status');
      }
        document.querySelector('.link[data-index="'+index+'"]').setAttribute('data-status','active');
    }
  left.onclick = function(){
    console.log(index)
    // var inex = Numver(this.getAttribute('data-index'))++;
    if (index > 0) {
        index --;
       var src = document.querySelector('.link[data-index="'+index+'"] img').getAttribute('src');
        var src1 = document.querySelector('.link[data-index="'+index+'"]').getAttribute('data-src');
        slider.querySelector('.link[data-status="active"]').removeAttribute('data-status');
      slider.querySelector('.holste img').setAttribute('src',src1 || src);
      if (document.querySelector('.link[data-status="active"]')) {
          document.querySelector('.link[data-status="active"]').removeAttribute('data-status');
      }
        document.querySelector('.link[data-index="'+index+'"]').setAttribute('data-status','active');
    }
    
  }
    
  }
  }
}();
var tabsJust = function(){
  var el = document.querySelectorAll('.tabs');
  for (var i = el.length - 1; i >= 0; i--) {
    el[i].onclick = function(){
      var id = this.getAttribute('href');
        console.log(id)
      if ( getComputedStyle(document.querySelector(id)).display == 'none') {
        document.querySelector(id).style.display = "block";
      }
      else{
      }
    }
      $(document).mouseup(function (e){ // событие клика по веб-документу
        var div = $(".shareList"); // тут указываем ID элемента
        if (!div.is(e.target) // если клик был не по нашему блоку
            && div.has(e.target).length === 0) { // и не по его дочерним элементам
          div.css('display','none')
        }
  });

  }
}();

var tabses = function(){
  var el = document.querySelectorAll('.tabses');
  for (var i = el.length - 1; i >= 0; i--) {
     var e = el[i].querySelectorAll('.link');
     var body = el[i].querySelectorAll('.row');
      for (var x = body.length - 1; x >= 0; x--) {
        body[x].setAttribute('data-status','hidden');
      }
  }
  var el = document.querySelectorAll('.row .link');
  for (var i = el.length - 1; i >= 0; i--) {
    el[i].onclick = function(){
      if (this.parentNode.getAttribute('data-status') == 'hidden') {
         var href = this.getAttribute('href');
          if (document.querySelectorAll('.row[data-status="visible"]').length) {
            document.querySelector('.row[data-status="visible"]').setAttribute('data-status','visible')
          }
          console.log(document.querySelector(href).getAttribute('data-status'))
            document.querySelector(href).setAttribute('data-status','visible');
      }
      else{
        var href = this.getAttribute('href');
          console.log(document.querySelector(href).getAttribute('data-status'))
            document.querySelector(href).setAttribute('data-status','hidden');
      }
     }
  }       
}();
