const http = require("http")

const server = http.createServer((req, res) => {
    console.log(req.url);

    if (req.url === "/") {
        res.end("patch origin");
    }
    if (req.url === "/Hora") {
        let start = moment().format("HH:mm")
        res.end("la hora es" + start)
    }
})

server.listen(8080, () => {
    console.log("escuchando server");
})