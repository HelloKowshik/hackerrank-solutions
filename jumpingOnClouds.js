let cloudsArr = [0, 0, 1, 0, 0, 1, 1, 0],
  sizeOfJump = 2;
function jumpingOnClouds(c, k) {
  let e = 100,
    i = 0;
  if (c.length === 0) return e;
  while (true) {
    if (c[i] === 1) e = e - 3;
    else e = e - 1;
    i = (i + k) % c.length;
    if (i % c.length === 0) break;
  }
  return e;
}

console.log(jumpingOnClouds(cloudsArr, sizeOfJump));
