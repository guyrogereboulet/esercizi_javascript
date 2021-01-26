// 1 - Scrivi una funzione che prende in input una parola e una lettera e restituisce il numero di occorrenze della lettera nella parola.

function trovaLettera(parola, lettera) {
  let contatore = 0;

  for (let index = 0; index < parola.length; index++) {
    if (parola.charAt(index) == lettera) {
      contatore += 1;
    }
  }
  return contatore;
}

let result = trovaLettera("casa", "a");

console.log(trovaLettera("casa", "a"));

// 2 -Scrivere una funzione che prende in input 3 parametri un array e due numeri a e b e restituisce il numero di elementi compreso tra a e b. (a e b esclusi).

// function returnElement(array, a, b) {

// }

var numeri = ["10", "15", "20", "25", "30", "35", "40", "45", "50"];

var returnElement = function (array, a, b) {
  let arrayVuoto = [];

  for (var i = 0; i < array.length; i++) {
    if (numeri[i] > a && numeri[i] < b) {
      arrayVuoto.push(numeri[i]);
    }
  }

  return arrayVuoto;
};

console.log(returnElement(numeri, 10, 30));

// 3 - Scrivi una funzione che dato un numero intero (massimo 9999) conti da quante cifre è formato.

//   Esempi:
//   Input: numero = 9
//   Output: 1 cifra

//   Input: numero = 245
//   Output: 3 cifre

function countNumber(number) {
  if (number < 9999) {
    let numberString = number.toString();

    return numberString.length;
  } else {
    return false;
  }
}

console.log(countNumber(12));

// 4 - Scrivi un programma con due funzioni, la prima prende in ingresso un intero e verifica se sia compreso nel range da 1 a 7.
//   Se è compreso, la funzione restituirà TRUE, se non è compreso restituirà FALSE.

function compreso(int) {
  if (int >= 1 && int <= 7) {
    return true;
  } else {
    return false;
  }
}

console.log(compreso(6));

//   La seconda funzione:
//   - nel caso la prima restituisca TRUE visualizza il giorno della settimana corrispondente,
//     considerando la seguente corrispondenza:
//         1 = Lunedì
//         2=  Martedì
//        ......
//         7 = Domenica
//   - nel caso il giorno non sia compreso nel range, la funzione dovrà restituire un messaggio d'errore simile a questo: 'Day Not Found .'

let arrayWeek = [
  "Lunedì",
  "Martedì",
  "Mercoledì",
  "Giovedì",
  "Venerdì",
  "Sabato",
  "Domenica",
];

function printWeek() {
  if (console.log(compreso(6)) == true) {
    console.log("Ciao");
  }
}

console.log(printWeek());
