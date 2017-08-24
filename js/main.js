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
$(document).ready(function(){
  $("#popularProducts-slider").owlCarousel({
  	items: 4,
  	dots: false,
  	nav: true,
  	navText: false,
  	margin: 0,
  });
});
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
  });
});
var navCategory = function(){
	var el = document.querySelectorAll('.navbar > ul > li');
	for (var i = el.length - 1; i >= 0; i--) {
		el[i].onmouseover = function(){
			this.setAttribute('data-status','visible')
		}
		el[i].onmouseleave = function(){
			this.setAttribute('data-status','hidden')
		}
	}
}();
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