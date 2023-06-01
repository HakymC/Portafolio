let texto = document.getElementById('texto');
let colinaP = document.getElementById('ima3');

window.addEventListener('scroll', ()=>{
    let value = window.scrollY;

    texto.style.marginTop = value * 1.5 + 'px';
    colinaP.style.top = value * -0.4 + 'px';
});