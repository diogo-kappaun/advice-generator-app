const botaoGerador = document.querySelector('#dice')
const idDoConselho = document.querySelector('#advice-id')
const descricaoDoConselho = document.querySelector
('#advice')

botaoGerador.addEventListener('click', () => {
  alterarElementos();
})

async function gerarUmConselhoAleatorio() {
  const resposta = await fetch("https://api.adviceslip.com/advice");
  return await resposta.json();
}

async function alterarElementos() {
  const conselho = await gerarUmConselhoAleatorio();
  idDoConselho.innerHTML = `${conselho.slip.id}`;
  descricaoDoConselho.innerHTML = `${conselho.slip.advice}`;
}

alterarElementos()