const express = require('express')
const app = express()


app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.set('view engine', 'ejs')

const productos = []


// get

app.get('/', (req, res) => {
    res.render('inicio', {productos})
})

// post

app.post('/productos', (req, res) => {
    productos.push(req.body)
    res.redirect('/')
    console.log(productos)
})


const PORT = 8080
app.listen(PORT, () => {
    console.log('servidor en funcionamiento ' + PORT)
})











