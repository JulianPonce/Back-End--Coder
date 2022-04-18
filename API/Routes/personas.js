const express = require("express")

const { Router } = express

let router = new Router()

let personas = []


router.get("/getAll", (req, res) => {
    res.send({ data: personas })
})


router.post("/crear", (req, res) => {
    console.log(req.body);
    let { nombre, genero, edad } = req.body
    let personasNueva = {
        nombre,
        genero,
        edad
    }
    personas.push(personasNueva)
    res.sen("mascotaGuardada")
})


module.exports = router