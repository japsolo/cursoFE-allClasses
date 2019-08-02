var titular = document.getElementById('titular');
var imgLechuza = document.querySelector('#lechuza');

titular.style.display = 'none';
imgLechuza.style.filter = 'grayscale(100%)';

var todosLosP = document.querySelectorAll('p');
console.log('Los párrafos:', todosLosP);
console.log('Tipo de dato de los párrafos:', typeof todosLosP);

todosLosP.forEach(function (cadaP) {
	cadaP.style.color = 'red';
});

// var enlacesNavbar = document.querySelectorAll('nav > ul > li > a');
var enlacesNavbar = document.querySelectorAll('#nav a');
console.log('Enlaces navbar:', enlacesNavbar);

// Enlace Top
enlacesNavbar[0].innerText = 'Inicio';

// Enlace Work
document.getElementById('work').innerText = 'Qué hacemos';

// Enlace Portfolio
enlacesNavbar[2].innerText = 'Nuestro portafolio';

// Enlace Contact
enlacesNavbar[3].innerText = 'Escribinos';
