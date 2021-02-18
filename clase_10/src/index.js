//require("./archivo_1")
/* import archivo1 from "./archivo_1" */
import "./estilos.css"

/* class App {}

let foo =  () => {}

const arr = [1,2,3]
const [uno,dos,tres] = arr

const copia = [...arr]

console.log("Dev Server") */

const socket = io("ws://localhost:8000")


const form = document.querySelector("form")
const ul = document.querySelector("ul")

form.addEventListener("submit",e=>{
    e.preventDefault()
    
    const valor = e.target.elements.mensaje.value

    const li = document.createElement("li")
    li.innerText = valor
    ul.appendChild(li)

    e.target.elements.mensaje.value = ""
    
    socket.emit("mensaje_front",valor)

})


socket.on("mensaje_back",mensaje=>{
    console.log(mensaje)
    const li = document.createElement("li")
    li.innerText = mensaje
    ul.appendChild(li)
})