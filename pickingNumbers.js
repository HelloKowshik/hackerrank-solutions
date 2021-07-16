let arr = [1, 2, 2, 3, 1, 2];
arr = [4, 6, 5, 3, 3, 1];

function pickingNumbers(a) {
  let count = 0;
  [...new Set(a)].forEach((v) => {
    count = Math.max(
      count,
      a.reduce((acc, curr) => {
        return (acc = acc + (curr === v || curr === v + 1));
      }, 0)
    );
  });
  return count;
}

console.log(pickingNumbers(arr));
