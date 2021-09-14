let word = 'lmno';
word = 'fedcbabcd';

function biggerIsGreater(w) {
  let arr = w.split('');
  for (let i = arr.length - 2; i >= 0; i--) {
    let biggerCharacters = arr.slice(i + 1).filter((v) => arr[i] < v);
    if (biggerCharacters.length > 0) {
      let index;
      index = i + 1 + arr.slice(i + 1).indexOf(biggerCharacters.sort()[0]);
      [arr[i], arr[index]] = [arr[index], arr[i]];
      return arr
        .slice(0, i + 1)
        .concat(arr.slice(i + 1).sort())
        .join('');
    }
  }
  return 'no answer';
}

console.log(biggerIsGreater(word));
