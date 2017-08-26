;
var showerModalWindow = function(){
	var key = document.querySelectorAll(".modalKey");
	for (var i = key.length - 1; i >= 0; i--) {
		key[i].onclick = function(){
			var hrefKey = this.getAttribute("data-modal-id");
			var getWindow = document.querySelector(".modalWindow[data-modal-window='"+hrefKey+"']");
			getWindow.setAttribute("data-modal-status",'visab');
			getWindow.onclick = function(event){
				if (event.target.className === 'close') {
					getWindow.setAttribute("data-modal-status",'hidden');
				}
			}
		}
	}
}();