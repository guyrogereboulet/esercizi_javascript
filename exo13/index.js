// Progettare un array di automobili che contiene alcuni oggetti. Ogni oggetto contiene delle proprietà: marca, modello, colore, alimentazione, anno e cavalli (quest’ultima proprietà la inseriamo solo in alcune auto).
// Inserire poi alcuni dati a piacere e visualizzare con un ciclo tutti i dati. Dopo cancellare da tutte le auto la proprietà cavalli e modificare la proprietà anno solo nelle auto di colore bianco, impostando il valore a 2020.

// let arrayAuto = [
//   {
//     marca: "Fiat",
//     modello: "500",
//     colore: "rosso",
//     alimentazione: "benzina",
//     anno: "2010",
//   },
//   {
//     marca: "Renault",
//     modello: "Megan",
//     colore: "nero",
//     alimentazione: "diesel",
//     anno: "2020",
//     cavalli: "100",
//   },
//   {
//     marca: "Citroen",
//     modello: "C3",
//     colore: "verde",
//     alimentazione: "gpl",
//     anno: "2005",
//     cavalli: "90",
//   },
//   {
//     marca: "Ford",
//     modello: "focus",
//     colore: "bianco",
//     alimentazione: "diesel",
//     anno: "2011",
//   },
// ];

// for (let index = 0; index < arrayAuto.length; index++) {
//   const element = arrayAuto[index];
//   delete element.cavalli;

//   if (element.colore == "bianco") {
//     element.anno = "2000";
//   }
// }

// console.log(arrayAuto);

// Eliminare dall’array di oggetti precedentemente creato tutti gli oggetti con marca fiat, utilizzando un ciclo.

// for (let i = 0; i < arrayAuto.length; i++) {
//   let element = arrayAuto[i];
//   if (element.marca === "Fiat") {
//     delete arrayAuto[i];
//   }
// }

// console.log(arrayAuto);

// let arrayNumber = [1, 2, 3, 4, 5];

// array = (array) => {
//   for (let index = 0; index < array.length; index++) {
//     if (array[index] % 2 == 0) {
//       console.log(array[index]);
//     }
//   }
// };

// array(arrayNumber);

// Scrivere un programma Javascript utilizzando template literal e arrow function
// Calcolando la retribuzione oraria mensile di maria,marco e luca .
// Note : maria 1500 euro mensili 250 ore lavorate,marco 1100 euro mensili 125 ore lavorate,
// luca 1700 euro mensili 114 ore lavorate.
// attributi dei dipendenti: nome,ore lavorate,stipendioMensile

// stipendio = (nome, oreLavorate, stipendioMensile) => {
//   let retribuzioneOraria = stipendioMensile / oreLavorate;
//   console.log(
//     `il dipendente ${nome} ha uno stipendio mensile di ${stipendioMensile}, ha lavorato ${oreLavorate} ore e ha una retribuzione oraria di ${retribuzioneOraria} `
//   );
// };

// stipendio("Maria", 250, 1500);
// stipendio("Marco", 125, 1100);
// stipendio("Luca", 114, 1700);

//Destructuring
// let array1 = ["Roger", "Fabio", "Anna"];
// let array2 = ([primo, secondo, terzo] = array1);
// console.log(primo, secondo, terzo);

// let obj = { nome: "Sasa", cognome: "romano", job: "Developer" };

// let { nome, cognome, job } = obj;

// console.log(`${nome} ${cognome} ${job}`);

// let n = [1, 2, 3, 4, 5];
// let n1 = [6, 7, 8, 9, 10];

// let spread = [...n, ...n1];

// console.log(spread);

// //ArrayMap (modifica gli elementi all'interno dell'array)
// let arrayMap = [50, 96, 112, 146, 250];
// let funzione = arrayMap.map((result) => result / 2);
// console.log(funzione);

// //ArrrayFilter (Crea un nuovo array in base alla condizione)
// let arrayFilter = [50, 96, 112, 146, 250];
// let funzioneFilter = arrayFilter.filter((result) => result > 96);
// console.log(funzioneFilter);

// // Il find trova il primo elemento che rispetta la condizione
// let numeri = [50, 96, 112, 146, 250];
// let funzioneFind = numeri.find((element) => element > 112);
// console.log(funzioneFind);

let arrayProdotti = [
  { nomeProdotto: "Vino", prezzo: 15 },
  { nomeProdotto: "Libro", prezzo: 10 },
  { nomeProdotto: "Libro", prezzo: 10 },
];

let filtraProdotti = arrayProdotti.filter(
  (arrayProdotti) => arrayProdotti.prezzo > 10
);

console.log(filtraProdotti);
