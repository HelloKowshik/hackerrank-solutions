let arr = [5, 4, 4, 2, 2, 8];
arr = [1, 2, 3, 4, 3, 3, 2, 1];
function cutTheSticks(arr) {
  let posArr = [];
  arr.sort((a, b) => a - b);
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== arr[i - 1]) {
      posArr.push(arr.length - i);
    }
  }
  return posArr;
}
console.log(cutTheSticks(arr));
