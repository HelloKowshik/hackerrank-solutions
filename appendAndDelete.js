let first = 'hackerhappy',
  second = 'hackerrank',
  move = 9;

// first = 'aba';
// second = 'aba';
// move = 7;

first = 'ashley';
second = 'ash';
move = 2;

function appendAndDelete(s, t, k) {
  let totalLen = s.length + t.length;
  let min = Math.min(s.length, t.length);
  if (k > totalLen) return 'Yes';
  for (let i = 0; i < min; i++, totalLen -= 2) {
    if (s[i] !== t[i]) break;
  }
  return totalLen > k || (k - totalLen) % 2 !== 0 ? 'No' : 'Yes';
}
console.log(appendAndDelete(first, second, move));
