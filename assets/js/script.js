let listaNombresGastos = [];
let listaValoresGastos = [];
let listaDescripcionGasto = [];
let indiceModificacion = null;


function clickBoton() {
    let nombreGasto = document.getElementById(`nombreGasto`).value; 
    let valorGasto = document.getElementById(`valorGasto`).value; 
    let descripcionGasto =document.getElementById(`descripcionGasto`).value
    

    if (nombreGasto === "" || valorGasto === "" || descripcionGasto ==="") {
        alert("Por favor, completa todos los campos antes de agregar el gasto.");
        return; 
    }

    let valorGastoNum = Number(valorGasto);

    if (valorGastoNum >= 150) {
        alert(`"CUIDADO" Tu gasto puede exceder tu límite de: USD ${valorGastoNum}`);
    }

    listaNombresGastos.push(nombreGasto);
    listaValoresGastos.push(valorGasto);
    listaDescripcionGasto.push(descripcionGasto);

    actulizarListaGastos();
    limpiarCampos();
} 

function actulizarListaGastos(){
    const listaElementos = document.getElementById (`listaDeGastos`);
    const totalElementos = document.getElementById(`totalGastos`);
    let htmlLista = ``;
    let totalGastos =0;
    listaNombresGastos.forEach((elemento, posicion) => {
        const valorGasto = Number(listaValoresGastos[posicion]);
        const descripcionGasto = (listaDescripcionGasto[posicion]);

        htmlLista += `<li> Gasto: ${elemento} - USD ${valorGasto} <br>Descripción: ${descripcionGasto} </li>
        <button onclick="eliminarGasto(${posicion});">Eliminar Gasto</button>
        <button onclick="modificarGasto(${posicion});">Modificar Gasto</button>`;   

        totalGastos += Number(valorGasto);
    });

    listaElementos.innerHTML = htmlLista
    totalElementos.innerHTML = totalGastos.toFixed(2);
}
function modificarGasto(posicion) {
    document.getElementById('nombreGasto').value = listaNombresGastos[posicion];
    document.getElementById('valorGasto').value = listaValoresGastos[posicion];
    document.getElementById('descripcionGasto').value = listaDescripcionGasto[posicion];
    indiceModificacion = posicion;

    
    document.getElementById("agregarGasto").style.display = "none";
    document.getElementById("actualizarGasto").style.display = "inline";
}

function limpiar(){
    document.getElementById(`nombreGasto`).value = ``;
    document.getElementById(`valorGasto`).value = ``;
    document.getElementById('descripcionGasto').value = '';

}


function eliminarGasto(posicion){
    listaNombresGastos.splice(posicion, 1);
    listaValoresGastos.splice(posicion, 1);
    listaDescripcionGasto.splice(posicion, 1);
    actulizarListaGastos();
}

function actualizarGasto() { 
    if (indiceModificacion !== null) {
        listaNombresGastos[indiceModificacion] = document.getElementById("nombreGasto").value;
        listaValoresGastos[indiceModificacion] = document.getElementById("valorGasto").value;
        listaDescripcionGasto[indiceModificacion] = document.getElementById("descripcionGasto").value;

        actulizarListaGastos();
        limpiar();
    }
}