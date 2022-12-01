const express = require('express')
const { Server: HttpServer } = require('http')
const { Server: IOServer } = require('socket.io')

const app = express()
const httpServer = HttpServer(app)
const io = new IOServer(httpServer)

app.use(express.static(__dirname + '/public'))

const mensajes = []  
// escucha en el html
io.on('connection', socket =>{
    console.log('Un cliente se ha conectado: ' + new Date())
// si hay conectado envia mensaje
    socket.emit('mensaje', mensajes)
// 3- toma la info del index.js
    socket.on('NuevoMensaje', data => {
        mensajes.push(data)
        
// 4- guarda en array y envia al index.js
        io.sockets.emit('mensaje', mensajes)
    })
})

const PORT = 8080
httpServer.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto ${PORT}`)
})