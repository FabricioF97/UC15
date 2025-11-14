const texto = document.getElementById("texto");
const objetivos = document.getElementById("objetivos");

texto.addEventListener("click", function() {
    if (texto.style.color === "rgb(43, 42, 42)" || texto.style.color === "") {
        texto.style.color = "blue";
    } else {
        texto.style.color = "rgb(43, 42, 42)";
    }
});

objetivos.addEventListener("click", function() {
    if (objetivos.style.color === "rgb(43, 42, 42)" || objetivos.style.color === "") {
        objetivos.style.color = "blue";
    } else {
        objetivos.style.color = "rgb(43, 42, 42)";
    }
});
habilidades.addEventListener("click", function() {
    if (habilidades.style.color === "rgb(43, 42, 42)" || habilidades.style.color === "") {
        habilidades.style.color = "blue";
    } else {
        habilidades.style.color = "rgb(43, 42, 42)";
    }
})
    estudando.addEventListener("click", function() {
    if (estudando.style.color === "rgb(43, 42, 42)" || estudando.style.color === "") {
        estudando.style.color = "blue";
    } else {
        estudando.style.color = "rgb(43, 42, 42)";
    }
})
const img = document.getElementById('foto');

img.tabIndex= 0 ;


img.addEventListener('mouseenter', () =>img.classList.add('is-expanded'))
img.addEventListener('mouseleave', () =>img.classList.remove('is-expanded'))
img.addEventListener('click', () =>{img.classList.toggle('is-expanded')}) 
img.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
        
        img.classList.toggle('is-expanded');
    }
   
    e.preventDefault();
});