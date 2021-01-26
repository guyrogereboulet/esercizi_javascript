function getElementsFromUrl(url) {
    fetch(url)
        .then(response => response.json())
        .then(value => { });
}