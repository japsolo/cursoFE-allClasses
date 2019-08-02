var allBtns = document.querySelectorAll('.btn');

allBtns.forEach(function (oneBtn, index) {
	oneBtn.addEventListener('click', function () {
		window.alert('Hiciste click sobre el botón: ' + (index + 1));
	});
});
