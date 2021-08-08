let day = 3;
day = 5;
day = 4;

function viralAdvertising(n) {
  let likedCounter = 0;
  let people = 5;
  for (let i = 1; i <= n; i++) {
    likedCounter += Math.floor(people / 2);
    people = Math.floor(people / 2) * 3;
    console.log(people, '-', likedCounter);
  }
  return likedCounter;
}
console.log(viralAdvertising(day));
