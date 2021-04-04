[![Coverage Status](https://coveralls.io/repos/github/mojcacolnik/sequence-generator/badge.svg?branch=main)](https://coveralls.io/github/mojcacolnik/sequence-generator?branch=main) [![Build Status](https://travis-ci.com/mojcacolnik/sequence-generator.svg?branch=main)](https://travis-ci.com/mojcacolnik/sequence-generator)

# sequence-generator

A small npm library to easily generate arrays of a chosen length and sequence pattern. Inspired by a codewars kata.

# Installation

```sh
npm i sequence-generator
```

# Usage

```js
const generateSequence = require('sequence-generator')

console.log(generateSequence(3, 'la')) // logs [ 'la', 'la', 'la' ]

console.log(generateSequence(10, (x, index) => index+1)) // logs [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ]

console.log(generateSequence(6, (x, index) => index%3)) // logs [ 0, 1, 2, 0, 1, 2 ]
```

# LICENSE

MIT License

Copyright (c) 2021 mojcacolnik

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.