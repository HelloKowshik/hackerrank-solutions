let totalPrisoner = 4,
  totalCandy = 6,
  startFrom = 2;
totalPrisoner = 5;
totalCandy = 2;
startFrom = 2;
function saveThePrisoner(n, m, s) {
  return ((s + m - 2) % n) + 1;
}

console.log(saveThePrisoner(totalPrisoner, totalCandy, startFrom));
