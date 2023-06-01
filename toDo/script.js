const cuadroContiene = document.querySelector(".contiene");
let cont = 0;
let cantidad = 1;

function nuevo(){
    cont++;
    let caja = document.createElement("div");
    let campoTexto = document.createElement("input");
    
    caja.className = "caja";
    campoTexto.type = "text";
    campoTexto.className = "texto";
    campoTexto.placeholder = "Digite su tarea";
    cuadroContiene.appendChild(caja);
    caja.appendChild(campoTexto);

    campoTexto.addEventListener("keypress", function(e){
        if(e.key === "Enter" ){
            let mensaje = document.getElementsByClassName("texto")[0].value;
            caja.removeChild(campoTexto);
            cuadroContiene.removeChild(caja);
            obtener(mensaje);
        }
    })
}

function obtener(mensaje){
    cont = 0;
    let caja = document.createElement("div");
    let nuevoCheck = document.createElement("input");
    let etiqueta = document.createElement("label");
    caja.className = "caja";
    nuevoCheck.type = "checkbox";
    nuevoCheck.className= "checkbox";
    etiqueta.textContent = mensaje;
    cuadroContiene.appendChild(caja);
    caja.appendChild(nuevoCheck);
    caja.appendChild(etiqueta);
    cantidad++;
}

function init(){
    document.querySelector('.agregar').addEventListener('click', function(event){
        if(cont === 0){
            if(cantidad <= 11){
            nuevo();
            }else{
                alert("Ya hay muchas tareas por realizar");
            }
        }
    })
}

init();