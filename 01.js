// booleans
var esHombre = true;
console.log(typeof esHombre);
console.log("hola mundo");
// number (decimales, enteros)
var numero = 35;
numero = 4.5;
console.log(numero);
// strings
var frase = "estamos aprendiendo typescript";
console.log(frase);
// any
var frase2 = "estamos aprendiendo typescript";
frase2 = 45;
frase2 = true;
console.log(frase2);
//Array
var lista = ["Diego", "Dorian", "Elver"];
console.log(lista);
// tupla ->  lista, multiples datos
var tupla = ['Felix', 50.5, true];
console.log(tupla);
// enumerables
var Carreras;
(function (Carreras) {
    Carreras[Carreras["IngSistemas"] = 0] = "IngSistemas";
    Carreras[Carreras["IngComercial"] = 1] = "IngComercial";
    Carreras[Carreras["IngAlimentos"] = 2] = "IngAlimentos";
    Carreras[Carreras["IngTelecom"] = 3] = "IngTelecom";
})(Carreras || (Carreras = {}));
var posicion = Carreras.IngTelecom;
console.log(posicion);
// funciones, metodos
//No retorna nada
function saludo(palabra) {
    return palabra;
}
console.log(saludo("Tecnologias en INternet typescript"));
