const express = require('express')
const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.set('views', './views')
app.set('view engine', 'pug')

const productos = []

app.post('/productos', (req, res) => {   
    res.render('formulario.pug', { productos })
    productos.push(req.body)    
    console.log(productos)
    
})

app.get('/', (req, res) => {
    res.render('productos.pug', {productos})
})




const PORT = 8080
app.listen(PORT, () => {
    console.log('servidor en funcionamiento ' + PORT)
})