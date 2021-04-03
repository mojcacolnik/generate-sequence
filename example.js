const generateSequence = require('./index')

console.log(generateSequence(6, []))

console.log(generateSequence(13, 'wa'))

console.log(generateSequence(5, '^*.*^'))

console.log(generateSequence(12, (x, index) => index%2))

console.log(generateSequence(9, (x, index) => index%4))

console.log(generateSequence(10, (x, index) => index*3))

console.log(generateSequence(12, (x, index) => index+1))

console.log(generateSequence(3))

console.log(generateSequence('sss'))