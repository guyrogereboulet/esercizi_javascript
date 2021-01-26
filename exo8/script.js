/***************************************************************
Guide Lines:
Le righe devono sempre terminare con il punto e virgola quando possibile;
Il codice deve essere scomposto in funzioni con un nome autodescrittivo, in maniera tale da poter facilmente comprendere cosa andrà a fare quel segmento di codice;
I nomi di funzioni e variabili sono in camelCase, NON VOGLIO PIU' RIPERTLO;
Creare un file js in cui sono presenti tutte le funzioni da richiamare, nell'html verranno fatte solo le invocazioni all'interno del tag script.
************************************************************** */

/*Esercizio 0:
Creare un algoritmo per calcolare i primi 15 numeri della seguenza di fibonacci.
Dati i valori iniziali [0,1] la seguenza di fibonacci continua con un nuovo valore pari alla somma dei due precedenti → [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144].
Analisi: Creare l'array con già presenti i valori 0,1. Dopodichè all'interno di un iterazione andare a calcolare la somma degli ultimi due elementi dell'array e inserirli alla fine dell'array (push). L'iterazione va continuata finchè l'array non avrà raggiunto lunghezza 15.*/

// let fibonacci = [0, 1];

// for (let i = 2; i < 14; i++) {
//   fibonacci[i] = fibonacci[i - 2] + fibonacci[i - 1];
//   fibonacci.push(i);
// }

// console.log(fibonacci);

/*Esercizio 1:
A seguito di un input ricevuto dall'utente (promt) che definisce la quantità di elementi che si vuole visualizzare, creare un array di dati lunga quanto specificato dall'utente, che contenga valori randomici contenuti tra 0 e 1000.
Una volta creata l array di dati, stampare a video l'array e calcolare randomicamente un numero 0<minimo<500 e un numero 500<massimo<1000 (minimo compreso tra 0 e 500, massimo compreso tra 500 e 1000).
Prelevare tutti gli elementi dell'array che siano compresi tra minimo e massimo e posizionarli in un nuovo array.
Completare quindi l'esercizio stampando a video (in console js o nell'html), la collezione uscente.
Plus: Gli elementi non vanno salvati in un nuovo array, vanno bensì eliminati dall' array originale i valori che non rispettano la condizione scritta sopra.*/

// const lunghezza = 10;
// const min = Math.round(Math.random() * 500);
// const max = Math.round(Math.random() * 500) + 500;
// const array = creaArrayPopolato(Number(lunghezza));
// const arrayFinale = spolpaArray(array, min, max);

// function creaArrayPopolato(numero) {
//   let arrayDaPopolare = [];
//   for (let index = 0; index < numero; index++) {
//     arrayDaPopolare[index] = Math.floor(Math.random() * 1000) + 1;
//   }

//   return arrayDaPopolare;
// }

// function spolpaArray(arrayBase, a, b) {
//   let arrayVuoto = [];
//   for (let i = 0; i < arrayBase.length; i++) {
//     if (arrayBase[i] > a && arrayBase[i] < b) {
//       arrayVuoto.push(arrayBase[i]);
//     }
//   }
//   return arrayVuoto;
// }

/*
Esercizio 2:
A seguito di un input ricevuto dall'utente (promt) che definisce la quantità di elementi che si vuole visualizzare, creare un array di dati lunga quanto specificato dall'utente, che contenga oggetti composti come segue:
{
	id: Number,
	valore: String
}.
L'id deve essere un intero progressivo generato da una funzione, come l'esercizio del 21/01 assegnata dal docente Luigi, il valore deve invece essere una lettera dall'alfabeto recuperata randomicamente da un array che contiene tutte le lettere dell'alfabeto.
Una volta creata l array di dati, stampare a video l'array e rimuovere tutti gli elementi il cui id non è presente nella seguente sequenza numerica [0,1,1,2,3,5,8,13,21,34,55,89,144] (Seq di Fibonacci).
Completare quindi l'esercizio stampando a video (in console js o nell'html), la collezione uscente.
Plus: Gli elementi non vanno salvati in un nuovo array, vanno bensì eliminati dall' array originale i valori che non rispettano la condizione scritta sopra. */

//insert input
//var input =5;
//new array length == input
//[1,2,3,4,5,6,7,8,9,10]
// fibonacci = [0,1,1,2,3,5,8,13,21,34,55,89,144]

// {id: Number,valore: String}

exercize(5);
function exercize(input) {
  // for(let i = 0; i< input){
  // }
}

function getAlPhaRandom() {
  let alfabeto = [
    "a",
    "b",
    "c",
    "d",
    "f",
    "g",
    "h",
    "l",
    "m",
    "n",
    "p",
    "q",
    "r",
    "s",
    "t",
    "v",
    "z",
  ];
  return console.log(alfabeto[Math.floor(Math.random() * alfabeto.length)]);
}


function creatArray() {
  let input = 5;
  let seq = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  let obj = {};

//   for (let i = 0; i < seq.length; i++) {
//     console.log(seq[i]);
//     obj[seq[i]] = getAlPhaRandom();
//   }

    for (const k in seq) {
      obj[k] = getAlPhaRandom();
    }

  console.log(obj);
}

creatArray();
