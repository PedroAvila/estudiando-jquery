
$(document).ready(function () {
    let $enlace = $('<a href="#">Conocer más gatos negros!</a>');
    //$(".contenido").find("p").append($enlace);
    $(".contenido").find("p").last().remove();

});