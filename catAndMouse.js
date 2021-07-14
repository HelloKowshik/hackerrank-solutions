//x-catA, y-catB, z-MouseC
let x = 2,
  y = 5,
  z = 4;
// x = 1;
// y = 2;
// z = 3;
x = 1;
y = 3;
z = 2;

function catAndMouse(x, y, z) {
  if (Math.abs(z - x) < Math.abs(z - y)) {
    return 'Cat A';
  } else if (Math.abs(z - x) > Math.abs(z - y)) {
    return 'Cat B';
  } else {
    return 'Mouse C';
  }
}

console.log(catAndMouse(x, y, z));
