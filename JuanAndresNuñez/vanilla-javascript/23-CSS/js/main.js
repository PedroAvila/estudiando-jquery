// Esperar que el DOM este listo
$(document).ready(function () {
  let $enlaces = $("a");
    // Getter
    console.log($enlaces.css("font-size"));
    
    // Getter múltiple
    console.log($(".lateral").css([
      "font-size",
      "color",
      "margin"
    ]));

    // Setter
    $("p").css("color", "goldenrod");

    // Setter múltiple
    $enlaces.css({
      "color": "pink",
      "font-size": "40px",
      "margin": "100px"
    })
});

