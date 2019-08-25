var hamburger = document.querySelectorAll('.hamburger');
var overlay = document.querySelector('#overlay');
var hamburgermenu = document.querySelector('#hamburger-menu');

for (let index = 0; index < hamburger.length; index++) {
	hamburger[index].addEventListener('click', function() {
		overlay.style.display = 'block';
		hamburgermenu.style.display = 'block';
	});
}

overlay.addEventListener('click', function() {
	overlay.style.display = 'none';
	hamburgermenu.style.display = 'none';
});
