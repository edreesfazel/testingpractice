const capitalizeFirstLetter = require('./capitalize');

test('capitalizes john to John', () => {
    expect(capitalizeFirstLetter('john')).toBe('John')
})