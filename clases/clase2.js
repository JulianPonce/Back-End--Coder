const mostrarlista = (datos) => {
    if (datos.length != 0) {
        datos.forEach((i) => { console.log(i) })
    } else {
        console.log('Lista vacia')
    }
}

let datos = [1, 2, 3, 4, 5, 6]
mostrarlista(datos)





