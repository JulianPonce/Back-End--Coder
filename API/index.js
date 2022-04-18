const express = require("express")
let mascotasRoute = require("./Routes/mascotas")
let personasRoute = require("./Routes/personas")
const app = express()

app.use(express.json())

app.use("/mascotas", mascotasRoute)
app.use("/personas", personasRoute)
app.listen(8080, () => {
    console.log("server 8080");
})

app.get("/productos", () => {

})

app.get("/productorandom", () => {

})