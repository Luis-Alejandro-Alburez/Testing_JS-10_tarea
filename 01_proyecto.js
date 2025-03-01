/*Sabes mucho sobre sintaxis, el flujo de control y las funciones de 
JavaScript, ahora reforzaremos esas habilidades. 

Realiza lo siguiente en un mismo script.*/

/* 
TAREA 1
Escribe una funciÃ³n greetWorld(). Tu funciÃ³n no debe tener parÃ¡metros y
debe devolver a cadena 'Hello, World!'.
Puedes usar declaraciÃ³n de funciones o expresiÃ³n de funciones.
*/

function greetWorld() {
  console.log("Hello, World!");
}

greetWorld();

/*

TAREA 2
La edad mÃ­nima mÃ¡s comÃºn para votar es de 18 aÃ±os.  Escribe una funciÃ³n
canIVote() que tome un nÃºmero que represente la edad de la persona y
devuelva el valor booleano true si tiene 18 aÃ±os o mÃ¡s, y el
valor booleano false si no los tiene. Muestralo en consola

Realiza la prueba con:
console.log(canIVote(19));
*/
function canIVote(edad) {
  return edad > 17;
}

console.log(canIVote(19));

/*
TAREA 3
Escriba una funciÃ³n, agreeOrDisagree(), que tome dos cadena y devuelva
'You agree!' si las dos cadena son iguales y 'You disagree!' si las
dos cadenas son diferentes. Muestra el resultado en consola.

Prueba tu cÃ³digo con:
console.log(agreeOrDisagree("yep", "yep"))
*/

function agreeOrDisagree(a, b) {
  return a === b ? "You agree!" : "You disagree!";
}

console.log(agreeOrDisagree("yep", "yep"));

/*
TAREA 4
Escribe una funciÃ³n, lifePhase(), que tome la edad(age) de una persona como
nÃºmero y devuelva en quÃ© fase de la vida se encuentra.

AquÃ­ estan las clasificaciones:
 0- 3 deberÃ­a devolver 'baby'
 4-12 deberÃ­a devolver 'child'
13-19 deberÃ­a devolver 'teen'
20-64 deberÃ­a devolver 'adult'
65-140 deberÃ­a devolver 'senior citizen'

Si el nÃºmero es menor que cero o mayor que 140, el programa
deberÃ­a devolver 'This is not a valid age'
*/

function lifePhase(edad) {
  switch (true) {
    case edad >= 0 && edad <= 3:
      return "baby";
    case edad >= 4 && edad <= 12:
      return "child";
    case edad >= 13 && edad <= 19:
      return "teen";
    case edad >= 20 && edad <= 64:
      return "adult";
    case edad >= 65 && edad <= 140:
      return "senior citizen";
    default:
      return "This is not a valid age";
  }
}

console.log(lifePhase(2)); // 'baby'
console.log(lifePhase(10)); // 'child'
console.log(lifePhase(15)); // 'teen'
console.log(lifePhase(30)); // 'adult'
console.log(lifePhase(70)); // 'senior citizen'
console.log(lifePhase(-5)); // 'This is not a valid age'
console.log(lifePhase(150)); // 'This is not a valid age'

/*
TAREA 5
Escribe una funciÃ³n, finalGrade(). DeberÃ­a:

* Toma tres argumentos de tipo nÃºmero.
* Encuentra el average de esos tres nÃºmeros
* Devuelve la calificaciÃ³n de la letra (como una cadena) 
  average a la que corresponde.
* Devuelve 'Ha ingresado una calificaciÃ³n no vÃ¡lida' si alguna de 
  las tres calificaciones es menor que 0 o mayor que 100.

    0-59 deberÃ­a devolver: 'F'
    60-69 deberÃ­a devolver: 'D'
    70-79 deberÃ­a devolver: 'C'
    80-89 deberÃ­a devolver: 'B'
    90-100 deberÃ­a devolver:'A'
*/

function finalGrade(a, b, c) {
  const gradeAvg = (a + b + c) / 3;
  const textNoValido = "Ha ingresado alguna calificación no válida";
  switch (true) {
    case a > 100:
      return textNoValido;
    case b > 100:
      return textNoValido;
    case c > 100:
      return textNoValido;
    case gradeAvg >= 0 && gradeAvg <= 59:
      return "F";
    case gradeAvg >= 60 && gradeAvg <= 69:
      return "D";
    case gradeAvg >= 70 && gradeAvg <= 79:
      return "C";
    case gradeAvg >= 80 && gradeAvg <= 89:
      return "B";
    case gradeAvg >= 90 && gradeAvg <= 100:
      return "A";
    case gradeAvg < 0:
      return textNoValido;
    default:
      textNoValido;
  }
}

