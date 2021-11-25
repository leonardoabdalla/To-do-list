let botao = document.querySelector('#criar-tarefa');

function salvaTexto() { 
  let digitado = document.querySelector('#texto-tarefa').value;
  let ol = document.querySelector('#lista-tarefas');
  let addLi = document.createElement('li');
  addLi.innerText = digitado;
  ol.appendChild(addLi);
  document.querySelector("#texto-tarefa").value="";
  //document.getElementById('texto-tarefa').remove();
  //digitado.remove();
}

botao.addEventListener('click', salvaTexto);

