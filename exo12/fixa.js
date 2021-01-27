/*
    FUNZIONI/ISTRUZIONI CHE POTRESTE UTILIZZARE (N.B. PROBABILMENTE NON SONO TUTTE DA UTILIZZARE):

    for(INIZIALIZZAZIONE, CONDIZIONE, ISTRUZIONEFINALE) { ISTRUZIONE } -> Serve per eseguire un blocco di codice finchè la condizione di controllo è vera. Viene spesso utilizzato quando si sa quante volte (es. tante volte quanto è lungo l'array) va eseguito il ciclo.
        Inizializzazione→ istruzione eseguita solo all'inzio del ciclo, usata normalmente per definire le variabili di controllo di uscita dal ciclo.
        Condizione→ Condizione che verrà eseguita prima di ogni iterazione, se non vera il ciclo non verrà eseguito (questo implica che il ciclo potrebbe anche non partire la prima volta).
        IstruzioneFinale→ Istruzione che viene eseguita ogni volta alla fine del ciclo, normalmente viene eseguita un istruzione di aggiornamento della variabile di controllo.
        Istruzione→ Il blocco che vogliamo che venga eseguito ad ogni iterazione del ciclo.

    while(CONDIZIONE) { ISTRUZIONE }→ Serve per eseguire un blocco di codice finchè la condizione di controllo è vera. Viene spesso utilizzato quando si sa quante volte (es. tante volte quanto è lungo l'array) va eseguito il ciclo.
        Condizione→ Condizione che verrà eseguita prima di ogni iterazione, se non vera il ciclo non verrà eseguito (questo implica che il ciclo potrebbe anche non partire la prima volta).
        Istruzione→ Il blocco che vogliamo che venga eseguito ad ogni iterazione del ciclo.

    Arrya.push() -> Serve per inserire uno o più valori all'interno di un array.
        Input→ Riceve una serie di elementi che inserirà alla fine dell'array. 
        Output→ La lunghezza dell'array dopo l'inserimento dei dati.
        Esempio: [0,1].push(2,5,1)→ [0,1,2,5,1]

    Arrya.includes() -> Serve per controllare se l'array contiene l'elemento.
        Input→ Elemento da controllare se presente all'interno dell'array. 
        Output→ Un booleano che indica se l'elmento è presente all'interno della lista.
        Esempio: [0,1].includes(1)→ true
    
    Array[i] -> Accesso all'i-esimo valore dell'array.
        i-> Indice dell'array di cui vogliamo il valore. Essendo l'array 0-based, l'indice va da 0 a Array.length-1 e non da 1 ad Array.length come potrebbe venire naturale pensare.
*/


const myDB = [
    {
        id: 1,
        titolo: "Birra"
    },
    {
        id: 10,
        titolo: "Vino"
    },
    {
        id: 11,
        titolo: "Martini"
    },
    {
        id: 100,
        titolo: "Vodka"
    },
];

/*
Read→ 
Input→ ID da ricercare all'interno della struttura dati.
Output→ Restituire l'elemento contenente quell'id, o null se non esiste.
*/
function read(id) {
    let ret = null;

    for (let i = myDB.length; myDB.length < i; i++) {
        if (myDB[id].i === id) myDB[id] = ret;
    }

    return ret;
}

/*
 Insert→
    Input→ ID e TITOLO dei valori da inserire all'interno della struttura dati.
    Output(Facoltativo)→ Restituire true se l'inserimento è andato a buon fine.
*/
function insert(id, titolo) {    
    const lunghezzaPreOp = myDB.length;

    myDB.push(id,titolo);

    return myDB.length > titolo.length;
}