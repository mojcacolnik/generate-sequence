# sequence-generator

A small npm library to easily generate arrays of a chosen length and sequence pattern.

# Instalation
```sh
npm i sequence-generator
```

# Usage

```js
const generateSequence = require('sequence-generator')

console.log(3, 'la') // logs [ 'la', 'la', 'la' ]

console.log(generateSequence(10, (x, index) => index+1)) // logs [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ]

console.log(generateSequence(6, (x, index) => index%3)) // logs [ 0, 1, 2, 0, 1, 2 ]
```