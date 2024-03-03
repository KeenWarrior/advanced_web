const {toUpper} = require('../index');


test('toUpper function', () => {
    expect(toUpper('hello')).toBe('HELLO');
    expect(toUpper('hello')).not.toBe('hello');
    expect(toUpper('hello')).not.toBe('Hello');
    expect(toUpper('bingo')).toBe('BINGO');
});

