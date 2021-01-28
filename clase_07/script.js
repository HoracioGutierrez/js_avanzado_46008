//https://www.youtube.com/watch?v=8aGhZQkoFbQ&t=766s&ab_channel=JSConf
//https://www.youtube.com/watch?v=cCOL7MC4Pl0&t=131s&ab_channel=JSConf
//https://javascript.info/
//https://javascript.info/fetch-api

//Promise / async - await (Promise+Generators)

//Callback of Hell - Pyramid of Doom
/* 
const xhr = new XMLHttpRequest
xhr.open("GET","https://jsonplaceholder.typicode.com/users")
xhr.addEventListener("load",()=>{
    if(xhr.status == 200){
        const array_usuarios = JSON.parse(xhr.response)
        const usuario = array_usuarios[7]
        const id = usuario.id

        const xhr_post = new XMLHttpRequest
        xhr_post.open("GET","https://jsonplaceholder.typicode.com/posts?userId="+id)
        xhr_post.addEventListener("load",()=>{
            if(xhr_post.status == 200){

                const array_posteos = JSON.parse(xhr_post.response)
                array_posteos.forEach((post)=>{

                    const post_id = post.id
                    const xhr_comentarios = new XMLHttpRequest
                    xhr_comentarios.open("GET","https://jsonplaceholder.typicode.com/comments?postId="+post_id)
                    xhr_comentarios.addEventListener("load",()=>{
                        if(xhr_comentarios.status == 200){

                            const array_comentarios = JSON.parse(xhr_comentarios.response)
                            console.log(array_comentarios)

                        }
                    })
                    xhr_comentarios.send()

                })

            }
        })
        xhr_post.send()

    }
})
xhr.send() 
*/


//Promise = Es un objeto que representa un resultado a futuro
//State : pending - resolved(fulfilled) - rejected (El estado puede cambiar una UNICA vez)
//Result : Any

/* const promesa = new Promise((res,rej)=>{
    //Aca escribo la operacion que va a tardar (ej.: Un pedido, la lectura de un archivo, etc)
    //const suma = 1 + 1
    const resultado_del_pedido = [{nombre:"Horacio"},{nombre:"Ana"}]
    const status = 200  
    //const mensaje_de_error = "Hubo un error"
    const objeto_error = new Error("Hubo un error")

    if(status === 200) {
        res(resultado_del_pedido)
    }else{
        rej(objeto_error)
    }
    //console.log(suma)
    //res(suma)
    //rej()
})


promesa
//El callback del then se ejecuta cuando la promesa cambia su estado a resuelta
.then((resultado)=>{
    console.log(resultado)
})
//El callback del catch se ejecuta cuando la promesa cambia su estado a rechazada
.catch((error)=>{
    console.log(error)
}) */


//Fetch (fetch) = Hace un pedido asincronico usando promesas

/* const xhr = new XMLHttpRequest
xhr.open("GET","https://jsonplaceholder.typicode.com/users")
xhr.send()  
*/


//1)Hago el pedido con fetch() y me da una promesa
/* const pedido = fetch("https://jsonplaceholder.typicode.com/users") 

//2)Pongo los callbacks correspondientes para saber cuando la promesa salio bien o mal
pedido
.then((resultado)=>{
    //3)Extraigo el valor del pedido y lo transformo
    const transformacion = resultado.json()
    return transformacion
})
.then((resultado)=>{
    console.log(resultado)
})
.catch((err)=>{
    console.log(err)
})
 */




/* 


fetch("https://jsonplaceholder.typicode.com/users") 
.then(resultado=>resultado.json())
.then(resultado=>console.log(resultado))
.catch(err=>console.log(err)) 

*/

/* 
fetch("https://jsonplaceholder.typicode.com/users") 
.then(resultado=>resultado.json())
.then(resultado=>{
    const usuario = resultado[7]
    const usuario_id = usuario.id
    return fetch("https://jsonplaceholder.typicode.com/posts?userId="+usuario_id)
})
.then((resultado)=>{
    return resultado.json()
})
.then((resultado)=>{

    const array_de_pedidos = []
    
    resultado.forEach((post)=>{
        
        const post_id = post.id
        const pedido = fetch("https://jsonplaceholder.typicode.com/comments?postId="+post_id)
        array_de_pedidos.push(pedido)

    })

    return Promise.all(array_de_pedidos)

})
.then((resultado)=>{

    const array_de_transformaciones = []

    resultado.forEach((respuesta)=>{
        const transformacion = respuesta.json()
        array_de_transformaciones.push(transformacion)
    })

    return Promise.all(array_de_transformaciones)

})
.then((resultado)=>{
    console.log(resultado)
})
.catch(err=>console.log(err))


 */


 
/* fetch("https://jsonplaceholder.typicode.com/users") 
.then(resultado=>resultado.json())
.then(resultado=>fetch("https://jsonplaceholder.typicode.com/posts?userId="+resultado[7].id))
.then(resultado=>resultado.json())
.then(resultado=>Promise.all(resultado.map(post=>fetch("https://jsonplaceholder.typicode.com/comments?postId="+post.id))))
.then(resultado=>Promise.all(resultado.map(respuesta=>respuesta.json())))
.then(resultado=>console.log(resultado))
.catch(err=>console.log(err)) */



//ASYNC-AWAIT

async function foo(){

    const pedido_usuarios = await fetch("https://jsonplaceholder.typicode.com/users") 
    const transformacion_usuarios = await pedido_usuarios.json()

    //console.log(transformacion_usuarios)

}


const res = foo() //Promise{}



axios("https://jsonplaceholder.typicode.com/users")





/**
 * 
 * Promise{}  => Promise.then().catch()
 * 
 * .then(()=>{ Promise{} }) =>  .then(()=>{ return Promise{} })
 * 
 * .then(()=>{ Promise{} , Promise{} , Promise{} }) =>  
 * .then(()=>{ return Promise.all([Promise{},Promise{}]) })
 */

//forEach() = Sentencia
//map() = Expresion

const arr = [1,2,3] 

/* const resultado = */ arr.forEach((elemento,indice)=>{  })


const resultado = arr.map((elemento,indice)=>{ return elemento + 1 })

//resultado = [2,3,4]