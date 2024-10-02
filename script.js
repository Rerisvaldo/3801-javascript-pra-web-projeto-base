const item = document.getElementById("input-item");
const BotaSalvarItem = document.getElementById("adicionar-item");

BotaSalvarItem.addEventListener("click", adicionarItem);

function adicionarItem(evento) {
    evento.preventDefault()
    const itemDaLista = document.createElement("li");
    const containerItemLista = document.createElement("div");
    containerItemLista.classList.add("item-lista-container");

    const containerNomeDoitem = document.createElement("div");
    const nomeDoItem = document.createElement("p");
    nomeDoItem.innerHTML = item.value;
    containerNomeDoitem.appendChild(nomeDoItem);

    const containerBotao = document.createElement("div");
    const botaoRemover = document.createElement("button");
    botaoRemover.classList.add("botao-aca");

    const imagemRemver = documento.createElement("img");
    imagemRemver.src = "ima/delet.svg";
    imagemRemver.alt = "Remover"

    botaoRemover.appendChild("imagemRemver");
    containerBotao.appendChild("botaoRemover");

    itemDaLista.appendChild("containerItemLista");
}