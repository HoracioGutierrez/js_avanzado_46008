//Eventos : La manera de responder ante un trigger con un callback(funcion)

//Necesitamos : una funcion , un nodo , la formula
// Elemento.addEventListener(evento String,callback Function)

const btn = document.querySelector("#boton-1")
const checkbox = document.querySelector("input")
const link = document.querySelector("a")
const h2 = document.querySelector("h2")


link.addEventListener("click", e => {
    e.stopPropagation()
    e.preventDefault()
    
    //console.log("Click del link")
    /* document.title = "Mi Perfil"
    h2.innerText = "Mi Perfil" */

    const contenedor = document.createElement("div")
    const texto = document.createElement("p")
    const boton_aceptar = document.createElement("button")
    const boton_cancelar = document.createElement("button")

    boton_aceptar.addEventListener("click",()=>{
        //console.log("Redirijo")
        location.href = link.href
    })

    boton_cancelar.addEventListener("click",()=>{
        //console.log("Borro el contenedor")
        document.body.removeChild(contenedor)
        //contenedor.className = "cerrado"
    })

    contenedor.id = "contenedor"
    texto.innerText = "Estas seguro que queres irte?"
    boton_aceptar.innerText = "aceptar"
    boton_cancelar.innerText = "cancelar"

    contenedor.appendChild(texto)
    contenedor.appendChild(boton_aceptar)
    contenedor.appendChild(boton_cancelar)

    document.body.appendChild(contenedor)

})


checkbox.addEventListener("click",(e)=>{
    console.log("click del checkbox")
    e.preventDefault()
})


checkbox.addEventListener("change",(e)=>{
    console.log("Cambio el valor")
})


/* function hacerClick(){
    console.log("click")
    //return undefined
}
 */

/*
 let hacerClick = () => {
    console.log("click")
}
*/

//btn.addEventListener("click",hacerClick()) ESTA MAL!

//btn.addEventListener("click",hacerClick)

btn.addEventListener("click", (e) => {
    //console.log(e)
    //console.log(e.target)
    //console.log(btn)
    //e.preventDefault()
    //e.stopPropagation()
    //console.log("click1")
    console.log("Click del boton")
    e.stopPropagation()
})


//Propagacion Bubbling vs Propagacion Capturing

/* 
document.body.addEventListener("click",(e)=>{
    console.log("Click del body")
    e.stopPropagation()
})


document.addEventListener("click",()=>{
    console.log("Click del html")
})
*/

/* 
btn.addEventListener("click",() => {
    console.log("click2")
})


btn.addEventListener("click",() => {
    console.log("click3")
}) 
*/



/** FUNCIONES */

//Closure
//window.a = 1
//var a = 1
//let b = 1


//window.hacerClick = function(){}

//var hacerClick = function(){}

//function hacerClick(){ console.log("click") }

//let hacerClick = function(){ console.log("click") }
//let hacerClick = () => { console.log("click") }



//let hacerClick = function(a){ console.log(a) }
//let hacerClick = a => { console.log(a) }


//let hacerClick = function(a){ return a * 2 }
//let hacerClick = a => a * 2 

/** */


let cantidad = 0
const span = document.querySelector("#cantidad")
const boton_sumar = document.querySelector("#sumar")
const boton_restar = document.querySelector("#restar")
const boton_resetear = document.querySelector("#resetear")


boton_sumar.addEventListener("click",()=>{
    //console.log("Sumar")
    //cantidad = cantidad + 1
    //cantidad += 1
    cantidad++
    //console.log(cantidad)
    span.innerText = cantidad
})

boton_restar.addEventListener("click",()=>{
    //console.log("Restar")
    //cantidad = cantidad - 1
    //cantidad -= 1
    cantidad--
    //console.log(cantidad)
    span.innerText = cantidad
})

boton_resetear.addEventListener("click",()=>{
    //console.log("Resetear")
    cantidad = 0
    //console.log(cantidad)
    span.innerText = cantidad
})