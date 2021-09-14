let arr = [2, 2, 3, 4, 5],
  d = 1;
// arr = [1, 2, 4, 5, 7, 8, 10];
// d = 3;

function beautifulTriplets(d, arr) {
  return arr.filter((val) => arr.includes(val + d) && arr.includes(val + d * 2))
    .length;
  let triplets = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr.includes(arr[i] + d) && arr.includes(arr[i] + d * 2)) {
      triplets++;
    }
  }
  return triplets;
}

console.log(beautifulTriplets(d, arr));
