//MODELO CLASICO


/* 
function Persona(nombre,edad){
    this.nombre = nombre
    this.edad = edad
    
    Persona.prototype.saludar = function(){
        console.log("Hola!",this.nombre)
    }
}

const horacio = new Persona("Horacio",30)
const juan = new Persona("Juan",40)



function Empleado(sueldo,nombre,edad){
    //window.Persona()
    //new Persona()

    //SuperClass.call(this,...args)
    Persona.call(this,nombre,edad)

    this.sueldo = sueldo
    Empleado.prototype.trabajar = function(){
        console.log("Trabajando...")
    }
}


//SubClass.prototype = Object.create(SuperClass.prototype)
//SubClass.prototype.construtor = SubClass
Empleado.prototype = Object.create(Persona.prototype)
Empleado.prototype.constructor = Empleado

const carlos = new Empleado(10,"Carlos",30) */


//MODELO ES6
/* 
class Persona {
    
    constructor(nombre,edad){
        this.nombre = nombre
        this.edad = edad
    }

    //Persona.prototype.saludar = function(){}
    saludar(){
        console.log("Hola!",this.nombre)
    }

}


class Empleado extends Persona {

    constructor(sueldo,nombre,edad){
        //Persona.call(this,nombre,edad)
        super(nombre,edad)
        this.sueldo = sueldo
    }

    trabajar(){
        console.log("Trabajando...")
    }

}


const carlos = new Empleado(20,"Carlos",30)
 */
/* const horacio = new Persona("Horacio",30) 
const juan = new Persona("Juan",40)  */


//MODULO

//IIFE - Immediatly Invoked Function Expression - Funcion Autoinvocada

const a = 1;

(function(){
    const data = "Hola"
    const data_privaad = "123456"
    document.addEventListener("click",()=>{
        console.log("Click!")
    })
    console.log(data)

    //NameSpace
    window.resultado = data
})()

const b = 1



