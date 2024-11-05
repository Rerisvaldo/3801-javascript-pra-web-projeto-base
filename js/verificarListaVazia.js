const mensagemListavazia = document.getElementById("menssagem-lista-vazia");

export function verificarListaVazia(lista) {
    if (lista.childElementCount === 0) {
        mensagemListavazia.style.display = "block";
    } else {
        mensagemListavazia.style.display = "none";
    }
}   