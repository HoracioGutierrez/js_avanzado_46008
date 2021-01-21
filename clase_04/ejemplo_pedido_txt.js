//AJAX = Async JS And XML
//XMLHttpRequest (XHR) - Fetch fetch
//DOM document
//Window window 

//Asincronico vs Sincronico(bloqueante)

//TRIGGER - TIMER - REQUEST

//https://en.wikipedia.org/wiki/List_of_HTTP_status_codes


const boton = document.querySelector("button")
const p = document.querySelector("p")

boton.addEventListener("click",()=>{

    const xhr = new XMLHttpRequest

    xhr.addEventListener("abort",()=>{
        console.log("Pedido Cancelado")
    })


    xhr.addEventListener("readystatechange",()=>{
        //console.log("Cambio estado",xhr.readyState)
        if(xhr.readyState === 2){
            console.log("Ya tengo la info de los headers")
            const tipo = xhr.getResponseHeader("Content-Type")
            const peso = xhr.getResponseHeader("Content-Length")
            console.log(tipo)
            console.log(peso)
            /* if(tipo!=="image/jpg"){
                xhr.abort()
            } */
        }
        /* if(xhr.readyState === 2){
            console.log("Ya tengo la info de los headers")
        }

        if(xhr.readyState === 3){
            console.log("Estoy descargando el archivo")
        }
        
        if(xhr.readyState === 4){
            console.log("El pedido termino")
            console.log(xhr.response)
        } */
    })

    xhr.addEventListener("progress",()=>{
        console.log("Descargando...")
        p.innerText = "Descargando..."
    })

    xhr.addEventListener("load",()=>{
        p.innerText = ""
        switch(xhr.status){
            case 200 :
                //console.log(xhr.response)
                
                const p = document.createElement("p")
                p.innerText = xhr.response
                document.body.appendChild(p)

                break;
            case 404 :
                console.log("Error")
                break;
            case 500 :
                console.log("Servidor Caido")
                break;
            default :
                console.log("Otra respuesta")
                break;
        }
    })

    xhr.open('GET',"info.txt")

    xhr.send()

})












