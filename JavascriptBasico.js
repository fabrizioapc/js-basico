// Ejercicio 1 | Intenta crear un comentario de cada tipo

// inline comment
/*Comentario 
en varias lineas*/

// Ejercicio 2 | Utiliza la palabra clave var para crear una variable llamada myName.
var myName

// Ejercicio 3 | Asigna el valor 7 a la variable a.
var a;
a = 7;

// Ejercicio 4 | Asigna el contenido de a a la variable b.
var a;
a = 7;
var b;
b = a;

// Ejercicio 5 | Define una variable a con var e inicialízala con un valor de 9.
var a = 9;

// Ejercicio 6 | Crea dos nuevas variables de cadena: myFirstName y myLastName y asígnales los valores de tu nombre y apellido, respectivamente.
var myFirstName = "Fabrizio";
var myLastName = "Perez";

// Ejercicio 7 | Inicializa las tres variables a, b, y c con 5, 10 y "I am a" respectivamente para que no sean undefined.
var a = 5;
var b = 10;
var c = "I am a";

a = a + 1;
b = b + 5;
c = c + " String!";

// Ejercicio 8 | Modifica las declaraciones y asignaciones existentes para que sus nombres usen camelCase. No crees ninguna variable nueva.
var studlyCapVar;
var properCamelCase;
var titleCaseOver;

// Asignación de variables
studlyCapVar = 10;
properCamelCase = "A String";
titleCaseOver = 9000;

// Ejercicio 9 | Actualiza el código para que solo utilice la palabra clave let.
let catName = "Oliver";
let catSound = "Meow!";

// Ejercicio 10 | 
const FCC = "freeCodeCamp"; 
let fact = "is cool!"; 
fact = "is awesome!";
console.log(FCC, fact);

// Ejercicio 11 | Cambia el 0 para que la suma sea igual a 20.
const sum = 10 + 10;

// Ejercicio 12 | Cambia el 0 para que la diferencia sea 12.
const difference = 45 - 33;

// Ejercicio 13 | Cambia el 0 para que el producto sea igual a 80.
const product = 8 * 10;

// Ejercicio 14 | Cambia el 0 para que el quotient (cociente) sea igual a 2.
const quotient = 66 / 33;

// Ejercicio 15 | Cambia el código para usar el operador ++ en myVar.
let myVar = 87;
myVar++;

// ejercicio 16 | Cambia el código para usar el operador -- en myVar.
let myVar = 11;
myVar--;

// ejercicio 17 | Crea una variable myDecimal y dale un valor decimal con una parte fraccional (por ejemplo, 5.7).
let myDecimal = 5.7;

// ejercicio 18 | Cambia el 0.0 para que el producto sea igual a 5.0.
const product = 2.0 * 2.5;

// ejercicio 19 |Cambia el 0.0 para que el cociente (quotient) sea igual a 2.2.
const quotient = 4.4 / 2.0

// ejercicio 20 | Establece remainder igual al resto de 11 dividido entre 3 usando el operador de resto (%).
const remainder = 11 % 3;

// ejercicio 21 | Convierte las asignaciones de a, b y c para que utilicen el operador +=.
let a = 3;
let b = 17;
let c = 12;

a += 12;
b += 9 ;
c += 7;

// ejercicio 22 | Convierte las tareas de a, b, y c para utilizar el operador -=.
let a = 11;
let b = 9;
let c = 3;

a -= 6;
b -= 15;
c -= 1;

// ejercicio 23 | Convierte las tareas de a, b, y c para utilizar el operador *=.
let a = 5;
let b = 12;
let c = 4.6;

a *= 5;
b *= 3;
c *= 10;

// ejercicio 24 | Convierte las tareas de a, b, y c para utilizar el operador /=.
let a = 48;
let b = 108;
let c = 33;

a /= 12;
b /= 4;
c /= 11;

// ejercicio 25 |Usa barras invertidas para asignar una cadena a la variable myStr
const myStr = "I am a \"double quoted\" string inside \"double quotes\"."; 

// ejercicio 26 | Cambia la cadena proporcionada a una cadena con comillas simples al principio y al final y sin caracteres de escape.
const myStr = '<a href="http://www.example.com" target="_blank">Link</a>';

// ejercicio 27 | Asigna las siguientes tres líneas de texto en la variable única myStr usando secuencias de escape.
const myStr = "FirstLine\n\t\\SecondLine\nThirdLine";

// ejercicio 28 | Construye myStr a partir de las cadenas This is the start. y This is the end. utilizando el operador +. Asegúrate de incluir un espacio entre las dos cadenas.
const myStr = "This is the start. " + "This is the end.";

// ejercicio 29 | Construye myStr en varias líneas concatenando estas dos cadenas: This is the first sentence. y This is the second sentence. usando el operador +=
let myStr = "This is the first sentence. ";
myStr += "This is the second sentence.";

// ejercicio 30 | Establece myName en una cadena igual a tu nombre y construye myStr con myName entre las cadenas My name is y and I am well!
const myName = "Fabrizio";
const myStr = "My name is " + myName + "and I am well!";

// ejercicio 31 | Establece someAdjective a una cadena de al menos 3 caracteres y añádelo a myStr usando el operador +=.
const someAdjective = "cool";
let myStr = "Learning to code is ";
myStr += someAdjective;

// ejercicio 32 | Utilice la propiedad .length para establecer lastNameLength al número de caracteres en lastName.
let lastNameLength = 0;
const lastName = "Lovelace";

lastNameLength = lastName.length;

// ejercicio 33 | Utiliza notación de corchetes para encontrar el primer carácter en la variable lastName y asígnalo a firstLetterOfLastName.
let firstLetterOfLastName = "";
const lastName = "Lovelace";

firstLetterOfLastName = lastName[0];

// ejercicio 34 | Corrige la asignación de myStr para que contenga el valor de cadena Hello World
let myStr = "Jello World";

myStr = "Hello World";

// ejercicio 35 | Intentemos establecer thirdLetterOfLastName (tercera letra del apellido) para que sea igual a la tercera letra de la variable lastName usando notación de corchetes.
const lastName = "Lovelace";

const thirdLetterOfLastName = lastName[2]

// ejercicio 36 | Usa notación de corchetes para encontrar el último carácter en la variable lastName.
const lastName = "Lovelace";

const lastLetterOfLastName = lastName[lastName.length - 1]

// ejercicio 37 | Usa notación de corchetes para encontrar el penúltimo carácter en la cadena lastName.
const lastName = "Lovelace";

const secondToLastLetterOfLastName = lastName[lastName.length - 2];

// ejercicio 38 | 
const myNoun = "dog";
const myAdjective = "big";
const myVerb = "ran";
const myAdverb = "quickly";

const wordBlanks = "A " + myNoun + " pretty " + myAdjective + " just " + myVerb + " so " + myAdverb ;


// ejercicio 39 | Modifica el nuevo arreglo myArray para que contenga tanto una cadena como un número (en ese orden).
const myArray = ["cadena", 4];

// ejercicio 40 | Crea un arreglo anidado llamado myArray.
const myArray = [["Cuatro", 4], ["Cinco", 5]];