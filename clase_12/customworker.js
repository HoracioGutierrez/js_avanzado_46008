//console.log(this)
//console.log(self)

//install
//active
//fetch
//push


//Event.waitUntil(Promise)
//Event.respondWith(Promise)

self.addEventListener("install",(e)=>{
    console.log("Instalacion")
    //Aca lo que voy a querer hacer es miniminamente almacenar en cache los archivos iniciales de la app
    e.waitUntil(
        caches.open("p1")
        .then((cache)=>{
            if(!cache) return new Error("No se pudo abrir el cache")

            return cache.addAll([
                "/index.html",
                "/estilos.css",
                "/script.js"
            ])
        })
        .catch((err)=>{
            console.log(err)
        })
    )
})

self.addEventListener("activate",()=>{
    console.log("Activacion")
    //Aca lo que voy a querer hacer es tomar dominio del DOM antes de tiempo con un claim()
    
})

self.addEventListener("fetch",(e)=>{
    console.log("Pedido")
    //Intercepto el pedido y lo que voy a querer hacer es fijarme si ese recurso se encuentra en el cache, y si lo está se lo entrego al usuario y sino dejo pasar el pedido y descargo el recurso
    console.log(e)  
    e.respondWith(
        caches.match(e.request)
        .then((recurso)=>{
            
            //if(!recurso) return new Error("No se encontro el archivo")

            return recurso || fetch(e.request)
        })
        .catch((err)=>{
            console.log(err)
        })
    )
})