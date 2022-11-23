
const fs = require('fs')

array = []

class Productos {
  constructor(id, nombre, precio, foto) {
    this.id = id
    this.nombre = nombre
    this.precio = precio
    this.foto = foto
  }
}

class Contenedor {
  constructor(producto) {
    this.producto = producto
  }

  //metodo guardar producto
  agregarProducto(e) {
    array.push(e)
    console.log('cargo el array')
    let data = JSON.stringify(array, null, 2)
    fs.promises.writeFile('./productos.txt', data)
      .then(() => {
        console.log('array guardado en txt')
      })
      .catch(err => {
        console.log('algo salio mal!!!' + err)
      })
  }

  //leemos el array txt
  leerProductos() {
    fs.promises.readFile('./productos.txt', 'utf8')
      .then(data => {
        let info = JSON.parse(data)
        console.log('leyendo array txt')
        console.log(info)
      })
      .catch(err => {
        console.log('array vacio')
      })
  }

  //leer por id
  leerId(id) {
    fs.promises.readFile('./productos.txt', 'utf8')
      .then(data => {
        let info = JSON.parse(data)
        let res = info.find((e) => e.id == id)
        console.log('se busco el producto: ')
        if (res == undefined) {
          console.log('null')
        } else {
          console.log(res)
        }

      })
      .catch(err => {
        console.log('error' + err)
      })
  }

  //eliminar array
  eliminarArray() {
    array = []
    fs.promises.writeFile('./productos.txt', array)
      .then(() => {
        console.log('se elimino array completo')
      })
      .catch(err => {
        console.log('algo salio mal!!!' + err)
      })

  }

  //eliminar objeto del array
  eliminaObj(id) {
    const array = []
    fs.promises.readFile('./productos.txt', 'utf8')
      .then(data => {
        let info = JSON.parse(data)
        console.log(info)
        let h = 1
        for (const prod of info) {
          if (prod.id == id) {
            console.log('eliminado: ' + prod.nombre)
          } else {
            prod.id = h
            array.push(prod)
            h++
          }
        }
        // console.log(array)
        data = JSON.stringify(array, null, 2)
        fs.promises.writeFile('./productos.txt', data)
          .then(() => {
            console.log('array guardado en txt')
          })
          .catch(err => {
            console.log('algo salio mal!!!' + err)
          })
        console.log(array)
      })
      .catch(err => {
        console.log('array vacio ' + err)
      })

  }

}
const producto = new Contenedor([])




//leer el txt modo sync para que lea antes
// const leerTxt = fs.readFileSync('productos.txt', 'utf8')
// array = JSON.parse(leerTxt)

const producto1 = new Productos(1, 'escoba', 1000, 'img')
const producto2 = new Productos(2, 'cabo', 200, 'img')
const producto3 = new Productos(3, 'escobillon', 500, 'img')
const producto4 = new Productos(4, 'balde', 2000, 'img')
const producto5 = new Productos(5, 'rejilla', 550, 'img')
const producto6 = new Productos(6, 'franela', 260, 'img')

// producto.agregarProducto(producto1)
// producto.agregarProducto(producto2)
// producto.agregarProducto(producto3)
// producto.agregarProducto(producto4)
// producto.agregarProducto(producto5)
// producto.agregarProducto(producto6)

// producto.leerProductos()
// producto.leerId(2)
// producto.eliminaObj(4)
// producto.eliminarArray()






















