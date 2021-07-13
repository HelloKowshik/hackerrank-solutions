let num1 = [2, 4],
  num2 = [16, 32, 96];
num1 = [2, 6];
num2 = [24, 36];
function getTotalX(a, b) {
  let count = 0;
  for (let x = 1; x <= 100; x++) {
    if (a.every((v1) => x % v1 == 0)) {
      if (b.every((v2) => v2 % x == 0)) {
        count++;
      }
    }
  }
  return count;
}

console.log(getTotalX(num1, num2));
