const fs = require('fs')
const express = require('express')
const app = express() //server

app.get('/', (req, res) => {
    res.send('<h1>pagina inicio</>')
})

class Contenedor {
    constructor(producto) {
        this.producto = producto
    }


    //leemos el array txt
    leerProductos() {
        fs.promises.readFile('./productos.txt', 'utf8')
            .then(data => {
                let info = JSON.parse(data)
                console.log('lectura de productos ok')

                app.get('/productos', (req, res) => {
                    res.send(info)
                })
            })
            .catch(err => {
                console.log('array vacio')
            })
    }

    //random
    random() {
        fs.promises.readFile('./productos.txt', 'utf8')
            .then(data => {
                const info = JSON.parse(data)
                let a = info.length + 1
                let id = Math.ceil(Math.random() * a)
                console.log('salio el id: ' + id)
                const respuesta = info.find((e) => e.id == id)

                app.get('/productoRandom', (req, res) => {
                    res.send(respuesta)
                })
            })
            .catch(err => {
                console.log('error' + err)
            })
    }

}

const producto = new Contenedor([])
producto.leerProductos()
producto.random()


//get: traer info
//post: publica info 'registra info'
//put: editar info 
//delete: elimina
//patch: agrega info



















app.listen(8080, () => {
    console.log('servidor en funcionamiento')
})
