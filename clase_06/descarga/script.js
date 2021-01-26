//PWA = Progressive Web Application

const btn = document.querySelector("button")
const p = document.querySelector("p")
const progress = document.querySelector("progress")
const loader = document.querySelector("#youtube-loader")


btn.addEventListener("click",()=>{

    progress.id = "show"
    
    const xhr = new XMLHttpRequest
    xhr.open("GET","imagen.jpg")
    xhr.responseType = "blob"

    //ReadyState == 3
    xhr.addEventListener("progress",(e)=>{
        //console.log("Descargando...")
        if(e.lengthComputable){

            const porcentaje = e.loaded / e.total * 100
            const nuevo_porcentaje = porcentaje.toFixed(1)
            p.innerText = "La descarga va " + nuevo_porcentaje + "%"   
            progress.value = porcentaje   
            loader.style.width = porcentaje + "%"   

        }else{
            //Aca iria un gif de tiempo indeterminado
        }
    })

    //ReadyState == 4
    xhr.addEventListener("load",()=>{
        if(xhr.status === 200){
            
            p.innerText = "Descarga finalizada!"
            progress.id = ""
            loader.style.width = "0%"
            setTimeout(()=>{
                p.innerText = ""
            },2000)

            const blob = xhr.response
            const url = URL.createObjectURL(blob)

            /* const img = document.createElement("img")
            img.src = url
            document.body.appendChild(img) */

            const link = document.createElement("a")
            link.href = url
            //link.target = "_blank"
            link.download = "descarga.jpg"
            document.body.appendChild(link)
            link.click()

        }
    })

    xhr.send()

})


//Event.lengthComputable = Boolean - Hace referencia a el header Content-Length
//Event.total = Number - La cantidad de bytes que pesa el archivo
//Event.loaded = Number - La cantidad de bytes descargados
//Math.round() = Redondea el numero
//Math.floor() = Redondea para abajo
//Math.ceil() = Redondea para arriba
//Number.toFixed() = Especifica cuantos decimales mostrar
//Reader - Blob - File - FileList - MediaSource - ArrayBuffer - URL