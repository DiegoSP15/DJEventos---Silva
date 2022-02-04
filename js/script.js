// presentacion
//function usuario (nombre, apellido, cel, email){
   // this.nombre= nombre;
   // this.apellido= apellido;
   // this.cel= cel;
   // this.email= email;
   // this.nuevoUsuario = true;
   // this.saludo = function () {
   //     alert ( "Bienvenid@ " + this.nombre +" " + this.apellido)
   // }
//}    

//class

class usuario {
    constructor(nombre, apellido, cel, email){
        this.nombre= nombre;
        this.apellido= apellido;
        this.cel= cel;
        this.email= email;
    }
    saludo(){
        alert ( "Bienvenid@ " + this.nombre +" " + this.apellido)
    }


}



let preguntarNombre = prompt ("Ingresa tu nombre")
let preguntarApellido = prompt ("Ingresa tu apellido")
let preguntarCel = prompt ("Ingresa tu numero de contacto")
let preguntarEmail = prompt ("Ingresa tu email")


const nuevoUsuario1 = new usuario (preguntarNombre, preguntarApellido, preguntarCel, preguntarEmail);
console.log(nuevoUsuario1);

nuevoUsuario1.saludo();

// tipo de evento
let evento = prompt("¿Que tipo de evento desea realizar? Opciones: boda, cumpleaño, empresarial, discoteca" );

if(evento == "boda"){
    alert ("contamos con los mejores profesionales para realizar la boda de su sueños")
}
else if (evento == "cumpleaños"){
    alert ("contamos con los mejores profesionales para realizar el cumpleaños de su sueños")
}
else if (evento == "empresarial"){
    alert ("contamos con los mejores profesionales para realizar el evenot de su sueños")
}
else if (evento == "discoteca"){
    alert ("contamos con los mejores profesionales para realizar la fiesta de su sueños")
}
else{
    evento = prompt ("el evento elegido no es correcto. Favor elegir entre las opciones: boda, cumpleaño, empresarial, discoteca")
}



//constantes

const menos50 = 150;
const entre50y100 = 100;
const entre100y200 = 80;
const LaJ = 0.2;
var costeParcial = 0; 


//calculadora

let cantpers = prompt("¿para cuantas personas estima realizar el evento?" );

alert("el evento sera para unas " + cantpers + " personas");

if(cantpers < 50){
    var costeParcial = cantpers * menos50;
    console.log(costeParcial);
}
else if ((cantpers >= 50) && (cantpers <100)){
    var costeParcial = cantpers * entre50y100;
    console.log(costeParcial);
}
else{
    var costeParcial = cantpers * entre100y200;
    console.log(costeParcial);
}

let dia = prompt ("¿que dia de la semana le gustaria realizar su evento?");

if((dia == "Viernes")||(dia == "Sabado")||(dia == "Domingo")){
    var costetotal = costeParcial
    alert("el precio estimado seria de USD" + costetotal)
}

else{
    var costetotal = costeParcial - costeParcial * LaJ;
    alert( "el precio estimado seria de USD " + costetotal)
}