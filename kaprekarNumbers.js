let p = 1,
  q = 100;

function kaprekarNumbers(p, q) {
  const numbers = [];
  for (let i = p; i <= q; i++) {
    const square = (i * i).toString();
    let right = square.substring(square.length - i.toString().length);
    let left = square.substring(0, square.length - i.toString().length);
    if (parseInt(right) + parseInt(left || 0) === i) numbers.push(i);
  }
  console.log(numbers.length ? numbers.join(' ') : 'INVALID RANGE');
}

kaprekarNumbers(p, q);
// console.log(kaprekarNumbers(p, q));
