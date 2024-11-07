import { adionarData } from "./adionarData.js";
import { ocultarTituloListaComprado } from "./OcultarTituloListaComprado.js";
const listaComprado = document.getElementById("lista-comprado");
let contador = 0;


export function criarItemDalista(item, listaDeCompras) {
    const itemDaLista = document.createElement("li");
    const containerItemLista = document.createElement("div");
    containerItemLista.classList.add("lista-item-container");

    const containerNomeDoitem = document.createElement("div");
    containerNomeDoitem.classList.add("lista-itens");

    const containerChackbox = document.createElement("div");
    containerChackbox.classList.add("chackbox-container");

    const chackboxInput = document.createElement("input");
    chackboxInput.type = "checkbox";
    chackboxInput.classList.add("chackbox-input");
    chackboxInput.id = "chackbox-" + contador++;

    const checkboxLabel = document.createElement("label");
    checkboxLabel.setAttribute("for", chackboxInput.id);

    checkboxLabel.addEventListener("click", function (evento) {
        const checkboxInput = evento.currentTarget.querySelector(".chackbox-input");
        const checkboxCustomizado = evento.currentTarget.querySelector(".chackbox-costumizado");
        const itemTitulo = evento.currentTarget.closest("li").querySelector("#item-titulo");

        if (checkboxInput.checked) {
            checkboxCustomizado.classList.add("chacked");
            itemTitulo.style.textDecoration = "line-through";
            listaComprado.appendChild(itemDaLista);
            ocultarTituloListaComprado(listaComprado);

        } else {
            checkboxCustomizado.classList.remove("chacked");
            itemTitulo.style.textDecoration = "none";
            listaDeCompras.appendChild(itemDaLista);
        }
    })


    const checkboxCustomizado = document.createElement("div");
    checkboxCustomizado.classList.add("chackbox-costumizado");

    checkboxLabel.appendChild(chackboxInput);
    checkboxLabel.appendChild(checkboxCustomizado);

    containerChackbox.appendChild(checkboxLabel);
    containerNomeDoitem.appendChild(containerChackbox);


    const nomeDoItem = document.createElement("p");
    nomeDoItem.innerHTML = item;
    nomeDoItem.id = "item-titulo";


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
    containerNomeDoitem.appendChild(nomeDoItem);
    containerItemLista.appendChild(containerBotoes)

    const itemData = document.createElement("p");
    adionarData(itemData);

    itemDaLista.appendChild(containerItemLista);
    itemDaLista.appendChild(itemData);
    return itemDaLista;
}