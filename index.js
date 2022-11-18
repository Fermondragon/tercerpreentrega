const titulo = document.getElementById('titulo')
const div = document.getElementById('mueblesOpc')

const formularioUsuario = document.getElementById('formulario')
const nombreUsuario = document.getElementById('nombre')
const apellidoUsuario = document.getElementById('apellido')

const infoUsuario = {}

const productosArray = []

class mueble {
  constructor(id, name, price, stock) {
    this.id = id
    this.name = name
    this.price = price
    this.stock = stock
  }
}

const mesa1 = new mueble(1, 'mesa khal', 3600, 20)
productosArray.push(mesa1)
const mesa2 = new mueble(2, 'mesa aerys', 4950, 40)
productosArray.push(mesa2)
const mesa3 = new mueble(3, 'mesa robert', 5500, 30)
productosArray.push(mesa3)
const mesa4 = new mueble(4, 'mesa danerys', 6100, 15)
productosArray.push(mesa4)

const silla1 = new mueble(5, 'silla zoro', 1600, 40)
productosArray.push(silla1)
const silla2 = new mueble(6, 'silla luffy', 1900, 50)
productosArray.push(silla2)
const silla3 = new mueble(7, 'silla sanji', 1070, 30)
productosArray.push(silla3)
const silla4 = new mueble(8, 'silla robin', 2100, 40)
productosArray.push(silla4)


const carrito = []

let seguirComprando = true
let totalCompra = 0
let decision = 0 
let totalProductos = 0
let i = 0 

do{
    if (totalProductos === 0 ){
        //mostrarMuebles()

        for (i=0; i<productosArray.length; i++) {
            console.log(`${productosArray[i].id}     ${productosArray[i].name}     ${productosArray[i].price}`)
        }
        elegir1()

    } else {
        elegirmas()
    }
    
} while (seguirComprando === true)


/*function mostrarMuebles(){
    const parrafoNuevo = document.createElement ('p')
    parrafoNuevo.innerText ='  Por el momento estos son los muebles que ofrecemos:  ' 
    div.append(parrafoNuevo)

    for (let i=0; 1<productosArray.length;i++){
        const parrafoOpc = document.createElement ('p')
        parrafoOpc.innerText =` ${productosArray[i].id}     ${productosArray[i].name}     ${productosArray[i].price}`
        parrafoOpc.setAttribute('class',`parraOpc${productosArray[i].id}`)
        div.append(parrafoOpc)
    }
}*/

function elegir1 (){
    decision = parseInt(prompt("Desea comprar algun mueble ?    1. SI   2. NO"))
    if (decision === 1 ){
        seleccionMueble()

    }else if(decision === 2){
        alert ('Hasta la siguiente')
        seguirComprando = false
    }else{
        console.log ("ERROR ESA OPCION NO EXISTE")
        elegir1()
    }
}

function elegirmas(){
    decision = parseInt(prompt("Desea comprar otro mueble ?    1. SI   2. NO"))
    if (decision === 1 ){
        seleccionMueble()

    }else if(decision === 2){
        console.log("Estos son los muebles elegidos")
        for (i=0; i<productosArray.length; i++) {
            console.log(`${carrito[i].id}     ${carrito[i].name}     ${carrito[i].price}`)
        }
        
        console.log(`el total de su compra es de ${totalCompra}`)
        seguirComprando = false
    } else{
        console.log ("ERROR ESA OPCION NO EXISTE")
    }
}

function seleccionMueble(){
    let opcmueble = parseInt(prompt("Cual es el mueble que desea agregar a su carrito ? " ) )
    carrito.push(productosArray[opcmueble-1])
    totalCompra=totalCompra+productosArray[opcmueble-1].price
    totalProductos=totalProductos+1
}

formularioUsuario.onsubmit = (form) =>{
    form.preventDefault()
    infoUsuario.nombre = nombreUsuario.value
    infoUsuario.apellido = apellidoUsuario.value
    localStorage.setItem('infoUsuario',JSON.stringify(infoUsuario))
}

const infoUsuarioStorage = JSON.parse(localStorage.getItem('infoUsuario'))
console.log(infoUsuarioStorage)
if(infoUsuarioStorage.nombre !== "" || infoUsuarioStorage.apellido !== ""){
    titulo.innerText = `Hola ${infoUsuarioStorage.nombre} ${infoUsuarioStorage.apellido}, bienvenido de vuelta`
}