function nave(){
      var widDisp = document.documentElement.clientWidth;
      if (widDisp < 768) {
        var navCategory = function(){
        var el = document.querySelectorAll('.categoryNav .navbar > ul > li');
      for (var i = el.length - 1; i >= 0; i--) {
        el[i].setAttribute('data-height',absolutePx(getComputedStyle(el[i].querySelector('.navContent')).height));
        el[i].setAttribute('data-status', 'hidden');
        el[i].querySelector('.navContent').style.cssText = 'height: 0px';
      }
      var el = document.querySelectorAll('.navbar > ul > li');
      for (var i = el.length - 1; i >= 0; i--) {
        el[i].onclick = function(){

          if (document.querySelectorAll('.navbar > ul > li[data-status="visible"]').length) {
            document.querySelector('.navbar > ul > li[data-status="visible"]').querySelector('.navContent').style.height = 0+'px';
            document.querySelector('.navbar > ul > li[data-status="visible"]').setAttribute('data-status','hidden');
          }
          this.setAttribute('data-status','visible');
          var needHeight = this.getAttribute('data-height');
          $(this.querySelector('.navContent')).animate({height: needHeight+'px'},100);
        }
      }
    }();
    var el = document.querySelector('.categoryNav .navbar .burger');
    el.onclick = function(e){
        var status = this.parentNode.parentNode.getAttribute('data-pon');
        if (status == 'hidden') {
          this.parentNode.parentNode.setAttribute('data-pon','visab');
        }
        else{
          this.parentNode.parentNode.setAttribute('data-pon','hidden');
        }
    }
  }
  else{
     var el = document.querySelectorAll('.categoryNav .navbar > ul > li');
      for (var i = el.length - 1; i >= 0; i--) {
        el[i].setAttribute('data-status', 'hidden');
        el[i].querySelector('.navContent').style.height = 'auto';
      }
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
  }
}
window.addEventListener('load',nave) 
window.addEventListener('resize',nave) 