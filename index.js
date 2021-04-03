const generateSequence = (n, pattern) => {
  if (typeof n !== 'number') {
    throw Error('n represents the array length, must be an integer')
  }

  let array = new Array(n).fill(pattern)
  if (typeof pattern == 'function') {
   return array.map(pattern)
  } else {
    return array
  }
}



module.exports = generateSequence;