console.log(finalGrade(0, 0, -50));

/*
TAREA 6
Escribe una funciÃ³n reportingForDuty(), que tenga dos parÃ¡metros string,
rank y lastname, y retorne una string en el siguiente formato:
'rank lastName reporting for duty'

reportingForDuty('Private', 'Fido') 
// DeberÃ­a retornar 'Private Fido reporting for duty!'
*/

function reportingForDuty(rank, lastname) {
  return `${rank} ${lastname} reporting for duty!`;
}

console.log(reportingForDuty("Private", "Fido"));

/*
TAREA 7
Arregla el cÃ³digo
Te presento una funciÃ³n rollTheDice(), la cual supuestamente
simula el lanzamiento de dos dados y el total de los dados.
La funciÃ³n casÃ­ funciona, pero hay algunos errores.
Â¿Puedes arreglar el cÃ³digo, por favor?
*/

const rollTheDice = () => {
  // Math.random() nos da un numero random desde 0 pero no incluye el 1
  //Multiplicamos ese nÃºmero por 6 para tener un nÃºmero entre 0 y 6 pero no logramos
  //incluir el 6
  // para lograrlo hemos intentado lo siguiente sumamos 1
  let die1 = Math.round(Math.random(), 0) * 5 + 1;
  let die2 = Math.round(Math.random(), 0) * 5 + 1;
  return `${die1} + ${die2} = ${die1 + die2}`;
};

console.log(rollTheDice());

/*
TAREA 8
Aunque la masa de un objeto permanece constante en todo el universo, 
el peso estÃ¡ determinado por la fuerza de gravedad que ejerce sobre Ã©l. 
Como cada planeta tiene una gravedad diferente, el mismo objeto pesarÃ­a 
cantidades distintas en cada uno de esos planetas.

Escribe una funciÃ³n, calculateWeight(). DeberÃ­a:
* Tener dos parÃ¡metros: earthWeight y planet
* Espera que earthWeight sea un nÃºmero
* Espera que planet sea una string
* devuelve un nÃºmero que representa el peso de la Tierra equivalente al planet 
  ingresado.

Manejar los siguientes casos:
'Mercury'peso = earthWeight* 0,378
'Venus'peso = earthWeight* 0,907
'Mars'peso = earthWeight* 0,377
'Jupiter'peso = earthWeight* 2,36
'Saturn'peso = earthWeight* 0,916
Para todas las demÃ¡s entradas, 
devuelva'Invalid Planet Entry. Try: Mercury, Venus, Mars, Jupiter, or Saturn.'

Pruebalo con:
console.log(calculateWeight(100, 'Jupiter')) // Should print 236
*/

function calculateWeight(earthWeight, planet) {
  switch (true) {
    case planet === "Mercury":
      return earthWeight * 0.378;
    case planet === "Venus":
      return earthWeight * 0.907;
    case planet === "Mars":
      return earthWeight * 0.377;
    case planet === "Jupiter":
      return earthWeight * 2.36;
    case planet === "Saturn":
      return earthWeight * 0.916;
    default:
      return "Invalid Planet Entry. Try: Mercury, Venus, Mars, Jupiter, or Saturn.";
  }
}

console.log(calculateWeight(100, "Jupiter")); // Should print 236

/*
TAREA 9

Puede resultar difÃ­cil hacer un seguimiento de lo que es verdadero o 
falso en JavaScript . 
Escriba una funciÃ³n, truthyOrFalsy(), que acepte cualquier valor y 
devuelva true si ese valor es verdadero y false si ese valor es falso .
https://developer.mozilla.org/en-US/docs/Glossary/Falsy
*/

function truthyOrFalsy(valor) {
  return !!valor; // Doble negación para convertir el valor a booleano
}

console.log(truthyOrFalsy(0)); // false
console.log(truthyOrFalsy("")); // false
console.log(truthyOrFalsy(null)); // false
console.log(truthyOrFalsy(undefined)); // false
console.log(truthyOrFalsy(NaN)); // false
console.log(truthyOrFalsy(false)); // false

