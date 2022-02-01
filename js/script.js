// presentacion
function persona (){
    var nombre = prompt ("Cual es tu nombre")
    var apellido = prompt ("Cual es tu apellido")
    var cel = prompt ("Cual es tu numero de contacto")
    var email = prompt ("Cual es tu email")

    alert("Bienvenid@ " + nombre +" "+ apellido)
}

persona ();

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