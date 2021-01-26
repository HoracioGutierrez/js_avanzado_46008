const input = document.querySelector("#archivos")
const div = document.querySelector("div")


input.addEventListener("change",()=>{
    procesarArchivos(input.files)
})

//dragenter - dragleave - dragover - drop

div.addEventListener("dragenter",()=>{
    //console.log("Estoy adentro del div")
    div.id = "negro"
})

div.addEventListener("dragleave",()=>{
    //console.log("Estoy afuera del div")
    div.id = ""
})

div.addEventListener("dragover",(e)=>{
    //console.log("Estoy encima del div")
    e.preventDefault()
})

div.addEventListener("drop",(e)=>{
    //console.log("Soltaron un archivo")
    e.preventDefault()
    div.id = ""
    procesarArchivos(e.dataTransfer.files)
})


function procesarArchivos(archivos){
    
    const data = new FormData
    
    for(let i = 0 ; i < archivos.length ; i++){
        //agarro individualmente un archivo por vuelta
        const archivo = archivos[i]
        //guardo ese archivo individual en el objeto FormData
        //FormData.append(nombreDeParametro,valor)
        data.append("arhivo-"+i,archivo)
    }

    const xhr = new XMLHttpRequest
    xhr.open("POST","subida.php")

    //Este evento va a aplicar solo para DESCARGAS
    //xhr.addEventListener("progress",()=>{ })
    xhr.upload.addEventListener("progress",(e)=>{
        console.log(e.loaded/e.total*100)
    })

    xhr.addEventListener("load",()=>{
        console.log("Termino la subida")
    })

    xhr.send(data)

}