console.log(truthyOrFalsy(1)); // true
console.log(truthyOrFalsy("Hola")); // true
console.log(truthyOrFalsy([])); // true
console.log(truthyOrFalsy({})); // true
console.log(truthyOrFalsy(true)); // true

/*TAREA 10 
Las personas tienen muchos amigos, pero a veces creen tener mÃ¡s,
se ha realizado un estudio y se ha determinado que la cantidad
de amigos imaginarios de una persona es igual a la cantidad
de amigos por 0.25 es decir un 25% de sus amigos o 1/4 de ellos.

Escribe una funciÃ³n, numImaginatyFriends() que tome el nÃºmero
de amigos de una persona y devuelva el nÃºmero de amigos
imaginarios que tiene esa persona.
Debido a que los amigos solo pueden venir en nÃºmeros enteros,
deberÃ­as redondear el resultado al entro mÃ¡s cercano anter de
retornarlo.
La funciÃ³n Math.ceil() te resultarÃ¡ Ãºtil.

Utiliza las siguientes lÃ­neas de cÃ³digo para realizar la prueba
console.log(numImaginaryFriends(20)) // Debe imprimir5
console.log(numImaginaryFriends(10)) // debe imprimir 3

*/

function numImaginaryFriends(numAmigos) {
  return Math.round(numAmigos * 0.25, 0);
}
console.log(numImaginaryFriends(20)); // Debe imprimir5
console.log(numImaginaryFriends(10)); // debe imprimir 3

/*TAREA 11
Escribe una funciÃ³n, sillySentence(), que contenga 3 parÃ¡metros de
cadena y devuelva la siguiente oraciÃ³n tonta con los espacios
en blanco completados por los argumentos pasados a la funciÃ³n

    I am so (adjetive) becouse I (verb) coding! Time to write
              some more awesome (noum) !

La llamada a sillySentence('excited', 'love', 'functions') 
deberÃ­a retornar 'I am so excited because I love coding! Time
to write some more awesome functions!'   

Utiliza la siguiente lÃ­nea de cÃ³digo para realizar la prueba
console.log(sillySentence('excited', 'love', 'functions')) 
*/

sillySentence = function (adjetive, verb, noum) {
  return `I am so ${adjetive} because I ${verb} coding! Time to write \n some more awesome ${noum}`;
};
console.log(sillySentence("excited", "love", "functions"));

/*TAREA 12
Escribe una funciÃ³n, howOld(), que tome dos parÃ¡metros numÃ©ricos, 
age y year, y devuelva cuÃ¡ntos aÃ±os tendrÃ­a una persona con esa 
edad en ese aÃ±o.

Debe tratar tres casos diferentes:

*Si el year estÃ¡ en el futuro, debe devolver:
 'Tu tendrÃ¡s [age calculada] en el aÃ±o [year].

*Si el year es anterior alnacimiento, debe devolver una cadena con el
 siguiente formato:
 'El aÃ±o [year] fue [numero de aÃ±os calculados] aÃ±os antes de nacer'

 *Si el year es en el pasado pero no anterior al aÃ±o de nacimiento de
 la persona, debe devolver:
  'Tu tenias [age calculada] en el aÃ±o [year del pasado] 
  
  Utiliza en tu funciÃ³n::
     let dateToday = new Date();
    let thisYear = dateToday.getFullYear();
  */

howOld = function (age, year) {
  let dateToday = new Date();
  let thisYear = dateToday.getFullYear();
  switch (true) {
    case year > thisYear:
      return `Tu tendrías ${age + year - thisYear}`;
    case year < thisYear - age:
      return `El año ${year} fue ${thisYear - age - year} años antes de nacer`;
    case year > thisYear - age:
      return `Tu tenias ${year - thisYear - age} en el año ${year}`;
    default:
      return `esta combinación da 0`;
  }
};

console.log(howOld(40, 1985));

