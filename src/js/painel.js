const imagensPainel = document.querySelectorAll(".imagem-painel");
const btnAvancar = document.getElementById("btn-avancar");
const btnVoltar = document.getElementById("btn-voltar");
let imagemAtual = 0;

function esconderImagens() {
  imagensPainel.forEach((imagem) => imagem.classList.remove("mostrar"));
}

function mostrarImagens() {
  imagensPainel[imagemAtual].classList.add("mostrar");
}

/*
    quando clicar na seta para avançar temos que esconder todas as imagens e mostrar a próxima
*/

btnAvancar.addEventListener("click", () => {
  const totalImagens = imagensPainel.length - 1;
  if (imagemAtual === totalImagens) {
    return;
  }

  imagemAtual++;
  esconderImagens();
  mostrarImagens();
});

btnVoltar.addEventListener("click", () => {
  if (imagemAtual === 0) {
    return;
  }
  imagemAtual--;

  esconderImagens();
  mostrarImagens();
});
console.log(imagens);
console.log(btnAvancar);
console.log(btnVoltar);
