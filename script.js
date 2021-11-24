let butao = document.querySelector('#criar-tarefa');
function salvaTexto() {
    let digitado = document.querySelector('#texto-tarefa');
    digitado.innerHTML='leo';
    console.log(digitado);
}
butao.addEventListener('click', salvaTexto);
