//variables
let nombre = "antony";
let lastName = "rodriguez";


console.log("Mi nombre es"+" "+nombre + " " + lastName)

const dineroGanado = 4000;
const dineroGastado = 2000;

const dineroAhorrado = dineroGanado - dineroGastado;

console.log("Mis ahorros son"+" "+dineroAhorrado+"$");

//funciones
const name1 = "Juan David";
const lastname1 = "Castro Gallego";
const completeName = name1 +" "+lastname1;
const nickname = "juandc";

function getName(name,lastName,nickname) {
    return console.log("Mi nombre es " + name +" "+ lastName + ", pero prefiero que me digas " + nickname + ".");
}
getName("antony","Rodriguez","Tony");


//condicionales
const tipoDeSuscripcion = "Basic";

switch (tipoDeSuscripcion) {
   case "Free":
       console.log("Solo puedes tomar los cursos gratis");
       break;
   case "Basic":
       console.log("Puedes tomar casi todos los cursos de Platzi durante un mes");
       break;
   case "Expert":
       console.log("Puedes tomar casi todos los cursos de Platzi durante un año");
       break;
   case "ExpertPlus":
       console.log("Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año");
       break;
}

const f = "free";
const b = "basic";
const e = "expert";
const ep = "expertplus";

const tipoDeSuscripcion = function (user) {
    if (user === f) {
        console.log("Solo puedes tomar los cursos gratis")
    } else if  (user === b) {
        
        console.log("Puedes tomar casi todos los cursos de Platzi durante un mes")
    } else if (user === e) {
     
        console.log("Puedes tomar casi todos los cursos de Platzi durante un año")
    } else if (user === ep) {

        console.log("Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un años")
    } else {

        console.log("No tienes suscripción")
    }
    
};

tipoDeSuscripcion (ep);

const tipoDeSuscripcioness = "ep"

switch (tipoDeSuscripcioness) {
    case "f":
        console.log("Solo puedes tomar los cursos gratis")
        break; 
    case "b":    
        console.log("Puedes tomar casi todos los cursos de Platzi durante un mes")
    break; 
    case "e": 
        console.log("Puedes tomar casi todos los cursos de Platzi durante un año")
     break;
    case "ep":
        console.log("Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un años")
    break;
}


//forma de hacer el mismo ejemplo pero con arrays o objeto, forma automatizada

const tipoDeSuscripciones = {
    free: "Solo puedes tomar los cursos gratis",
    basic: "Puedes tomar casi todos los cursos de Platzi durante un mes",
    expert: "Puedes tomar casi todos los cursos de Platzi durante un año",
    expertplus: "Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un años",
};

function conseguirTipoSuscripcion(suscripcion){
    if (tipoDeSuscripciones [suscripcion]) {
        console.log(tipoDeSuscripciones[suscripcion]);
        return;
    }
    console.warn ("Ese tipo de suscripcion no existe");
}

conseguirTipoSuscripcion("expert");



//otro ejemplo

function auto(marca, modelo, annio) {
    this.marca = marca;
    this.modelo = modelo;
    this.annio = annio;
    console.log(this.marca, this.modelo, this.annio);
};

var marcas = ["toyota","mitsubishi","hyundai","honda"];
var modelos = ["corolla","montero","tucson","hondax3"];
var annios = ["2022","2021","2020"];

while (marcas.length > 0, modelos.length > 0, annios.length > 0) {
    var marca = marcas.shift();
    var modelo = modelos.shift();
    var annio = annios.shift();
    auto (marca,modelo,annio);
}


ejercicio condicionales.

for (let i = 0; i < 5; i++) {
    console.log("El valor de i es: " + i);
}
i = 0;
while (i < 5) {
    console.log("El valor de i es: " + i);
    i++;
}

for (let i = 10; i >= 2; i--) {
    console.log("El valor de i es: " + i);
}

i = 10;
while (i >= 2) {
    console.log("El valor de i es: " + i);
    i--;
}

// como preguntarle al cliente cuanto es 2+2 y decirle si la respuesta es correcta

while (respuesta != '4') {
    let pregunta = prompt('Cuanto es 2+2?')
    respuesta = pregunta;
}

//una funcion que pueda recibir cualquier un array como parametro e imprima su primer elemento.

//primera forma

imprimirPrimerElementoArray = ['juanita', 'pedro','juan']

for (var i = -1; i <= imprimirPrimerElementoArray.length; i++) {
    let arr = imprimirPrimerElementoArray.shift();
    console.log(arr);
}
//segunda forma

imprimirPrimerElementoArray = ['juanita', 'pedro','juan']

for (var i = 0; i < imprimirPrimerElementoArray.length; i++) {
    console.log(imprimirPrimerElementoArray[i]);
}


//una funcion que pueda recibir cualquier un objeto como parametro e imprima su primer elemento.

const obj = {
    nombre: 'antony',
    edad: 29,
    comidasFavoritas: ['pollo','carne'],
};

const objArray = Object.values(obj);

for (var i = 0; i < objArray.length; i++) {
    console.log(objArray[i]);
}


