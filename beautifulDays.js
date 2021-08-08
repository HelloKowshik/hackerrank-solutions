let start = 20,
  end = 23,
  div = 6;
function beautifulDays(i, j, k) {
  let day = 0;
  for (let x = i; x <= j; x++) {
    let rev = parseInt(x.toString().split('').reverse().join(''));
    if (Math.abs(x - rev) % k === 0) day++;
  }
  return day;
}
console.log(beautifulDays(start, end, div));
