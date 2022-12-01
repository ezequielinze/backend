const express = require('express')
const { Server: HttpServer } = require('http')
const { stringify } = require('querystring')
const { Server: IOServer } = require('socket.io')

const app = express()
const httpServer = new HttpServer(app)
const io = new IOServer(httpServer)

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use(express.static('views'))

app.set('view engine', 'ejs')

const productos = []

// const projson = JSON.stringify(productos, null, 2)
// fetch('/projson.json')
    //     .then(res => res.json())
    //     .then(data => {
    //         console.log(projson)
    //     })





app.get('/', (req, res) => {

    res.render('inicio', { productos })
    // 

})



app.post('/productos', (req, res) => {
    productos.push(req.body)
    res.redirect('/')
    console.log(productos)





})


const PORT = 8080
app.listen(PORT, () => {
    console.log('servidor en funcionamiento ' + PORT)
})
