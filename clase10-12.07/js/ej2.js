// Define una función llamada longitudNombreCompleto(), que dado un nombre y un apellido, y devuelva su longitud total, contando un espacio extra para separar a ambos.

function longitudNombreCompleto (name, surname) {
	return (name.replace(/ /g, '') + surname.replace(/ /g, '')).length + 1;
}

console.log(longitudNombreCompleto('Ana Maria', 'Pasos Pérez'));
