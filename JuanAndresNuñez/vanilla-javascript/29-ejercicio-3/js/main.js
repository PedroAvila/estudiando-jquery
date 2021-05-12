// Esperar que el DOM este listo
$(document).ready(function () {
  // Capturar hover
  $("a").hover(function(){
    // Hover In
    // Guardar el atributo title
    let titulo = $(this).attr("title"),
    fondo = $(this).data("fondo");
    // Guardamos el titulo en el atributo data y eliminamos el titulo original
    $(this).data("titulo", titulo).removeAttr("title");
    // Añadir nuestro propio tooltip
    $('<p class="tooltip"></p>')
      .text(titulo)
      .css("background-color", fondo)
      .appendTo("body")
      .fadeIn("slow");
  }, function(){
    // Hover Out
    // Reponer el titulo nativo
    $(this).attr("title", $(this).data("titulo"));
    // Eliminamos nuestro tooltip
    $(".tooltip").remove();
  }).mousemove(function(e){
    // Capturar la posicionde X e Y del ratón sobre el elemento 
    // que lanza nuestro tooltip
    let ratonX = e.pageX + 20,
    ratonY = e.pageY + 10;

    // Hacer que el tooltip se mueva junto con el puntero
    $(".tooltip").css({
      top: ratonY,
      left: ratonX
    })
  })
});

