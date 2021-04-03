const generateSequence = (n, pattern) => {
  if (typeof n !== 'number') {
    throw Error('n represents the array length, must be an integer')
  }

  const array = new Array(n).fill(pattern)
  return (typeof pattern === 'function') ? array.map(pattern) : array
}

module.exports = generateSequence
