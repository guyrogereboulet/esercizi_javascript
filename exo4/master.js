// carlo libero professionista
// carlo reddito imponibile su 12 mesi 27550€
// carlo tasse da pagare 25,72% inps+15% irpef
// 78% reddività libero professionista

// let reddittoProfessionista = 27550*0.78;
// console.log(reddittoProfessionista);
// let inpsMarco = reddittoProfessionista * 0.2572;
// console.log(inpsMarco);
// let irpefMarco = reddittoProfessionista* 0.15;
// console.log(irpefMarco);

// let risultato = reddittoProfessionista - inpsMarco - irpefMarco;

// console.log(risultato);

// function getRedditoProfessionista(reddito) {
//   let inps = (reddito / 100) * 25.72;

//   let irpef = (reddito / 100) * 15;

//   let result = reddito - inps - irpef;

//   return result;
// }

// let risultato = getRedditoProfessionista(reddittoProfessionista);

// console.log(risultato/12);

// marco artigiano
// marco reddito imponibile su 12 mesi 35450€
// marco 2500 inps 15000€ superiore a 15.000 24%+15% irpef
// 67% marco artigiano

// let reddittoArtigiano = (35450 / 100) * 67;

// console.log(reddittoArtigiano);

// function getRedditoArtigiano(reddito) {

//  if(reddito > 15000) {

//     let inps = 100(reddito / 100) * 25.72;

//     let irpef = (reddito / 100) * 15;

//     let result = reddito - inps - irpef;
//  }

//   return result;
// }

// let risultato = getReddito(reddittoProfessionista);

// console.log(risultato);

// -  Scrivi un programma che dato array di numeri, calcoli la media dei valori e
//   restituisca in output la media e tutti i valori minori della media.

// let arrayNumber = [45, 35, 10, 50, 55, 15];

// function media(array) {
//   let somma = 0;
//   let finalResult = 0;

//   for (let i = 0; i < array.length; i++) {
//     somma = somma + array[i];
//     finalResult = somma / array.length;

//     if (array[i] < finalResult) {
//       console.log(array[i]);
//     }
//   }

//   return finalResult;
// }

// console.log(media(arrayNumber));

// -Scrivi un programma che dato un array di 100 elementi, lo riempia con numeri interi casuali da 1 a 50.
//   Permetti all'utente di inserire un numero e azzera tutti i gli elementi nell'array principale che sono suoi multipli.
//   Richiedi all'utente un altro numero e così via.
//   Il programma termina quando tutti gli elementi dell'array principale sono uguali a zero.

// do {
//   var inserisciProgramma = parseInt(prompt("Inserisci un numero"));
//   var newArray = new Array(50);

//   for (var i = 1; i <= 50; i++) {
//     newArray.push(Math.floor(Math.random() * 50));

//     for (var index = 0; index < newArray.length; index++) {
//       if (newArray[index] % inserisciProgramma == 0) {
//         newArray[index] = 0;
//       }
//     }
//   }
//   console.log(newArray);
//   var condition =newArray.every((item) => item === 0);

// } while (condition == false);

//   -  Scrivi un programma che dato:
//   - un array di 10 elementi di numeri casuali interi (compresi tra 1 e 90),
//   - un array di 10 numeri interi a tuo piacimento (compresi tra 1 e 90)
//   Verifichi quanti numeri scelti da te sono presenti nell'array principale e restituisca un risultato del tipo:

//     2 numeri uguali => ambo
//     3 numeri uguali => terna
//     4 numeri uguali => quaterna
//     5 numeri uguali => cinquina
//     tutti i numeri uguali => tombola

//   In caso di vittoria dovrà essere stampato un messaggio "Hai fatto X",
//   in caso di perdita dovrà essere mostrato il messaggio "Mi dispiace, hai perso!".

// let arrayTombola = [];
// let arrayGiocatore = [5, 10, 8, 20, 64, 89, 64, 77, 22, 41];

// for (j = 1; j <= 10; j++) {
//   arrayTombola.push(Math.floor(Math.random() * 90+1));
// }
// res = arrayTombola.filter((item) => arrayGiocatore.includes(item));
// console.log(arrayTombola);
// console.log(res);

// if (res.length == 2) {
//   console.log("Ambo");
// }

// if (res.length == 3) {
//   console.log("Terna");
// }

// if (res.length == 4) {
//   console.log("Quaterna");
// }

// if (res.length == 5) {
//   console.log("Cinquina");
// }

// if (res.length == arrayGiocatore.length) {
//   console.log("Quaterna");
// }

//  -Scrivi un programma che stampi il tabellone delle tabelline, da 0 a 10.
//   In questo modo:
//     x | 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10
//     0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0
//     1 | 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10
//     2 | 0 | 2 | 4 | 6 | 8 | 10 | 12 | 14 | 16 | 18 | 20

// document.write("<table border=1; cellpadding = 20>");

// for (let k = 1; k <= 10; k++) {
//   //Creo 10 righe
//   document.write("<tr>");

//   //Per ogni riga creo 10 celle
//   for (let j = 1; j <= 10; j++) {
//     document.write("<td>");
//     document.write(k * j);
//     document.write("</td>");
//   }

//   document.write("</tr>");
// }

// document.write("</table>");


