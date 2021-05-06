// Esperar que el DOM este listo
$(document).ready(function () {
  let $enlaces = $("a");
    
  $(".lateral").children("img").on("click", function(){
    
    /* if ($enlaces.hasClass("dopodcast")) {
      // Si la clase está aplicada, eliminar
      $enlaces.removeClass("dopodcast");
    }else{
      // Si no está aplicada, aplicar
      $enlaces.addClass("dopodcast");
    } */

    $enlaces.toggleClass("dopodcast");

  });
});

