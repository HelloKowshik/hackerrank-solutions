let p = 20,
  d = 3,
  m = 6,
  s = 70;

p = 20;
d = 3;
m = 6;
s = 80;

function howManyGames(p, d, m, s) {
  let numOfGames = 0,
    sum = 0;
  while (1) {
    sum += p;
    if (sum <= s) {
      numOfGames++;
      if (p - d >= m) {
        p -= d;
      } else {
        p = m;
      }
    } else {
      break;
    }
  }
  return numOfGames;
}

console.log(howManyGames(p, d, m, s));
