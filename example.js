const generateSequence = require('./index')

console.log(generateSequence(6, []))

console.log(generateSequence(13, 'waw'))

console.log(generateSequence(5, '^*.*^'))

console.log(generateSequence(12, (x, index) => index % 2))

console.log(generateSequence(9, (x, index) => index % 4))

console.log(generateSequence(10, (x, index) => index * 3))

console.log(generateSequence(12, (x, index) => index + 1))

console.log(generateSequence(6, (x, index) => index % 3))

console.log(generateSequence(3))
