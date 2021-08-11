let d1 = 14,
  m1 = 7,
  y1 = 18;
let d2 = 5,
  m2 = 7,
  y2 = 18;
// d1 = 9;m1 = 6;y1 = 2015;
// d2 = 6;m2 = 6;y2 = 2015;
// d1 = 2;m1 = 5;y1 = 2015;
// d2 = 30;m2 = 5;y2 = 2015;
d1 = 1;
m1 = 1;
y1 = 2015;
d2 = 31;
m2 = 12;
y2 = 2014;
function libraryFine(d1, m1, y1, d2, m2, y2) {
  if (y1 > y2) return 10000;
  else if (y1 == y2 && m1 > m2) return (m1 - m2) * 500;
  else if (y1 == y2 && m1 == m2 && d1 > d2) return (d1 - d2) * 15;
  else return 0;
}
console.log(libraryFine(d1, m1, y1, d2, m2, y2));
