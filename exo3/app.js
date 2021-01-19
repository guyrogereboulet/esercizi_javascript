// 1 - scrivere un programma che sfruttando esclusivamente un ciclo infinito, 
//   l’operatore modulo, due costrutti if, un break ed un continue, 
//   stampi solo i primi cinque numeri pari.

// 2 - scrivere un programma che stampi una tavola pitagorica di 10 unità

// 3 - Creare una classe con un metodo main() che selezioni i primi 10 numeri divisibili
//   per 3, e li stampi dopo averli concatenati con una stringa in modo tale che l’output
//   del programma sia: es.
//   Numero multiplo di 3 = 3
//   Numero multiplo di 3 = 6



// 1 - scrivere un programma che sfruttando esclusivamente un ciclo infinito, 
//   l’operatore modulo, due costrutti if, un break ed un continue, 
//   stampi solo i primi cinque numeri pari.

let i = 0;
while (true) {

    i++;
    if(i > 10) {
        break;
    }

    if (i % 2 != 0) {
        continue;
    }
        console.log(i);
    
}


// 2 - scrivere un programma che stampi una tavola pitagorica di 10 unità

// Creo una tabella nel DOM
document.write("<table border=1; cellpadding = 20>");

          
          for (let k=1; k<=10; k++) {
            //Creo 10 righe
            document.write("<tr>")

                //Per ogni riga creo 10 celle
                for (let j=1; j<=10; j++) {
                document.write("<td>");
                document.write(k*j);
                document.write("</td>");
                }

            document.write("</tr>");
          }


document.write('</table>');


// let a;
// let b;

// for(a=1; a<=10; a++) {
//     console.log(`Stampo le righe ${a}`);
//     for (let b = 0; b <= 10; b++) {
//         console.table(a*b);
        
//     }

// }



// 3 - Creare una classe con un metodo main() che selezioni i primi 10 numeri divisibili
//   per 3, e li stampi dopo averli concatenati con una stringa in modo tale che l’output
//   del programma sia: es.
//   Numero multiplo di 3 = 3
//   Numero multiplo di 3 = 6

class Multiplo{
    main() {
        for (let index = 1; index <= 30; index++) {
             if(index%3!=0) {
                 continue;
             }

             else{
                 console.log(`Un multiplo di 3 è ${index}`);
             }
            
        }
    }
}


let multiplo = new Multiplo();

result = multiplo.main();

console.log(multiplo);



