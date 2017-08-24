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