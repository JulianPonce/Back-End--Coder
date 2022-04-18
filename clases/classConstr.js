function Cliente(nombre) {
    this.nombre = nombre


    // this.saludar = function() {
    //return "hola" + " " + this.nombre
    // }

    Cliente.prototype.despedir = () => {
        return "chau" + " " + this.nombre
    }
    Cliente.prototype.reverse = () => {
        return this.nombre.split("").reverse().join("")
            //split genera array de letras...reverse invierte join devuelve el string
    }

}

let cliente1 = new Cliente("Ramon")

console.log(cliente1.reverse());