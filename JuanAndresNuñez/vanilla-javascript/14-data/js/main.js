
$(document).ready(function () {
   /*let $enlace = $(".lateral").find("a").last();
   $enlace.data("rrss", "Nuevo valor"); //Setter
   let valorData = $enlace.data("rrss"); //Getter
   console.log(valorData);*/

    // Filtrar selección
    let $datos = $("*").filter(function(){
        let datos = $(this).data("rrss");
        return datos == "snapchat";
    });
    console.log($datos);
});