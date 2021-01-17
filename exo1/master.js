// Esercizio 1 

// (a) Scrivere un documento HTML contenente una form contenente i seguenti
// campi:
// • cognome (casella di testo editabile lunga 40 caratteri)
// • nome (casella di testo editabile lunga 30 caratteri)
// • matricola (casella di testo editabile lunga 12 caratteri)
// • regione di residenza (da scegliere da un menu che riporta le 20 regioni italiane)
// • email (casella di testo editabile lunga 30 caratteri)
// • telefono (casella di testo editabile lunga 15 caratteri)
// • richieste particolari (area di testo editabile di 12 righe per 60 colonne)
// • bottone di invio
// • bottone di reset
// (b) Aggiungere al documento HTML una funzione JavaScript che esegue i seguenti controlli:
// • verifica che il cognome non sia vuoto;
// • verifica che il nome non sia vuoto;
// • verifica che la matricola sia un numero;
// • verifica che sia stata selezionata una regione;
// • verifica che o l’email o il telefono siano non vuoti.
// Inoltre, fare in modo che, nel documento HTML, tale funzione JavaScript venga eseguita
// quando l’utente invia la form


// Variabili del form

   var form = document.getElementById('form');
   var nome = document.getElementById('nome');
   var cognome = document.getElementById('cognome');
   var matricola = document.getElementById('matricola');
   var password = document.getElementById('password');
   var regione= document.getElementById('regione');
   var telefono = document.getElementById('telefono');
   var richieste = document.getElementById('richieste');
   var email = document.getElementById('email');
   var invia = document.getElementById('invia');
   

   form.addEventListener('submit', (e) => {

    e.preventDefault();
       

    console.log("ok");


        //Validazione nome
         console.log(nome.value);
        if ((nome.value == "") || (nome.value == "undefined")) {
            alert("Devi inserire un nome");
        }


        //Validazione cognome
        console.log(cognome.value);
        if ((cognome.value == "") || (cognome.value == "undefined")) {
            alert("Devi inserire un cognome");
        }

        //validazione matricola
        console.log(matricola.value);
        if(typeof parseInt(matricola.value) !== "number" || matricola.value == "" || matricola.value == "undefined" ){
            alert("Devi inserire un numero valido");
        }

        //Selezione regione 
        console.log(regione.value);
        if ((regione.value == "") || (regione.value == "undefined")) {
            alert("Devi inserire una regione");
        }

        //Validazione email o telefono
        console.log(email.value);
        console.log(telefono.value);
        if ((email.value == "") && (telefono.value == "")) {
            alert("Devi inserire un email o un telefono");
        }




    });



















//Utility & Validator fucntion 
           function isEmpty(value){
                if(value!==''){
                    return false;
                }
                return true;
           }

           //Check if is a string
           function isString(value){
                if(typeof(value) === "string"){
                   return true; 
                }
                return false;
           }

           //Check if is a number - maybe you can use Number obj
           function isNumber(value){
                if(typeof(value) === "number"){
                   return true; 
                }
                return false;
           }

           //Check if is a boolean 
           function isBoolean(value){
                if(typeof(value) === "boolean"){
                   return true; 
                }
                return false;
           }
   



































































// Esercizio 2 

// (a) Scrivere un documento HTML contenente una form contenente i seguenti
// campi:
// • cognome e nome (casella di testo editabile lunga 50 caratteri)
// • sesso (selezionabile tramite due bottoni radio).
// • ateneo (da scegliere da un menu che riporta le 3 universit romane)
// • CAP (casella di testo editabile lunga 5 caratteri)
// • studente lavoratore (selezionabile tramite checkbox)
// • descrizione del lavoro svolto (casella di testo editabile lunga 80 caratteri)
// • bottone di invio
// • bottone di reset
// (b) Aggiungere al documento HTML una funzione JavaScript che esegue i seguenti controlli:
// • mentre l’utente edita i campi della form:
// – subito dopo che l’utente ha editato il campo CAP, deve verificare che tale campo
// sia un numero di 5 cifre;
// – subito dopo che l’utente ha editato il campo nome e cognome, deve verificare che
// tale campo non sia un numero;
// • al momento dell’invio del messaggio:
// – verifica che il cognome e nome non sia vuoto;
// – verifica che il sesso sia stato selezionato;
// – verifica che sia stato selezionato un ateneo;
// – se l’utente ha dichiarato di essere uno studente lavoratore, la descrizione del lavoro
// svolto non pu`o essere vuota.