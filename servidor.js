const fs = require('fs')
const express = require('express')
const app = express() //server

app.listen(8080, () => {
    console.log('servidor en funcionamiento')
})

//get: traer info
//post: publica info 'registra info'
//put: editar info 
//delete: elimina
//patch: agrega info


//leer el txt modo sync para que lea antes
fs.promises.readFile('productos.txt', 'utf8')
    .then(data => {
        array = JSON.parse(data)
        console.log('lectura exitosa')

    })
    .catch(err => {
        console.log('algo salio mal!' + err)
    })





// leer por id random
fs.promises.readFile('./productos.txt', 'utf8')
    .then(data => {
        info = JSON.parse(data)
        a = info.length + 1
        id = Math.ceil(Math.random() * a)
        console.log('salio el id: ' + id)
        respuesta = info.find((e) => e.id == id)
    })
    .catch(err => {
        console.log('error' + err)
    })




app.get('/', (req, res) => {
    res.send('<h1>pagina inicio</>')
})
app.get('/productos', (req, res) => {
    res.send(array)
})
app.get('/productoRandom', (req, res) => {
    res.send(respuesta)
})
