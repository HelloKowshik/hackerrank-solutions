let arr = [3, 3, 2, 1, 3];
arr = [1, 2, 2, 3];
function equalizeArray(arr) {
  let map = {};
  map = arr.reduce((obj, val) => {
    if (!obj[val]) {
      obj[val] = 0;
    }
    obj[val]++;
    return obj;
  }, {});
  return arr.length - Math.max(...Object.values(map));
}
console.log(equalizeArray(arr));
