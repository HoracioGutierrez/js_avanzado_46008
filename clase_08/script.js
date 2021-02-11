//POO/OOP
//Prototipos

//Orientacion a objetos dentro del paradigma Clasico
//Class Productos => new Productos{}
//Class Ropa extends Productos => new Ropa{}

//Orientacion a objetos dentro del paradigma de Prototipos
//Prototipo : Es un objeto. Todos los objetos tienen prototipo. El prototipo de un objeto se encuentra en __proto__ . Sirve para hacer referencia de propiedades que estan en otro objeto sin tener que pasar por todo el nombre de espacio sino que tengo acceso directo. El prototipo de un objeto N sale de la propiedad .prototype de la funcion que lo creo.


//Object.create(prototipo) => Object

/* const prototipo = {x:1}

const a = Object.create(prototipo)
a.y = 2

const b = Object.create(null) */


/**
 * Propiedades Dinamicas vs Estaticas
 * 
 * Dinamicas : Son aquellas que presentan todos los atributos de cambio disponibles
 * Estaticas : Son aquellas que presentan por lo menos UN atributo de cambio denegado
 */

/* let a = {}

a.x = 1
a.y = "Hola" */

//Sobreescritura
//a.x = 10

//Borrado
//delete a.x

//Iterabilidad
/* 
for(propiedad in a){
    console.log(propiedad)
    console.log(a[propiedad])
} 
*/
/* 
let a = Object.create(null,{
    x : {
        value : 1,
        writable : false, //Sobrescritura
        configurable : false, //Borrado
        enumerable : false //Iterabilidad
    },
    y : {
        value : "Hola",
        writable : false,
        configurable : false,
        enumerable : true
    }
})
 */

/* Object.defineProperty(a,"z",{
    value : true,
    writable : false,
    configurable : false,
    enumerable : false
}) */
//Object.defineProperty(a,"z",{value : true})

//Object.preventExtensions()
//Object.seal()
//Object.freeze()

//Literal
/* 
const a = {}
const b = 1
const c = true
const d = []
const e = function(){} 
const f = ""
*/

//Explicita(por funcion)
/* const a = new Object()
const b = new Number()
const c = new Boolean()
const d = new Array()
const e = new Function()
const f = new String() */


//FUNCIONES : Son objetos ejecutables variadicos de orden superior con contexto y ambito(scope)

//Ambito o el Scope : El alcance que tiene una funcion para llegar a una variable. Global , Local y Closure

//Global
/* const a = 1

function foo(b){
    //Local de foo (b y c)
    const c = true
    return c
}

const resultado = foo("Hola") */
//A partir de esta linea en adelante la variable b y c fueron destruidas



//Closure : Es un espacio de almacenamiento de memoria selectiva cuando una funcion es declarada adentro de otra funcion

/* 
const x = true

function externa(){

    const a = 1
    const b = 2

    return function interna(){
        console.log(a+b)
    }

}

const resultado = externa()
//A partir de esta linea a y b se borraron
resultado() 
*/

//Simil Clase
/* function persona(){
    
    //Atributo Privado
    const nombre = "Horacio"

    //Metodo Publico + Privado
    function getNombre(){
        console.log(nombre)
    }

    return getNombre
}

const resultado = persona() */



//CONTEXTO : Es una referencia al objeto que contiene a una funcion y esta en la palabra reservada "this". 


/* 
window.foo = function(){}

var foo = function(){}
*/

/* function foo(){
    console.log(this)
}

foo() */


const obj = {
    x : 1,
    fn : function(){

        console.log(this)//obj

        setTimeout(()=>{
            console.log(this)//obj
        })

        /* const self = this

        window.setTimeout(function(){
            //console.log(this) //window
            console.log(self)
        },0)
 */
    }
}

//obj.fn()


//const MiClase = () => {}
//function MiClase(){}

//new MiClase


//Function()
//Function.call  / Function.apply / Function.bind / new Function