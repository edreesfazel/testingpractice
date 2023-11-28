const reverseString = require('./reverse')

test('reverses Hello World to dlroW olleH', () => {
    expect(reverseString('Hello World')).toBe('dlroW olleH')
})