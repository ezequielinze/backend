const express = require('express')
const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

const productos = []

//leer array
app.get('/', (req, res) => {
    res.send(productos)

})

//leer valor params
// app.get('/:num', (req, res) => {
//     const num = req.params.num
//     res.send(num)
// })


//post al array por params
// app.post('/:num', (req, res) => {
//     const num = req.params.num
//     productos.push(num)
//     res.send('<h1>post funcionando</h1>')
// })

app.post('/productos', (req, res) => {
    const { producto } = req.body
    productos.push(producto)
    res.json({ agregada: producto, posicion: productos.length })
})


//editar
// app.put('/', (req, res) => {
//     res.send('<h1>put funcionando</h1>')
// })

app.put('/productos/:num', (req, res) => {
    const { num } = req.params
    const { producto } = req.body
    
    const productoAnterior = productos[parseInt(num) -1]
    productos[parseInt(num) -1] = producto

    res.json({ actualizada: producto, anterior: productoAnterior})
})


//eliminar
// app.delete('/', (req, res) => {
//     res.send('<h1>delete funcionando</h1>')
// })

app.delete('/productos/:num', (req, res) => {
    const { num } = req.params
    const productoEliminado = productos.splice(parseInt(num) - 1, 1)

    res.json({ borrado: productoEliminado })
})



const PORT = 8080
app.listen(PORT, () => {
    console.log('servidor en funcionamiento ' + PORT)
})

