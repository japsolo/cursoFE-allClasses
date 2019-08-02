// 1. Capturamos el formulario
var elForm = document.querySelector('form');

// 2. Capturamos los campos de ese formulario
var campos = elForm.elements;

// 2a. Parseamos la colección HTML de los campos a un Array
campos = Array.from(campos);

// 3. Sacamos al último elemento de los campos, pues es el botón y no nos interesa validarlo.
campos.pop();

// 4. Creamos una función para validar si el campo está vació.
function estaVacio (campo) {
	var valorDelCampo = campo.value.trim(); // El trim() elimina los espacios vacíos antes y después de uno o muchos caracteres.
	if (valorDelCampo === '') {
		return true;
	} else {
		return false;
	}
}

var regexEmail = /\S+@\S+\.\S+/;

// 5. Iteramos sobre el array de campos para asignarle el evento y el handler a cada uno de ellos

campos.forEach(function (unCampo) {
	unCampo.addEventListener('blur', function () {
		// Capturamos la alerta que le corresponde a este campo
		// parentElement = captura al elemento padre
		// nextElementSibling = capturar al hermano subsiguiente
		if (this.name === 'avatar') {
			// Si el campo es el de avatar tengo que subir 2 niveles de elementos padre para capturar a la alerta
			var alerta = this.parentElement.parentElement.nextElementSibling;
		} else {
			alerta = this.parentElement.nextElementSibling;
		}

		if (estaVacio(unCampo)) {
			// Si el campo está vacío le vamos a quitar a la alerta la clase hidden
			// classList = nos retorna todo los valores que existen en el atributo class
			// remove() = elimina del atributo class el valor dado
			alerta.classList.remove('hidden');
			// Ademas a la alerta la vamos a agregar un texto personalizado que evidencie el error
			alerta.innerHTML = 'El campo <b>' + this.name + '</b> es obligatorio.';
		} else {
			// Si el campo NO está vació, entonces le re asignamos la clase hidden para que no se muestre
			alerta.classList.add('hidden');
			// Si queremos, le podemos eliminiar el contenido de texto que tiene adentro
			alerta.innerHTML = 'Data correcta';

			// Validamos el campo email
			if (this.name === 'email') {
				if (!regexEmail.test(this.value)) {
					alerta.classList.remove('hidden');
					alerta.innerHTML = 'Escribí una dirección de correo electrónico válida';
				}
			}
		}
	});
});
