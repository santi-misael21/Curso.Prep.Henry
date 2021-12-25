function agregarMetodoPrototype(Constructor) {
    // Agrega un método al Constructor del `prototype`
    // El método debe llamarse "saludar" y debe devolver la string "Hello World!"
    // Tu código:
    Constructor.prototype.saludar = function() {
      return 'Hello World!';
    };
  
  }