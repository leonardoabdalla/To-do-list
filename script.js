const botao = document.querySelector('#criar-tarefa');
const ol = document.querySelector('#lista-tarefas');
const lista2 = document.getElementsByTagName('li');
const corMuda = 'rgb(128, 128, 128)';
const listaOrdenada = document.querySelector('#lista-tarefas');

let listage;
const apagaTudo = document.querySelector('#apaga-tudo');

// adiciona tarefa
function salvaTexto() { 
  const digitado = document.querySelector('#texto-tarefa').value;
  const addLi = document.createElement('li');
  addLi.innerText = digitado;
  ol.appendChild(addLi);
  addLi.classList = 'li';
  document.querySelector('#texto-tarefa').value = '';
  console.log(addLi);
}

botao.addEventListener('click', salvaTexto);

// muda a cor da tarefa para cinza
function trocaCor(event) {
  const clickCor = event.target;
  if (clickCor.tagName === 'LI') {
    corBranco();
    clickCor.style.backgroundColor = corMuda;
    listage = event.target;
  }
}
document.addEventListener('click', trocaCor);

// altera a cor para branco quando outra selecionada

function corBranco() {
  for (let i = 0; i < lista2.length; i += 1) {
    lista2[i].style.backgroundColor = 'white';
  }
}

// Apaga todas tarefas
function apagador() {
  listaOrdenada.innerHTML = '';
}

apagaTudo.addEventListener('click', apagador);
// As funções trocaCor e corBranco copiei prte do código de um site na internet, foi onde encontrei uma ideia que entendi.
