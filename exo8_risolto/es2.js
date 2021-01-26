function calcolaSequenzaDiFibonacci(max) {
    const fibonacci = [0, 1];
    for (let i = fibonacci.length; i < max; i++) {
        fibonacci.push(fibonacci[fibonacci.length - 1] + fibonacci[fibonacci.length - 2]);
    }
    return fibonacci;
}

function creaArray(lunghezza, alfabeto) {
    const array = [];

    for (let i = 0; i < lunghezza; i++) {
        array.push(
            {
                id: getId(),
                valore: alfabeto[Math.floor(Math.random() * alfabeto.length)]
            }
        );
    }

    return array;
}

function spolpaArray(array, fibonacci) {
    const ret = [];

    for (let i = 0; i < array.length; i++) {
        if (fibonacci.includes(array[i].id)) ret.push(array[i]);
    }

    return ret;
}


function getId() { return id++; }
let id = 0;