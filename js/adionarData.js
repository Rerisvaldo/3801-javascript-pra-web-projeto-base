export function adionarData (itemData){
    itemData.innerHTML = ` ${new Date().toLocaleDateString("pt-BR", { weekday: "long" })}  
    (${new Date().toLocaleDateString()}) às ${new Date().toLocaleTimeString("pt-BR", { hour: "numeric", minute: "numeric" })}`;
    itemData.classList.add("texto-data");
}