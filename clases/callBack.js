const suma = (a, b, cb) => {
    return a + b
}

const resta = (a, b, cb) => {
    return a - b
}
const dividir = (a, b, cb) => {
    return a / b
}

const multiplicar = (a, b, cb) => {
    return a * b
}

const calculadora = (a, b, cb) => cb(a, b)

console.log(calculadora(3, 4, suma));