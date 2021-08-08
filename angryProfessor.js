let minStd = 3,
  timeArr = [-1, -3, 4, 2];
minStd = 2;
timeArr = [0, -1, 2, 1];
function angryProfessor(k, a) {
  let count = 0;
  for (let i = 0; i < a.length; i++) {
    if (a[i] <= 0) count++;
  }
  if (count >= k) return 'NO';
  else return 'YES';
}

console.log(angryProfessor(minStd, timeArr));
