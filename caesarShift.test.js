const caesarCipher = require('./caesarShift');

test('Hello, World! to Khoor, Zruog!', () => {
    expect(caesarCipher('Hello, World!', 3)).toBe('Khoor, Zruog!')
})