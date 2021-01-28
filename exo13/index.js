// Progettare un array di automobili che contiene alcuni oggetti. Ogni oggetto contiene delle proprietà: marca, modello, colore, alimentazione, anno e cavalli (quest’ultima proprietà la inseriamo solo in alcune auto).
// Inserire poi alcuni dati a piacere e visualizzare con un ciclo tutti i dati. Dopo cancellare da tutte le auto la proprietà cavalli e modificare la proprietà anno solo nelle auto di colore bianco, impostando il valore a 2020.

let arrayAuto = [
  {
    marca: "Fiat",
    modello: "500",
    colore: "rosso",
    alimentazione: "benzina",
    anno: "2010",
  },
  {
    marca: "Renault",
    modello: "Megan",
    colore: "nero",
    alimentazione: "diesel",
    anno: "2020",
    cavalli: "100",
  },
  {
    marca: "Citroen",
    modello: "C3",
    colore: "verde",
    alimentazione: "gpl",
    anno: "2005",
    cavalli: "90",
  },
  {
    marca: "Ford",
    modello: "focus",
    colore: "bianco",
    alimentazione: "diesel",
    anno: "2011",
  },
];

// for (let index = 0; index < arrayAuto.length; index++) {
//   const element = arrayAuto[index];
//   delete element.cavalli;

//   if (element.colore == "bianco") {
//     element.anno = "2000";
//   }
// }

// console.log(arrayAuto);

// Eliminare dall’array di oggetti precedentemente creato tutti gli oggetti con marca fiat, utilizzando un ciclo.

for (let i = 0; i < arrayAuto.length; i++) {
  let element = arrayAuto[i];
  if (element.marca === "Fiat") {
    delete arrayAuto[i];
  }
}

console.log(arrayAuto);
