let butao = document.querySelector('#criar-tarefa');

function salvaTexto() {  
  let ul = document.querySelector('#lista-tarefas').innerText;
  let digitado = document.querySelector('#texto-tarefa').value;
  ul = ul + "<li>" + digitado + "</li>";
  document.getElementById("lista-tarefas").innerHTML = ul;
}

butao.addEventListener('click', salvaTexto);
