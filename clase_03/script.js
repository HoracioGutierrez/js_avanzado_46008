//alert()
//prompt()
//confirm()
//XSS - SQL Injection

//Expresion Regular = Patrones de Busqueda


const nombre = "horacio"

const regex = /^[a-zA-Z]{2,20}$/

const validacion = regex.test(nombre)

/* (?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\]) */

console.log(validator.isAlpha(nombre))




const formulario = document.querySelector("form")
//const input = document.querySelector("input")
const input_nombre = formulario.elements.nombre
const input_email = formulario.elements.email
const comentario = formulario.elements.comentario
const error_nombre = document.querySelector("#error_nombre")


formulario.addEventListener("submit",(e)=>{
    e.stopPropagation()
    e.preventDefault()
    //const input = document.querySelector("input")
    //const input = formulario.children[0]
    //const input = formulario.elements.pepe
    console.dir(input_email.value)
    console.dir(input_nombre.value)
    console.dir(comentario.value)

    console.log(input_nombre.value.length)
    console.log(input_nombre.value.trim().length)

    for(let i = 0; i < input_nombre.value.length; i++){
        const letra = input_nombre.value[i]
        const codigo = letra.charCodeAt()
        console.log(letra,codigo)
    }

})




input_nombre.addEventListener("keydown",(e)=>{
    console.log(e.key,e.keyCode)

    //if(e.keyCode < 65 || e.keyCode > 90){
        //e.preventDefault()
        
        //podria tener un condicional aca que se fije si ya existe un span
        /* let span = document.querySelector("span")

        if(!span){
            span = document.createElement("span")
        }
        //const span = document.createElement("span")
        span.innerText = "Solo se pueden caracteres alfabeticos!"
        input_nombre.parentNode.appendChild(span) */
        //error_nombre.innerText = "Solo se pueden caracteres alfabeticos!"
    //}else{
        //error_nombre.innerText = ""
    //}
    //console.log("Se apreto una tecla")
})


input_nombre.addEventListener("keyup",()=>{
    //console.log("Se solto una tecla")
})


input_nombre.addEventListener("change",()=>{
    //console.log("Cambio el valor")
})


input_nombre.addEventListener("focus",()=>{
    //console.log("El input tiene focus")
})


input_nombre.addEventListener("blur",()=>{
    //console.log("El input tiene blur")
    //console.log(input_nombre.value)
})

/* 
const check = document.querySelector("#check")
const radio = document.querySelector("#radio")
const archivo = document.querySelector("#archivo")
const opciones = document.querySelector("#opciones")


check.addEventListener("change",()=>{
    console.log("Cambio el checkbox")
    //console.log(check.value)
    console.log(check.checked)
})


radio.addEventListener("change",()=>{
    console.log("Cambio el radio")
    //console.log(radio.value)
    console.log(radio.checked)
})

archivo.addEventListener("change",()=>{
    console.log("Cambio el archivo")
    //console.log(archivo.value)
    console.log(archivo.files)
})

opciones.addEventListener("change",()=>{
    console.log('Cambio la opcion')
    console.log(opciones.value)
})
 */