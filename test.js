const greet = require('./index');

test('should return ¡Hola Mundo!', () => {
    expect(greet()).toBe('¡Hola Mundo!');
});
