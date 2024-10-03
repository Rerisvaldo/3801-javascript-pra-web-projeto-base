const item = document.getElementById("input-item");
const BotaoSalvarItem = document.getElementById("adicionar-item");
const listaDeCompras = document.getElementById("lista-de-compras");
let contador = 0;
BotaoSalvarItem.addEventListener("click", adicionarItem);

function adicionarItem(evento) {
    evento.preventDefault()

    const itemDaLista = document.createElement("li");
    const containerItemLista = document.createElement("div");
    containerItemLista.classList.add("lista-item-container");

    const containerNomeDoitem = document.createElement("div");

    const containerChackbox = document.createElement("div");
    containerChackbox.classList.add("chackbox-container");

    const chackboxInput = document.createElement("input");
    chackboxInput.type = "checkbox";
    chackboxInput.classList.add("chackbox-input");
    chackboxInput.id = "chackbox-" + contador++;

    const checkboxLabel = document.createElement("label");
    checkboxLabel.setAttribute("for", chackboxInput.id);

    const checkboxCustomizado = document.createElement("div");
    checkboxCustomizado.classList.add("chackbox-costumizado");

    checkboxLabel.appendChild(chackboxInput);
    checkboxLabel.appendChild(checkboxCustomizado);

    containerChackbox.appendChild(checkboxLabel);
    containerNomeDoitem.appendChild(containerChackbox);


    const nomeDoItem = document.createElement("p");
    nomeDoItem.innerHTML = item.value;
    

    const containerBotoes = document.createElement("div");
    const botaoRemover = document.createElement("button");
    const botaoEditar = document.createElement("button")
    botaoRemover.classList.add("item-lista-button");
    botaoEditar.classList.add("item-lista-button");

    const imagemRemover = document.createElement("img");
    imagemRemover.src = "img/delete.svg";
    imagemRemover.alt = "Remover";
    
    const imagemEditar = document.createElement("img");
    imagemEditar.src = "img/edit.svg";
    imagemEditar.alt = "Editar";

    botaoRemover.appendChild(imagemRemover);    
    containerBotoes.appendChild(botaoRemover);

    botaoEditar.appendChild(imagemEditar)
    containerBotoes.appendChild(botaoEditar)     

    containerItemLista.appendChild(containerNomeDoitem);
    containerItemLista.appendChild(nomeDoItem);
    containerItemLista.appendChild(containerBotoes)
    itemDaLista.appendChild(containerItemLista);
    listaDeCompras.appendChild(itemDaLista);
    
}