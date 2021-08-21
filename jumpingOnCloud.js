let arr = [0, 1, 0, 0, 0, 1, 0];
arr = [0, 0, 1, 0, 0, 1, 0];
arr = [0, 0, 0, 0, 1, 0];
function jumpingOnClouds(c) {
  let jumpCount = 0;
  for (let i = 2; i <= c.length; i += 2) {
    if (c[i] === 1) {
      jumpCount++;
      i--;
    } else {
      jumpCount++;
    }
  }
  return jumpCount;
}
console.log(jumpingOnClouds(arr));
