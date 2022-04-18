const express = require("express")
const { contenedor } = require("./desafio3")
const app = express()

let tuContenedor = new contenedor("text.json")


app.listen(8080, () => {
    console.log(contenedor);
})

app.get("/productos", (req, res) => {

    res.json(tuContenedor.getAll())


})
app.get("/productosrandom", (req, res) => {
    const rand = Math.floor(Math.random() * product.length);
    const rValue = product[rand];
    res.send(rValue)

})