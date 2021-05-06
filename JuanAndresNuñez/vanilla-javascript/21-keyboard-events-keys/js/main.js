// Esperar que el DOM este listo
$(document).ready(function () {
      var $input = $("#claim"),
      $h1 = $(".contenido").children("h1");
      
      $input.keyup(function(event){
          let codigo = event.which;
          if (codigo === 13) {
            $h1.text($input.val());
          }
      });
});

