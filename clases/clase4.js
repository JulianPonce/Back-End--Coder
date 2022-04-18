const productos = [
    { id: 1, nombre: 'Escuadra', precio: 323.45 },
    { id: 2, nombre: 'Calculadora', precio: 234.56 },
    { id: 3, nombre: 'Globo Terráqueo', precio: 45.67 },
    { id: 4, nombre: 'Paleta Pintura', precio: 456.78 },
    { id: 5, nombre: 'Reloj', precio: 67.89 },
    { id: 6, nombre: 'Agenda', precio: 78.90 }
]


let nombres = productos.map(e => {
    return e.nombre
})

let stringNom = nombres.join(",")


let sum = 0

let total = productos.map(e => {
    return sum += e.precio
})

let prom = productos.map(e => {
    return sum / productos.length
})

console.log(stringNom);
console.log(sum);
console.log(prom);