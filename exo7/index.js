let paesi = [
  {
    tipo: "p",
    text: "Italia",
  },
  {
    tipo: "p",
    text: "Germania",
  },
  {
    tipo: "p",
    text: "Francia",
  },
  {
    tipo: "p",
    text: "Lituania",
  },
];

function genera() {
  let randomText = paesi[Math.floor(Math.random() * paesi.length)];
  let paragrafo = document.createElement(randomText.tipo);
  let node = document.createTextNode(randomText.text);
  paragrafo.appendChild(node);

  let container = document.getElementById("container");
  container.appendChild(paragrafo);
}

function distruggi() {

  //Elimino l'ultimo elemento figlio del genitore
  container.removeChild(container.lastElementChild);
  
}
