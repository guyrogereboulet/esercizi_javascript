function genera() {
    //Prelevo un elemento dall'array in maniera casuale
    const elementoDaInserire = elements[Math.floor(Math.random() * elements.length)];
    //Se nessun elemento è stato trovato (probabile array vuoto), non ha senso continuare
    if (!elementoDaInserire) {
        console.log("Nessun elemento presente, impossibile procedere");
        return;
    }

    //Genero il nuovo elemento da inserire nel dom
    const element = document.createElement(elementoDaInserire.tipo);
    element.setAttribute("id", getNewId());

    const child = document.createTextNode(elementoDaInserire.text);
    element.appendChild(child);

    //Aggiungo nel container un nuovo elemento
    getPadre().appendChild(element);
}

function distruggi() {
    const element = document.getElementById(getLastId());
    if (!element) {
        console.log("Nessun elemento trovato, impossibile procedere");
        return;
    }
    element.parentNode.removeChild(element);
}

//Vi è stato chiesto di usare gli array e di non fare le cose manualmente, in maniera tale da avere un comportamento dinamico, ma ovviamente l'inizializzazione va fatta.
function popolateArray() {
    //Il tipo di dato da me scelto è molto semplice. Avreste potuto fare tante altre cose, l'importante è capire come svolgere al meglio l'esercizio, poi per complicarsi la vita c'è tempo.
    elements.push({
        tipo: "p",
        text: "Italia",
    });
    elements.push({
        tipo: "p",
        text: "Germania",
    });
    elements.push({
        tipo: "p",
        text: "Francia",
    });
    elements.push({
        tipo: "p",
        text: "Lituania",
    });
    elements.push({
        tipo: "p",
        text: "Brasiu",
    });
}
//Queste semplici istruzioni ho preferito esportarle in funzioni per avere un codice più ordinato e leggibile.
//Questa separazione mi consente di capire l'intento del programmatore leggendo il nome della funzione, e non andando a vederne l'implementazione.
//Questa metodologia permette, tra l'altro di avere del codice capibile senza l'utilizzo dei commenti, poichè è il nome della funzione che deve spiegare cosa si va a fare.
function getPadre() { return document.getElementById("container"); }
function getLastId() { return `id-${idProgressivo--}`; }
function getNewId() { return `id-${++idProgressivo}`; }

const elements = [];
let idProgressivo = 0;

this.popolateArray();
