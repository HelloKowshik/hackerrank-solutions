let heights = [2, 5, 4, 5, 2],
  maxHeight = 4;
heights = [1, 6, 3, 5, 2];
heights = [2, 5, 4, 5, 2];
maxHeight = 7;
function hurdleRace(k, height) {
  let max = Math.max(...height);
  return k < max ? Math.abs(max - k) : 0;
}

console.log(hurdleRace(maxHeight, heights));
