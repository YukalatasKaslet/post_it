var Board = function( selector ) {
  // Aqui deberá ir el código que tenga que ver con tu tablero 
  
  // Utiliza esta sintaxis para referirte al selector que representa al tablero.
  // De esta manera no dependerás tanto de tu HTML.  
  var $elem = $( selector );
  
  function initialize() {
    // Que debe de pasar cuando se crea un nuevo tablero?
  };

  initialize();
};

var PostIt = function() {
  // Aquí va el código relacionado con un post-it
};

$(function() {
  // Esta es la función que correrá cuando este listo el DOM 
  new Board('#board');
});
