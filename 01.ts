// booleans
let esHombre : boolean = true;
console.log(typeof esHombre);
console.log("hola mundo");
// number (decimales, enteros)
let numero : number = 35;
numero = 4.5;
console.log(numero);
// strings
let frase : string = "estamos aprendiendo typescript";
console.log(frase);
// any
let frase2 : any = "estamos aprendiendo typescript";
frase2 = 45;
frase2 = true;
console.log(frase2);

//Array
let lista : string [] = ["Diego", "Dorian", "Elver"];
console.log(lista);
// tupla ->  lista, multiples datos
let tupla : [string, number, boolean] = ['Felix', 50.5, true]
console.log(tupla);
// enumerables
enum Carreras {
    IngSistemas = 0,
    IngComercial = 1,
    IngAlimentos = 2,
    IngTelecom = 3
}

let posicion : number = Carreras.IngTelecom;
console.log(posicion);
// funciones, metodos
//No retorna nada
function saludo (palabra : string) : string {
   return palabra;
}

console.log(saludo ("Tecnologias en INternet typescript"));