const tituloListaComprado = document.getElementById("container-titulo-lista-comprado") 

export function ocultarTituloListaComprado(lista){
    console.log(lista);
    if (lista.childElementCount === 0) {
        tituloListaComprado.style.display = "none";     
    } else {
        tituloListaComprado.style.display = "block";
    }
}