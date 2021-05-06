// Esperar que el DOM este listo
$(document).ready(function () {
    // Selector
    /*let $enlaces = $('.lateral').find('a').filter(':odd');
    $enlaces.css("transform", "scale(2)");*/

    // Función - test
    var $enlaceSnapchat = $(".lateral").find("a").filter(function(indice, elemento){
        //console.log(indice, elemento);
        return $(elemento).find("span").text() === "Snapchat";
    });

    console.log($enlaceSnapchat.css("transform", "rotate(45deg)"));
})

