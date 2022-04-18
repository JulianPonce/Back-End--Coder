class Banda {

    constructor(nombre, genero) {
        this.nombre = nombre
        this.genero = genero
    }

    banda() {
        return "banda: " + this.nombre + " " +
            "genero: " + this.genero
    }


}

let banda1 = new Banda("red hot", "funk rock")

console.log(banda1.banda());