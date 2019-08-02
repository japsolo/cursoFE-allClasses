// Nombre del usuario
var nombreUsuario = window.prompt('Decinos tu nombre');

// Edad del usuario
var edadUsuario = window.prompt('Decinos tu edad');

// Confirmamos los datos
var confirmacion = window.confirm('Tu nombre es ' + nombreUsuario + ' y tu edad es ' + edadUsuario + '. ¿Estás de acuerdo?');

// Validamos con un condicional
if (confirmacion) {
	window.alert('Hola ' + nombreUsuario + '. Bienvenid@');
} else {
	window.location = 'http://instagram.com';
}
