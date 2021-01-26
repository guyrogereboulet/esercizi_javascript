function creaArrayPopolato(lunghezza) {
    const array = [];

    for (let i = 0; i < lunghezza; i++) {
        array.push(Math.round(Math.random() * 1000));
    }

    return array;
}

function spolpaArray(array, min, max) {
    const ret = [];

    for (let i = 0; i < array.length; i++) {
        if (array[i] > min && array[i] < max) ret.push(array[i]);
    }

    return ret;
}