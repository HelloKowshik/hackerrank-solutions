let arr = [
  [4, 8, 2],
  [4, 5, 7],
  [6, 1, 6],
];
// arr = [
//   [4, 9, 2],
//   [3, 5, 7],
//   [8, 1, 5],
// ];
function formingMagicSquare(s) {
  let n = 8,
    costArr = Array(n).fill(0),
    magicArr = [
      [4, 3, 8],
      [9, 5, 1],
      [2, 7, 6],
    ];
  for (let i = 0; i < n; i++) {
    let isEven = i % 2 === 0;
    magicArr.forEach(([a, b, c], j) => {
      costArr[i] += Math.abs(s[isEven ? 0 : 2][j] - a);
      costArr[i] += Math.abs(s[1][j] - b);
      costArr[i] += Math.abs(s[isEven ? 2 : 0][j] - c);
    });
    if (isEven) {
      s = [0, 1, 2].map((j) => [s[2][j], s[1][j], s[0][j]]);
    }
  }
  return Math.min(...costArr);
}

formingMagicSquare(arr);
