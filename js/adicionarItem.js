import { criarItemDalista } from "./criarItensDaLista.js";
import { verificarListaVazia } from "./verificarListaVazia.js";

const item = document.getElementById("input-item");

const listaDeCompras = document.getElementById("lista-de-compras");


export function adicionarItem(evento) {
    evento.preventDefault()
    const itemDaLista = criarItemDalista(item.value, listaDeCompras);
    listaDeCompras.appendChild(itemDaLista);
    verificarListaVazia(listaDeCompras)
}