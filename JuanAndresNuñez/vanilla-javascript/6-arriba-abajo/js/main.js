// Esperar que el DOM esté listo
// document.addEventListener("DOMContentLoaded", function(){
//     console.log("Estoy listo");
// });

// $(document).ready(function(){
//     console.log("YO TAMBIEN ESTOY LISTO!");
// });

// Esperar que el DOM esté listo
$(document).ready(function () {
    // Descendientes directos
    $("aside > img").fadeOut("slow");
    
    //Búsqueda de elementos
    $("a span").css("color", "red");

    //Selectores multiples
    //$("a, span, p").slideToggle();

    //Pseudo clases
    $("p:odd").css({
        "font-weight": "bold",
        "color": "goldenrod"
    })
    
});
