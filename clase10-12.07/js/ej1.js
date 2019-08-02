/*
Desarrollar un script que tenga una función llama tarjetaDePresentacion, la cual tomará 3 parámetros:
    1. título -> ej: 'Sra' || 'Sr.' || 'Dra.'
    2. nombre
    3. Apellido
Dicha función retornará un string así: "Dra. Clara López".

Si No se le pasa un apellido. La tarjeta de presentación quedará así: 'Dr. Juan Sin Apellido'.

Para esto:

    1. Pedir al visitante el título
    2. Pedir al visitante el nombre
    3. Pedir al visitante el apellido
    4. Pedir confirmación que los datos sean correctos

Finalmente mostrar una alerta con el resultado de la tarjetaDePresentacion.
*/

// .trim() elimina los espacios existentes antes o después de un caracter alfanumérico. NO elimina los espacios que se encuentren entre caracteres.

function tarjetaDePresentacion (titulo, nombre, apellido = 'Sin Apellido') {
	return titulo + ' ' + nombre + ' ' + apellido;
}

function pedirDato (textoPrompt, textoAlerta) {
	do {
		var dato = window.prompt(textoPrompt).trim();
		if (dato === '') {
			window.alert(textoAlerta);
		}
	} while (dato === '');

	// retorno el dato, que será lo que el usuario escribió en el prompt
	return dato;
}

var titulo = pedirDato('Ingresá tu título. Ej: Dra.', 'El título no puede estar vacío');

var nombre = pedirDato('Ingresa un nombre', 'El nombre no puede estar vacío');

var apellido = pedirDato('Ingresa un apellido', 'El apellido no puede estar vacío');

var confirmar = window.confirm('Son correctos los datos: ' + titulo + ' ' + nombre + ' ' + apellido);

if (confirmar) {
	var tarjeta = tarjetaDePresentacion(titulo, nombre, apellido);
	console.log(tarjeta);
}
