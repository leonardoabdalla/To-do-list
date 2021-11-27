const botao = document.querySelector('#criar-tarefa');
const ol = document.querySelector('#lista-tarefas');
const lista2 = document.getElementsByTagName('li');
const lista1 = document.getElementsByTagName('ol');
const corMuda = 'rgb(128, 128, 128)';
const listaOrdenada = document.querySelector('#lista-tarefas');
const a = document.querySelector('#a');
let listage;
let liAlvo;
const apagaTudo = document.querySelector('#apaga-tudo');
const completed = document.querySelector('.completed');
const apgFinal = document.querySelector('#remover-finalizados');

// adiciona tarefa
function salvaTexto() { 
  const digitado = document.querySelector('#texto-tarefa').value;
  const addLi = document.createElement('li');
  addLi.innerText = digitado;
  ol.appendChild(addLi);
  addLi.classList = 'li';
  document.querySelector('#texto-tarefa').value = '';
}

botao.addEventListener('click', salvaTexto);

// muda a cor da tarefa para cinza
function trocaCor(event) {
  const clickCor = event.target;
  corBranco();
  clickCor.style.backgroundColor = corMuda;
  listage = event.target;
}
ol.addEventListener('click', trocaCor);

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
// Tarefa concluida adiciona risco
function tarefaConcluida(event) {
  const clickCor = event.target;
  if (clickCor.classList != 'completed') {
    clickCor.classList = 'completed';
    liAlvo = event.target;
  } else {
    clickCor.classList.remove('completed');
    liAlvo = event.target;
  }
}
ol.addEventListener('dblclick', tarefaConcluida);

function removeFinalizados() {
  const delFin = document.querySelectorAll('.completed');
  for (let i = 0; i < delFin.length; i += 1) {
    delFin[i].remove();
  }
}
apgFinal.addEventListener('click', removeFinalizados);
// https://qastack.com.br/programming/4777077/removing-elements-by-class-name
// https://tableless.com.br/manipulando-o-uso-de-classes-com-classlist-api/

// As funções trocaCor e corBranco copiei prte do código de um site na internet, foi onde encontrei uma ideia que entendi.
