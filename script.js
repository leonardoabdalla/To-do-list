let botao = document.querySelector('#criar-tarefa');

function salvaTexto() {  
  let digitado = document.querySelector('#texto-tarefa').value;
  let ol = document.querySelector('#lista-tarefas');
  let addLi = document.createElement('li');
  addLi.innerText = digitado;
  ol.appendChild(addLi);
}

botao.addEventListener('click', salvaTexto);
