const {
    crearUsuario,
} = require('../Untitled-2');

describe('crearUsuario()', function() {
	it('', function() {
		const Usuario = crearUsuario();
		const user = new Usuario({usuario: 'jssamuel', nombre: 'Samuel', email: 'samuel@email.com', password: 'LoveJS' });
		expect(user.usuario).toBe('jssamuel');
		expect(user.nombre).toBe('Samuel');
		expect(user.email).toBe('samuel@email.com');
		expect(user.password).toBe('LoveJS');
    	expect(user.saludar()).toBe('Hola, mi nombre es Samuel');
	});
});