// Esperar que el DOM este listo
$(document).ready(function () {
  // Mostramos contenido del primer panel
  $(".panel__contenido").first().slideDown();

  // Event listeners 
  $(".panel__cabecera").on("click", function(evt){
      evt.preventDefault();
      $('.panel__contenido').not(this).each(function(){
          $(this).slideUp();
      })
      $(this).siblings(".panel__contenido").slideToggle();
  });
});

