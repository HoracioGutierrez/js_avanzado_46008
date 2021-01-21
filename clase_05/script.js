/* 

onst xhr = new XMLHttpRequest
xhr.open("GET","usuarios.json")
xhr.addEventListener("load",()=>{
    if(xhr.status == 200){
        //console.log(typeof xhr.response)
        const array_de_usuarios = JSON.parse(xhr.response)
        console.log(array_de_usuarios)
    }
})
xhr.send() 

*/



//CORS = Cross Origin Resource Sharing
const xhr = new XMLHttpRequest
xhr.open("GET","https://jsonplaceholder.typicode.com/users")
xhr.addEventListener("load",()=>{
    if(xhr.status == 200){
        const array_usuarios = JSON.parse(xhr.response)
        
        array_usuarios.forEach((usuario)=>{

            const p = document.createElement("p")
            p.innerText = usuario.name
            document.body.appendChild(p)

            p.addEventListener("click",()=>{
                console.log("Click")
                console.log(usuario.id)
                document.body.innerHTML = ""
                history.pushState(usuario.id,null,"usuarios/"+usuario.id)
            })

        })

        history.pushState("usuarios",null,"usuarios")
    }
})
xhr.send()







/**
 * APIs REST
 * 
 * 
 * 
 * 
 * JSON API = Transforma JSONs en Strings o al reves
 * 
 * const obj = {x:1}
 * const obj_string = JSON.stringify(obj)
 * JSON.parse(obj_string)
 * 
 * 
 * typeof ""            "string"
 * typeof 1             "number"
 * typeof NaN           "number"
 * typeof true          "boolean"
 * typeof undefined     "undefined"
 * typeof ()=>{}        "function"
 * typeof null          "object"
 * typeof []            "object"
 * typeof {}            "object"
 * 
 */