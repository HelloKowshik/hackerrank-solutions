let b = 10,
  w = 10,
  bc = 1,
  wc = 1,
  z = 1;
b = 5;
w = 9;
bc = 2;
wc = 3;
z = 4;
function taumBday(b, w, bc, wc, z) {
  //   let cost = 0;
  //   if (bc + z < wc) {
  //     cost = b * bc + (bc + z) * w;
  //   } else if (wc + z < bc) {
  //     cost = w * wc + (wc + z) * b;
  //   } else {
  //     cost = b * bc + w * wc;
  //   }
  //   return cost;
  return (
    BigInt(b) * BigInt(Math.min(bc, wc + z)) +
    BigInt(w) * BigInt(Math.min(wc, bc + z))
  ).toString();
}

console.log(taumBday(b, w, bc, wc, z));
