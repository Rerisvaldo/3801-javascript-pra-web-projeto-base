const mensagemListavazia = document.getElementById("menssagem-lista-vazia");

export function verificarListaVazia(lista) {
    console.log(lista.childElementCount);
    if (lista.childElementCount === 2) {
        mensagemListavazia.style.display = "block";
    } else {
        mensagemListavazia.style.display = "none";
    }
}   