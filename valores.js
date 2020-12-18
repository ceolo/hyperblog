function Persona(nombre, apellido, altura) {
	this.nombre = nombre
	this.apellido = apellido
	this.edad = 20
	this.altura = altura
	return this
}

Persona.prototype.saludar = function () {
	return console.log(`Hola, me llamo ${this.nombre} ${this.apellido} `)
}


Persona.prototype.soyAlto = function () {
	if (this.altura >= 1.8) {
		console.log(`La persona ${this.nombre} es Alta con un total de ${this.altura} `)
	} else {
		console.log('no es alto')
	}
}

var oscar = new Persona('oscar', 'cuartas', 1.85)

var sofia = new Persona('Sofia', 'Molina', 1.5)

