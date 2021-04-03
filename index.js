const generateSequence = (n, pattern) => {
  if (typeof n !== 'number') {
    throw Error('n represents the array length, must be an integer')
  }
  // if (typeof n == 'undefined') {
  //   let array = [];
  //   array.push(pattern)
  //   if (typeof pattern == 'function') {
  //     return array.map(pattern)
  //   }
  // }
  if (typeof pattern == 'undefined') {
    /* Should I do this instead of line 16?
    let array = [];
    array.length = n
    */
    let array = new Array(n)
    }

  let array = [];
  for (let i = 0; i < n; i++) array.push(pattern);
  if (typeof pattern === 'function') {
    return array.map(pattern);
  } else {
    return array;
  }
}


module.exports = generateSequence;