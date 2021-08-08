let num = 124;
num = 111;
num = 10;
num = 12;
num = 1012;
function findDigits(n) {
  let count = 0,
    numArr = n.toString().split('');
  numArr.forEach((num) => {
    if (n % parseInt(num) === 0) count++;
  });
  return count;
}

console.log(findDigits(num));
