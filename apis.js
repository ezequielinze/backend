const express = require('express')
const app = express()
const { Router } = express

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use('/static', express.static('public'))

const routerProductos = new Router()

const productos = []


//leer array
routerProductos.get('/', (req, res) => {
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

routerProductos.post('/', (req, res) => {
    // const { producto } = req.body
    productos.push(req.body)
    console.log({ agregada: 'ok', posicion: productos.length })
    console.log(productos)
})


//editar
// app.put('/', (req, res) => {
//     res.send('<h1>put funcionando</h1>')
// })

routerProductos.put('/:num', (req, res) => {
    const { num } = req.params
    const { producto } = req.body
    
    const productoAnterior = productos[parseInt(num) -1]
    productos[parseInt(num) -1] = producto

    res.json({ actualizado: producto, anterior: productoAnterior})
})


//eliminar
// app.delete('/', (req, res) => {
//     res.send('<h1>delete funcionando</h1>')
// })

routerProductos.delete('/:num', (req, res) => {
    const { num } = req.params
    const productoEliminado = productos.splice(parseInt(num) - 1, 1)

    res.json({ borrado: productoEliminado })
})

app.use('/productos', routerProductos)

const PORT = 8080
app.listen(PORT, () => {
    console.log('servidor en funcionamiento ' + PORT)
})

