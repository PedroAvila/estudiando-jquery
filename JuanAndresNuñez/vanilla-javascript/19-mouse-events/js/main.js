
// Esperar que el DOM este listo
$(document).ready(function () {
    let $parrafos = $(".contenido").children("p");

    /*$parrafos.slideToggle(3000, function(){
        console.log("Finalizado!!!");
    });*/

    $(".lateral").children("img").on("mouseleave", function() {
        mostrarEnSecuencia($parrafos, 500); 
    });

    // Atajo para mouseenter y mouseleave
    /* $(".lateral").children("img").hover(function(){
        console.log("Entro")
    }, function(){
        console.log("Salgo")
    }); */

    function mostrarEnSecuencia ($coleccion, tiempo) {
        tiempo = tiempo || 1000;
        $coleccion.each(function(indice, elemento){
            $(elemento).slideToggle(tiempo * (indice + 1));
        });
      }
      
})

