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


class Bio extends Banda {
    constructor(bio, nombre, genero) {
        super(nombre, genero)
        this.bio = bio
    }

    bio() {
        return this.banda() + " " + this.bio

    }
}

let banda1 = new Banda("red hot", "funk rock")

let bandaBio = new Bio("Son de california y tocan rap con fun rock")

console.log(bandaBio.bio());