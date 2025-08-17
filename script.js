const buttonShowWords = document.querySelector("#botao-palavrachave");

buttonShowWords.addEventListener("click", mostraPalavrasChave);

function mostraPalavrasChave() {
  const text = document.querySelector("#entrada-de-texto").value;

  const fieldResult = document.querySelector("#resultado-palavrachave");

  const keyWords = processaTexto(texto);

  fieldResult.textContent = keyWords.join(", ");
}

function processaTexto(texto) {
  let words = text.split(/\P{L}+/u);

  return words;G
}