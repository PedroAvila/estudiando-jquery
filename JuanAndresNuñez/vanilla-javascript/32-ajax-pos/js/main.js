// Esperar que el DOM este listo
$(document).ready(function () {
  // Cargamos el snippet de navegtación lateral
  $.get("social.html")
  .done(function(respuesta){
    $(".lateral").append($(respuesta));
  });
  // Libros de visitas
  $("form").on("submit", function(evt){
    evt.preventDefault();
    // Realizamos la petición
    $.ajax('http://dev.wmedia.es/do/jquery/ajax.php', {
      type: "POST",
      dataType: "json",
      data: {
        "nombre": $("#nombre").val(),
        "mensaje": $("#mensaje").val(),
      }
    }).then(function(respuesta){
      console.log(respuesta);
      $("form").children("ol").prepend($("
        <li>
          ${respuesta.nombre} - <small>${respuesta.fecha.weekday})</small></br>
          ${respuesta.mensaje} 
        </li>
      "))
    });
  });
});

