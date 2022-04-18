const express = require("express")

const { Router } = express

let router = new Router()

let mascotas = []


router.get("/getAll", (req, res) => {
    res.send({ data: mascotas })
})


router.post("/crear", (req, res) => {
    console.log(req.body);
    let { nombre, raza, edad } = req.body
    let mascotaNueva = {
        nombre,
        raza,
        edad
    }
    mascotas.push(mascotaNueva)
    res.sen("mascotaGuardada")
})


module.exports = router