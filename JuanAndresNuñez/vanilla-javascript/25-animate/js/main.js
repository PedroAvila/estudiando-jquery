// Esperar que el DOM este listo
$(document).ready(function () {
  $(".lateral").animate({
    'flex-basis': '20%',
    'padding': '10px',
  }, 3000, function(){
    $("main").animate({
      "width": "1100px",
    }, 4000);
  });
});

