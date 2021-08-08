let arr = [3, 4, 5],
  round = 2,
  posArr = [1, 2];

function circularArrayRotation(a, k, queries) {
  const newArr = new Array(a.length);
  const queriesArr = [];
  for (let i = 0; i < a.length; i++) {
    newArr[(i + k) % a.length] = a[i];
  }
  for (let q of queries) {
    queriesArr.push(newArr[q]);
  }
  return queriesArr;
}

console.log(circularArrayRotation(arr, round, posArr));
