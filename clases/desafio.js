class Usuario {
    constructor(nombre, apellido, libros, mascotas) {
        this.nombre = nombre
        this.apellido = apellido
        this.mascotas = mascotas
        this.libros = libros

    }

    addMascota(mascotas) {

        this.mascotas.push(mascotas)
    }

    countMascotas() {

        return console.log(this.mascotas.length)

    }

    getFullName() {
        return "hola" + " " + this.nombre + " " + this.apellido
    }

    addBook({
        nombre,
        autor
    }) {
        this.libros.push({
            nombre,
            autor
        })
    }

    getBookName() {
        const arrayNombres = this.libros.map(elemento => elemento.nombre)
        return console.log(arrayNombres);
    }
}


let usuario1 = new Usuario("Jose", "fulano", [{
    nombre: "cronicas marcianas",
    autor: "Ray Bradbury"
}], ["perro", "gato"])


console.log(usuario1.addMascota('pez'))
console.log(usuario1.addMascota('lobo'))
console.log(usuario1.mascotas)
console.log(usuario1.countMascotas());
console.log(usuario1.addBook({
        nombre: 'valle de la muerte',
        autor: 'Conan doyle'
    }

));
console.log(usuario1.libros);
console.log(usuario1.getBookName());