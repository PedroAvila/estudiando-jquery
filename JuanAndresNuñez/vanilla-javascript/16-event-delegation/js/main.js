// Esperar que el DOM este listo
$(document).ready(function () {
    // Event listener directo
    /*$("a").on("click", function(evt){
        evt.preventDefault();
        console.log("A clicked!");
    });*/

    // Event listener delegado
    $("main").on("click", "a", function(evt){
        evt.preventDefault();
        console.log("A clicked!");
    });
    
    let $enlace = $('<a href="http://www.wmedia.es" target="_blank">wmedia.es</a>');
    $("p").last().css("color", "goldenrod").data("color", "amarillo").append($enlace);
})