/*- Scrivi un programma che calcola la RAL lorda annuale di manuel-maria-giacomo,
  manuel tariffa lorda oraria 17.50€ - maria 15.50€  -giacomo 16.50€.
  Giorni standard di lavoro: 20 mese/ ore standard di lavoro 160 mese.
  Sapendo che 1 settimana bonus 1.7% 2 settimana bonus 3.2%  3 settimana 3.8%  4 settimana 4%.
  Nel mese di Gennaio Manuel è stato assente per le prime 27 ore. Nel mese di Aprile Maria è stata assente per le ultime 40 ore e nel mese di maggio giacomo è stato assente per le prime 48 ore.

  n.b  se il dipendente avrà lavorato meno di 3 giorni nella settimana non percepirà il bonus
  nei 3-4 giorni la settimana avrà il 50% del bonus
  n.b  se il dipendente avrà lavorato meno di 3 giorni nella settimana non percepirà il bonus
  nei 3-4 giorni la settimana avrà il 50% del bonus
  
  */

let manuel = {
  tariffaOraria: 17.5,
  stipendioGiornaliero: 17.5 * 8,
  stipendioSettimanale: function(){
    return this.stipendioGiornaliero * 5;
  },
  giorniLavorativi: 20,
  oreLavorative: 160,
  settimanaLavorativa: 40,
  primaSettimana: function () {
    return (this.stipendioSettimanale()/100)* 0.85 + this.stipendioSettimanale();
  },
  secondaSettimana: function () {
    return (this.stipendioSettimanale() / 100) * 3.2 + this.stipendioSettimanale();
  },
  terzaSettimana: function () {
    return (this.stipendioSettimanale() / 100) * 3.8 + this.stipendioSettimanale();
  },
  quartaSettimana: function () {
    return (this.stipendioSettimanale() / 100) * 4+ this.stipendioSettimanale();
  },
  mensile: function() {
    return (
      this.primaSettimana() +
      this.secondaSettimana() +
      this.terzaSettimana() +
      this.quartaSettimana()
    );
  }
};
console.log(manuel.mensile());



// let maria = {
//   tariffaOraria: 15.5,
//   stipendioGiornaliero: 15.5 * 8,
//   stipendioSettimanale: function () {
//     return this.stipendioGiornaliero * 5;
//   },
//   giorniLavorativi: 20,
//   oreLavorative: 160,
//   settimanaLavorativa: 40,
//   primaSettimana: function () {
//     return (
//       (this.stipendioSettimanale() / 100) * 1.7 + this.stipendioSettimanale()
//     );
//   },
//   secondaSettimana: function () {
//     return (
//       (this.stipendioSettimanale() / 100) * 3.2 + this.stipendioSettimanale()
//     );
//   },
//   terzaSettimana: function () {
//     return (
//       (this.stipendioSettimanale() / 100) * 3.8 + this.stipendioSettimanale()
//     );
//   },
//   quartaSettimana: function () {
//     return (
//        this.stipendioSettimanale()
//     );
//   },
//   mensile: function () {
//     return (
//       this.primaSettimana() +
//       this.secondaSettimana() +
//       this.terzaSettimana() +
//       this.quartaSettimana()
//     );
//   },
// };
// console.log(maria.mensile());


// let giacomo = {
//   tariffaOraria: 16.5,
//   stipendioGiornaliero: 16.5 * 8,
//   stipendioSettimanale: function () {
//     return this.stipendioGiornaliero * 5;
//   },
//   giorniLavorativi: 20,
//   oreLavorative: 160,
//   settimanaLavorativa: 40,
//   primaSettimana: function () {
//     return (
//       (this.stipendioSettimanale() / 100) * 1.7 + this.stipendioSettimanale()
//     );
//   },
//   secondaSettimana: function () {
//     return (
//       (this.stipendioSettimanale() / 100) * 3.2 + this.stipendioSettimanale()
//     );
//   },
//   terzaSettimana: function () {
//     return (
//       (this.stipendioSettimanale() / 100) * 1.6 + this.stipendioSettimanale()
//     );
//   },
//   quartaSettimana: function () {
//     return this.stipendioSettimanale();
//   },
//   mensile: function () {
//     return (
//       this.primaSettimana() +
//       this.secondaSettimana() +
//       this.terzaSettimana() +
//       this.quartaSettimana()
//     );
//   },
// };
// console.log(giacomo.mensile());

















/*- Scrivi un programma per la gestione di un garage.
  Definisci un oggetto che rappresenti un automobile, dovrà contenere almeno marca del veicolo e nome del modello.
  Scrivi una funzione che prenda in input una marca e stampi i modelli presenti nel garage di quella stessa marca.

  Consigli:
  Puoi usare un array come base per salvare le automobili.

  */














// -Scrivi un programma per la gestione di una rubrica telefonica.

//   Definisci un oggetto che rappresenti un contatto e, visto che stai diventando bravo/a, le proprietà dell'oggetto sono a tua discrizione.
//   L'unico vincolo che hai è di inserire almeno il nome e il numero di telefono come stringhe.

//   Definisci un altro oggetto che rappresenti la lista dei contatti, quindi sarà formato da un array di contatti.
//   Implementa i metodi dell'oggetto per le seguenti operazioni:
//       - Visualizzazione dell'intera lista contatti
//       - Inserimento di un nuovo contatto
//       - Modifica di uno contatto passando in input l'indice dell'array
//       - Cancellazione di un contatto passando in input l'indice dell'array
//       - Ricerca passando il nome e restituendo il singolo contatto.

//   Variante:
//   Migliora i metodi di Modifica e Cancellazione, al posto di prendere in input l'indice dell'array passa in input il nome
//   e ricava l'indice sul quale applicare l'operazione.
