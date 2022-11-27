const express = require('express')
const handlebars = require('express-handlebars')

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.engine('handlebars', handlebars.engine())

app.set('views', './views')
app.set('view engine', 'handlebars')

const productos = []



app.get('/', (req, res) => {    
    res.render('formularios', {productos})    
})

app.get('/productos', (req, res) => {       
    res.render('datos', {productos})  
    console.log(productos)
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