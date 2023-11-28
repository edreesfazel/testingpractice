const analyzeArray = require('./analyzeArray');

test('analyze [1, 8, 3, 4, 2, 6]', () => {
    const result = analyzeArray([1, 8, 3, 4, 2, 6]);
    const expected = {
        average: 4, 
        min: 1,
        max: 8,
        length: 6
    };
    expect(result).toEqual(expected)
})