const generateSequence = require('./index')

test('Array with 5 - [] - empty arrays', () => {
    expect(generateSequence(5, [])).toEqual([[], [], [], [], []])
})

test('Array with 2 bats', () => {
    expect(generateSequence(2, '^*.*^')).toEqual([ '^*.*^', '^*.*^'])
})

test('Array starting at 0 and including every third number', () => {
    expect(generateSequence(10, (x, index) => index*3)).toEqual([0,  3,  6,  9, 12,
        15, 18, 21, 24, 27])
})

test('Array with 3 empty elements', () => {
    expect(generateSequence(3)).toEqual([undefined, undefined, undefined])
})

test('Invalid input to function', () => {
    expect(() => {generateSequence('only string input')}).toThrow(Error)
})