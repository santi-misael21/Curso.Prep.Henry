function crearUsuario() {
    function Usuario(opciones) {
      this.usuario = opciones.usuario;
      this.nombre = opciones.nombre;
      this.email = opciones.email;
      this.password = opciones.password;
    }
  
    Usuario.prototype.saludar = function() {
      return 'Hola, mi nombre es ' + this.nombre;
    };
  
    return Usuario;
  
  }

  module.exports = {
    crearUsuario,
    agregarMetodoPrototype,
    agregarStringInvertida,
    crearInstanciaPersona,
    agregarMetodo, 
    Persona
  };
  