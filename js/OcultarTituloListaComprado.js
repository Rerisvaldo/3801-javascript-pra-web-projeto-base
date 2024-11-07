const tituloListaComprado = document.getElementById("container-titulo-lista-comprado")

export function ocultarTituloListaComprado(lista) {
    console.log(lista.childElementCount);
    if (lista.childElementCount > 0) {
        tituloListaComprado.style.display = "block";
    } else {
        tituloListaComprado.style.display = "none";
    }
}