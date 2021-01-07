/**
 * TIPOS DE DATOS
 * 
 * 
 * PRIMITIVOS : pasan por valor
 * 
 *  String : ""  ''  `` (templates + interpolacion de variables) 
 *  Number : 1  -4  6.7  NaN
 *  Boolean : true o false
 * 
 *  {TRUE|!FALSE} o {FALSE|""|0|null|undefined|NaN}
 * 
 *  Symbol : Sirve para crear propiedades unicas en objetos
 *  undefined : lectura
 *  null : escritura
 * 
 * 
 * OBJETOS : pasan por referencia
 *      
 *  todos estos tipos de datos pueden presentar colecciones de propiedad : valor
 * 
 *  Object : { prop_1 : valor_1 , prop_2 : valor_2 }
 *  Array : [ valor_1 , valor_2 ]
 *  Function : 
 *  
 *  function foo(){}
 *  var foo = function(){}
 * 
 *  Date
 *  Error
 *  
 * 
 * 
 *  IDENTIFICADORES DE VARIABLES
 *  var - let - const
 */


//Interpolacion de variables con backticks
//var nombre = "horacio"
//var edad = 31
//var saludo = "Hola soy " + nombre + " y tengo " + edad
//var saludo = `Hola soy ${nombre} y tengo ${edad}`


//Declaracion de variable
//var a
//var a

//let a
//let a

//const a = 1
//const a = 1



//Scope
/* 
if(true){
    var a = 1
    console.log(a)
}

console.log(a) 
*/

/* 
if(true){
    let a = 1
    console.log(a)
}

console.log(a)  */


/* if(true){
    const a = 1
    console.log(a)
}

console.log(a)  */



//Reasignacion
/* let a = 1
a = 10 */

/* const a = 1
a = 1

console.log(a) 
*/

const propiedad = "nombre"
const nueva_prop = "vive"

const persona = {
    nombre : 'Horacio',
    edad : 31,
    0 : "algun valor"
}

//Notacion de punto
//console.log(persona.nombre)
//console.log(persona.propiedad)
//persona.vive = true
//persona.nueva_prop = true
//console.log(persona.0)


//Notacion de corchete
//console.log(persona["nombre"])
//console.log(persona[propiedad])
//persona["vive"] = true
persona[nueva_prop] = true
//console.log(persona[0])




//APIs WEB

//Window = window
//console.log(window)

//window.location.href = "http://google.com"

//Document = window.document = DOM (document object model)

const primer_item = /* window. */document.getElementById("item1")

console.dir(primer_item)
//console.log(primer_item.innerText)
primer_item.innerText = "Otra cosa"

//console.log(primer_item.id)

const nueva_etiqueta = document.createElement("p")
nueva_etiqueta.innerText = "Lorem Ipsum"
nueva_etiqueta.id = "parrafo"


const body = document.getElementById("body")

//Padre.appendChild(Hijo) = Me agrega una etiqueta al final
body.appendChild(nueva_etiqueta)

//Padre.insertBefore(Hijo,Referencia) = Me agrega una etiqueta Hijo antes de una etiqueta Referencia si y solo si las dos compartel el Padre

//Padre.removeChild(Hijo) = Remueve una etiqueta Hijo de un Padre
body.removeChild(nueva_etiqueta)