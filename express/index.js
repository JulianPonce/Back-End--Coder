const express = require("express")
const app = express()
const path = require("path")
let count = 0
const PORT = process.env.PORT || 8080



app.get("/", (req, res) => {
    res.send(`<h1 style="color: blue"> hola mundo </h1>`)
})
app.get("/obj", (req, res) => {
    res.json({ mesage: "hola mondo" })
})
app.get("/Productos", (req, res) => {
    res.sendFile(path.join(__dirname + "/index.html"))
})
app.get("/visitas", (req, res) => {
    count++
    res.send({ visitas: count })
})

app.listen(8080, () => {
    console.log("hola server");
})