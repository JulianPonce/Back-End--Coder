const fs = require("fs")
let count = 0
class contenedor {
    constructor(nombre) {
        this.nombre = nombre
        this.product = []

    }
    save(obj) {
        count++
        if (count <= 0) {
            fs.writeFile(`./${this.nombre}`, JSON.stringify(obj), "utf-8", (err) => {
                    if (err) {
                        console.log("error");
                    } else {
                        console.log("archivo escrito");
                    }
                }

            )
        } else {
            fs.appendFile(`./${this.nombre}`, JSON.stringify(obj), "utf-8", (err) => {
                    if (err) {
                        console.log("error");
                    } else {
                        console.log("archivo escrito");
                    }
                }

            )
        }


    }



    getById(id) {
        fs.readFile(`./${this.nombre}`, "utf-8", (err, data) => {
            if (err) {
                console.log("error");
            } else {
                let product = JSON.parse(data).filter(x => {
                    return x.id == id
                })
                console.log(product);
            }
        })
    }

    getAll() {
        fs.readFile(`./${this.nombre}`, "utf-8", (err, data) => {
            if (err) {
                console.log("error");
            } else {
                console.log(JSON.parse(data));
            }
        })
    }
    deleteById(id) {
        fs.readFile(`./${this.nombre}`, "utf-8", (err, data) => {

            let isJSON = JSON.parse(data)
            let index = isJSON.findIndex(element => element.id == id);
            isJSON.splice(index, 1);
            console.log(isJSON);
        })


    }





    deleteAll() {
        fs.readFile(`./${this.nombre}`, "utf-8", (err, data) => {

            let isJSON = JSON.parse(data)
            let arrayVacio = () => {
                return isJSON = []
            }
            console.log(arrayVacio());
        })

    }

}


let archivo = new contenedor("text.json")

// archivo.save({
//     titulo: "zapatos",
//     precio: 7000,
//     url: ""
// })

archivo.getAll()
    //archivo.getById(1)
archivo.deleteById(2)
archivo.deleteAll()

module.exports = { contenedor }