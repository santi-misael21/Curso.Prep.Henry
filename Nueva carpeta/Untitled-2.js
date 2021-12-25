function crearUsuario() {
    class Usuario {
    constructor(opciones) {
      this.usuario = opciones.usuario;
      this.nombre = opciones.nombre;
      this.email = opciones.email;
      this.password = opciones.password;
    }
    saludar() {
      return 'Hola, mi nombre es ' + this.nombre;
    }
  }
  
  
    return Usuario;
  
  }

  export default {
    crearUsuario,
  };
  