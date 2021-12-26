const {
	operacionMatematica
} = require('..Untitled-2.js');

describe('operacionMatematica(n1, n2, cb)', function() {
	it('should return the callback function passing it the received arguments', function() {
		const cb = jest.fn();
		operacionMatematica(100, 20, cb);
		expect(cb).toHaveBeenCalled();
	});
});
