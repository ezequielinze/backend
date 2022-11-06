
const fs = require('fs')


class Productos {
  constructor(id, nombre, precio, foto) {
    this.id = id
    this.nombre = nombre
    this.precio = precio
    this.foto = foto
  }
}


array = []

//leer el txt modo sync para que lea antes
const leerTxt = fs.readFileSync('productos.txt', 'utf8')
array = JSON.parse(leerTxt)
console.log('stock de productos guardados: ')
console.log(array)


//funcion guardar producto
const agregarProducto = (a, b, c) => {
  h = array.length + 1
  const producto = new Productos(h, a, b, c)
  array.push(producto)
  console.log('se agrego al array el id:')
  console.log(h)
  cargarProducto()
}


//pasamos array a txt
const cargarProducto = () => {
  data = JSON.stringify(array, null, 2)

  fs.promises.writeFile('./productos.txt', data)
    .then(() => {
      console.log('array guardado en txt')
    })
    .catch(err => {
      console.log('algo salio mal!!!' + err)
    })
}



//leemos el array txt
const leerProductos = () => {

  fs.promises.readFile('./productos.txt', 'utf8')
    .then(data => {
      info = JSON.parse(data)
      console.log('leyendo array txt')
      console.log(info)
    })
    .catch(err => {
      console.log('error' + err)
    })
}
// leerProductos()


//leer por id
const leerId = (id) => {
  fs.promises.readFile('./productos.txt', 'utf8')
    .then(data => {
      info = JSON.parse(data)
      let res = info.find((e) => e.id == id)
      console.log('se busco el producto: ')
      console.log(res)
    })
    .catch(err => {
      console.log('error' + err)
    })
}
// leerId(7)

//eliminar array
const eliminarArray = () => {
  array = []
  console.log('se elimino array completo')
  cargarProducto()

}
// eliminarArray()

//eliminar objeto del array
const eliminaObj = (id) => {
  fs.promises.readFile('./productos.txt', 'utf8')
    .then(data => {
      info = JSON.parse(data)
      array = []
      for (const prod of info) {
        if (prod.id == id) {

        } else {
          array.push(prod)
        }

      }
      cargarProducto()
    })
    .catch(err => {
      console.log('error' + err)
    })
    console.log('se elimino el id: ' + id )
}
// eliminaObj(11)

// agregarProducto('escoba', 1000, 'img')
// agregarProducto('cabo', 200, 'img')
// agregarProducto('escobillon', 500, 'img')
// agregarProducto('balde', 2000, 'img')
// agregarProducto('rejilla', 50, 'img')
// agregarProducto('franela', 80, 'img')
// agregarProducto('mopa', 700, 'img')
// agregarProducto('liquido', 360, 'img')
// agregarProducto('secador', 600, 'img')
// agregarProducto('mopa', 700, 'img')
// agregarProducto('liquido', 360, 'img')
// agregarProducto('secador', 600, 'img')



