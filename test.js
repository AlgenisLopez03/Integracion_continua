const greet = require('./index');

test('Debe de retornar ¡Hola Mundo!', () => {
    expect(greet()).toBe('¡Hola Mundo!');
});
