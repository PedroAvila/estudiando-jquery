// Esperar que el DOM este listo
$(document).ready(function () {
  // Petición simple con Ajax
  /* $.ajax("social.html", {
    success: function(respuesta){
      $(".lateral").append($(respuesta));
    }
  }); */

  // Método atajo: GET
  $.get("social.html", function(respuesta){
    $(".lateral").append($(respuesta));
  })

  // Cargar JSON desde el servidor
  $.getJSON("https://randomuser.me/api/?results=5000")
  .then(function(respuesta){
    //console.log(respuesta);
    // Insertar cada avatar del usuario fictício en el DOM
    respuesta.results.forEach(function(persona) {
      //console.log(persona.picture.thumbnail);
      $("<img>").attr("src", persona.picture.thumbnail)
      .appendTo(".contenido");
    });
  });

});

