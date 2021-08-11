let a = 24,
  b = 49;
a = 3;
b = 9;
a = 17;
b = 24;
function squares(a, b) {
  return Math.floor(Math.sqrt(b)) - Math.ceil(Math.sqrt(a)) + 1;
}
console.log(squares(a, b));
