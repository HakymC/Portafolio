let indicador = 0;
let ganador = false;
const a = document.querySelector('.opcion-00');
const b = document.querySelector('.opcion-01');
const c = document.querySelector('.opcion-02');
const d = document.querySelector('.opcion-10');
const e = document.querySelector('.opcion-11');
const f = document.querySelector('.opcion-12');
const g = document.querySelector('.opcion-20');
const h = document.querySelector('.opcion-21');
const i = document.querySelector('.opcion-22');
const rec = document.querySelector('.recargar');
const contenedor = document.querySelector(".contenedor"); 


function opciones(jugador){
    if( jugador.textContent != 0 ){
        
    }else{
        if( indicador === 0 ){
            jugador.textContent = "O";
            indicador = 1;
        }else{
            jugador.textContent = "X";
            indicador = 0;
        }
    }
    ganar();
} 

function ganar(){

    if(a.textContent == 'O' & b.textContent == 'O' & c.textContent == 'O'){
        ganador = true;
        aviso('O');
    }

    if(d.textContent == 'O' & e.textContent == 'O' & f.textContent == 'O'){
        aviso('O');
    }

    if(g.textContent == 'O' & h.textContent == 'O' & i.textContent == 'O'){
        ganador = true;
        aviso('O');
    }

    if(a.textContent == 'O' & d.textContent == 'O' & g.textContent == 'O'){
        ganador = true;
        aviso('O');
    }

    if(b.textContent == 'O' & e.textContent == 'O' & h.textContent == 'O'){
        ganador = true;
        aviso('O');
    }

    if(c.textContent == 'O' & f.textContent == 'O' & i.textContent == 'O'){
        ganador = true;
        aviso('O');
    }

    if(a.textContent == 'O' & e.textContent == 'O' & i.textContent == 'O'){
        ganador = true;
        aviso('O');
    }

    if(c.textContent == 'O' & e.textContent == 'O' & g.textContent == 'O'){
        ganador = true;
        aviso('O');
    }

    if(a.textContent == 'X' & b.textContent == 'X' & c.textContent == 'X'){
        ganador = true;
        aviso('X');
    }

    if(d.textContent == 'X' & e.textContent == 'X' & f.textContent == 'X'){
        ganador = true;
        aviso('X');
    }

    if(g.textContent == 'X' & h.textContent == 'X' & i.textContent == 'X'){
        ganador = true;
        aviso('X');
    }

    if(a.textContent == 'X' & d.textContent == 'X' & g.textContent == 'X'){
        ganador = true;
        aviso('X');
    }

    if(b.textContent == 'X' & e.textContent == 'X' & h.textContent == 'X'){
        ganador = true;
        aviso('X');
    }

    if(c.textContent == 'X' & f.textContent == 'X' & i.textContent == 'X'){
        ganador = true;
        aviso('X');
    }

    if(a.textContent == 'X' & e.textContent == 'X' & i.textContent == 'X'){
        ganador = true;
        aviso('X');
    }

    if(c.textContent == 'X' & e.textContent == 'X' & g.textContent == 'X'){
        ganador = true;
        aviso('X');
    }

    if(a.textContent != 0 & b.textContent != 0 & c.textContent != 0 &
        d.textContent != 0 & e.textContent != 0 & f.textContent != 0 &
        g.textContent != 0 & h.textContent != 0 & i.textContent != 0 & 
        ganador == false){
            aviso('E');
    }
}

function aviso(letra){
    for(let i = 0 ; i < 3 ; i++){
        let fila = document.querySelector(".fila");
        contenedor.removeChild(fila);
    }
    contenedor.style.backgroundColor = 'white';
    contenedor.style.display = 'flex';
    contenedor.style.justifyContent = 'center';
    contenedor.style.alignItems = 'center';
    contenedor.style.fontSize = '60px';
    contenedor.style.color = 'black';
    if(letra == 'E'){
        contenedor.textContent = "Es un empate";
    }else{
        contenedor.textContent = "El ganador es "+ letra;
    }
}

function init(){
    a.addEventListener('click', function(event){
        opciones(a);
    })

    b.addEventListener('click', function(event){
        opciones(b);
    })

    c.addEventListener('click', function(event){
        opciones(c);
    })

    d.addEventListener('click', function(event){
        opciones(d);
    })

    e.addEventListener('click', function(event){
        opciones(e);
    })

    f.addEventListener('click', function(event){
        opciones(f);
    })

    g.addEventListener('click', function(event){
        opciones(g);
    })

    h.addEventListener('click', function(event){
        opciones(h);
    })

    i.addEventListener('click', function(event){
        opciones(i);
    })

    rec.addEventListener('click',() =>{
        window.location.reload();
    })

}

init();
