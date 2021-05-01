// Esperar que el DOM este listo
$(document).ready(function () {
    /*let $parrafo = $("p").last(); 

    // CSS
    $parrafo.css("color", "goldenrod");

    // Atributo data
    $parrafo.data("color", "amarillo");

    // Append
    let $enlace = $('<a href="http://www.wmedia.es" target="_blank">wmedia.es</a>');
    $parrafo.append($enlace);*/
    // Method chaining
    let $enlace = $('<a href="http://www.wmedia.es" target="_blank">wmedia.es</a>');
    $("p").last().css("color", "goldenrod").data("color", "amarillo").append($enlace);
})