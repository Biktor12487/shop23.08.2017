var zoomGallery = function(){
	if (document.querySelectorAll('.zoomGallery').length) {
		var el = document.querySelectorAll('.zoomGallery .link');
		for (var i = el.length - 1; i >= 0; i--) {
			el[i].setAttribute('data-index',i)
		}
		document.querySelector('.zoomGallery .bigImg').onclick = function(){
			var index = document.querySelector('.zoomGallery .link[data-status="active"]').getAttribute('data-index');
			document.querySelector('.zoomGallery').setAttribute('data-status','zoom');
			var fSrc = document.querySelector('.zoomGallery .link[data-status="active"] img').getAttribute('src');
			document.querySelector('.zoomGallery .psevdoImg img').setAttribute('src',fSrc)
			document.querySelector('.zoomGallery .prev').onclick = function(){
					if (index > 0) {
						index--;
						var nSrc = document.querySelectorAll('.zoomGallery .link')[index].querySelector('img').getAttribute('src');
						document.querySelector('.zoomGallery .psevdoImg img').setAttribute('src',nSrc)
						document.querySelector('.zoomGallery .link[data-status="active"]').removeAttribute('data-status')
						document.querySelectorAll('.zoomGallery .link')[index].setAttribute('data-status','active')
					}
			}
			document.querySelector('.zoomGallery .next').onclick = function(){
					if (index < document.querySelectorAll('.zoomGallery .link').length -1) {
						index++;
						var nSrc = document.querySelectorAll('.zoomGallery .link')[index].querySelector('img').getAttribute('src');
						document.querySelector('.zoomGallery .psevdoImg img').setAttribute('src',nSrc)
						document.querySelector('.zoomGallery .link[data-status="active"]').removeAttribute('data-status')
						document.querySelectorAll('.zoomGallery .link')[index].setAttribute('data-status','active')
					}
			}
		}
		document.querySelector('.zoomGallery .close').onclick = function(){
			document.querySelector('.zoomGallery').setAttribute('data-status','just');
		}
	}
}();