/*TAREA 13
Arregla el cÃ³digo roto:

Dado el porcentaje de ADN compartido entre dos personas, se puede calcular 
su probable relaciÃ³n familiar .

Escribimos una funciÃ³n, whatRelation(), que tiene un parÃ¡metro numÃ©rico, 
percentSharedDNA, y devuelve la relaciÃ³n probable. 
Esperamos que el nÃºmero que se ingrese sea siempre un entero entre 0 y 100, pero por alguna razÃ³n no funciona.

AsÃ­ es como se supone que debe calcularse la relaciÃ³n:

100 deberÃ­an regresar'You are likely identical twins.'
35-99 deberÃ­a regresar'You are likely parent and child or full siblings.'
14-34 deberÃ­a regresar'You are likely grandparent and grandchild, aunt/uncle and niece/nephew, or half siblings.'
6-13 deberÃ­a regresar'You are likely 1st cousins.'
3-5 deberÃ­an regresar'You are likely 2nd cousins.'
1-2 deberÃ­a regresar'You are likely 3rd cousins.'
0 deberÃ­a regresar'You are likely not related.'

Â¡Lamentablemente no estÃ¡ funcionando como queremos!

whatRelation(34) 
// Should return 'You are likely grandparent and grandchild, 
// aunt/uncle and niece/nephew, or half siblings.'
// But instead it's returning 'You are likely 1st cousins.'

whatRelation(3)
// Should return 'You are likely 2nd cousins.'
// But instead it's returning 'You are likely grandparent and grandchild, 
// aunt/uncle and niece/nephew, or half siblings.'

El cÃ³digo que estÃ¡ roto es el siguiente:
*/
const whatRelation = (percentSharedDNA) => {
  if (percentSharedDNA === 100) {
    return "You are likely identical twins.";
  }
  if (percentSharedDNA > 34 && percentSharedDNA < 100) {
    return "You are likely parent and child or full siblings.";
  }
  if (percentSharedDNA > 13 && percentSharedDNA < 35) {
    return "You are likely grandparent and grandchild, aunt/uncle and niece/nephew, or half siblings.";
  }
  if (percentSharedDNA > 5 && percentSharedDNA < 14) {
    return "You are likely 1st cousins.";
  }
  if (percentSharedDNA > 2 && percentSharedDNA < 6) {
    return "You are likely 2nd cousins.";
  }
  if (percentSharedDNA > 0 && percentSharedDNA < 3) {
    return "You are likely 3rd cousins";
  } else {
    return "You are likely not related.";
  }
};

console.log(whatRelation(34));
// Should print 'You are likely grandparent and grandchild, aunt/uncle and niece/nephew, or half siblings.'

console.log(whatRelation(3));
// Should print 'You are likely 2nd cousins.'
/*
Puedes arreglarlo? 

/*TAREA 14
Calculadora de propinas tipCalculator()
Cree una funciÃ³n, tipCalculator(), que tenga dos parÃ¡metros, una cadena que represente qualityel servicio recibido y un nÃºmero que represente el totalcosto.

Devuelve la propina, como un nÃºmero, en funciÃ³n de lo siguiente:
'malo' debe devolver una propina del 5%
'ok' debe devolver una propina del 15%
'bueno' debe devolver una propina del 20%
'excelente' debe devolver una propina del 30%
todas las demÃ¡s entradas deben tener como valor predeterminado el 18%.

tipCalculator('good', 100) // Should return 20

*/

tipCalculator = function (quality, totalCost) {
  switch (true) {
    case quality === "malo":
      return totalCost * 0.05;
    case quality === "ok":
      return totalCost * 0.15;
    case quality === "bueno":
      return totalCost * 0.2;
    case quality === "excelente":
      return totalCost * 0.3;
    default:
      return totalCost * 0.18;
  }
};

console.log(tipCalculator("bueno", 100)); // Should return 20

/*TAREA 15
Escriba una funciÃ³n, toEmoticon(), que tome una cadena y devuelva el emoticÃ³n correspondiente como cadena. Utilice un modificador/caso y cubra estos casos:

'shrug'deberÃ­a regresar '|_{"}_|'
'smiley face'deberÃ­a regresar ':)'
'frowny face'deberÃ­a regresar ':('
'winky face'deberÃ­a regresar ';)'
'heart'deberÃ­a regresar '<3'
cualquier otra entrada deberÃ­a regresar'|_(* ~ *)_|' */
function toEmoticon(cadena) {
  switch (true) {
    case cadena === "shrug":
      return '|_{"}_|';
    case cadena === "smiley":
      return ":)";
    case cadena === "frowny":
      return ":(";
    case cadena === "winky":
      return ";)";
    case cadena === "heart":
      return "<3";
    default:
      return "|_(* ~ *)_|";
  }
}

console.log(toEmoticon());
console.log(toEmoticon("heart"));
console.log(toEmoticon("winky"));
console.log(toEmoticon("frowny"));
console.log(toEmoticon("smiley"));
console.log(toEmoticon("shrug"));
