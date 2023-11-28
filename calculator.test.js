const calculator = require('./calculator')

test('1 + 1 equals 2', () => {
    expect(calculator.add(1,1)).toBe(2);
})

test('10 - 4 equals 6', () => {
    expect(calculator.subtract(10,4)).toBe(6);
})

test('6 times 3 equals 18', () => {
    expect(calculator.multiply(6,3)).toBe(18);
})

test('30 divided by 6 equals 5', () => {
    expect(calculator.divide(30,6)).toBe(5);
})