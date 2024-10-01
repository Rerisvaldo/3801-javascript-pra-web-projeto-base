const item = document.getElementById('input-item');
const BotaSalvarItem = document.getElementById('adicionar-item');

BotaSalvarItem.addEventListener('click', adicionarItem);

function adicionarItem(evento){
    evento.preventDefault()
    console.log('teste')
}