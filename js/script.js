
let cantpers = prompt("¿para cuantas personas estima realizar el evento?" )

const menos50 = 150;
const entre50y100 = 100;
const entre100y200 = 80;
const LaJ = 0.2 
var costeParcial = 

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
    alert( costetotal)
}

else{
    var costetotal = costeParcial - costeParcial * LaJ;
    alert( costetotal)
}