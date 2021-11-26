let botao = document.querySelector('#criar-tarefa');
let ol = document.querySelector('#lista-tarefas');
let li = document.querySelectorAll('.li');
const lista2 = document.getElementsByTagName('li');
const corMuda = 'rgb(128, 128, 128)';
let listage;

function salvaTexto() { 
  const digitado = document.querySelector('#texto-tarefa').value;
  const addLi = document.createElement('li');
  addLi.innerText = digitado;
  ol.appendChild(addLi);
  addLi.classList = 'li';
  document.querySelector('#texto-tarefa').value = '';
}

botao.addEventListener('click', salvaTexto);

function trocaCor(event) {
  const clickCor = event.target;
  if (clickCor.tagName == 'LI') {
    corBranco();
    clickCor.style.backgroundColor = corMuda;
    listage = event.target;
  }
}
document.addEventListener('click', trocaCor);

function corBranco() {
  for (let i = 0; i < lista2.length; i += 1) {
    lista2[i].style.backgroundColor = 'white';
  }
}

//As funções trocaCor e corBranco copiei prte do código de um site na internet, foi onde encontrei uma ideia que entendi.

