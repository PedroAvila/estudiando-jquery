// Esperar que el DOM este listo
$(document).ready(function () {
  var $main = $("main");
  $main.addClass('animated bounceIn');

  let timeout = setTimeout(function(){
    $main.addClass('rotateOut');
    clearTimeout(timeout);
  }, 3000);
});

