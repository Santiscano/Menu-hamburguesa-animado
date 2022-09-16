// escuchara el contenedor bar menu y le aplicara una funcion al evento click
document.querySelector(".bars__menu").addEventListener("click", animateBars);

// seleccion de nodos
var line1__bars = document.querySelector(".line1__bars-menu");
var line2__bars = document.querySelector(".line2__bars-menu");
var line3__bars = document.querySelector(".line3__bars-menu");

function animateBars(){
    // aplica a los nodos seleccionados el estilo de css
    line1__bars.classList.toggle("activeline1__bars-menu");
    line2__bars.classList.toggle("activeline2__bars-menu");
    line3__bars.classList.toggle("activeline3__bars-menu");
}