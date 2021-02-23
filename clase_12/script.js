//Persistencia de datos
//Cookies : Son archivos de texto plano
//Storage : Se Separa en dos Session y Local()
//DB : https://pouchdb.com/ (WebSQL no se usa mas)
//Cache
//serviceWorker : Son archivos "autonomos" de Javascript que se instalan por dominio en una maquina y pueden correr solos 

//Aca tendria el codigo de la pagina corriendo 

if("serviceWorker" in navigator){
    navigator.serviceWorker.register("customworker.js")
    .then((registracion)=>{
        console.log("Se registro un worker correctamente")
        console.log(registracion)
    })
    .catch((err)=>{
        console.log("Hubo un error en el registro del worker")
    })
}