/* global $ */

// old fashion - JS Vanilla
// var elH1 = document.querySelector('h1');
// console.log(elH1);

// jQuery way
var heading = $('h1');

// Aplicando CSS con jQuery
// heading.css('font-size', '80px');
// heading.css('color', 'red');
// heading.css('text-align', 'center');
var h1CSS = {
	fontSize: '80px',
	color: 'red',
	textAlign: 'center',
	fontWeight: 'normal'
};

heading.css(h1CSS);
// heading.attr('style', 'text-align: center, color: red');

console.log(heading.text()); // Hello world!

heading.text('Va un texto desde jQuery');

console.log(heading.text()); // Va un texto desde jQuery

heading.html('Un texto con <i>itálica</i>');

console.log(heading.html()); // Un texto con <i>itálica</i>
console.log(heading.text()); // Un texto con itálica

console.log(heading.attr('style'));

heading.attr({
	title: 'Hello!',
	class: 'alert'
});

$('#up').on('click', function () {
	heading.slideUp(500);
});

$('#down').on('click', function () {
	heading.slideDown(500);
});

$('#toggle').on('click', function () {
	heading.slideToggle(500);
});

$('#in').on('click', function () {
	heading.fadeIn(500);
});

$('#out').on('click', function () {
	heading.fadeOut(500);
});

$('#fToggle').on('click', function () {
	heading.fadeToggle(500);
});

$('button').addClass('myClass');
