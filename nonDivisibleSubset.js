let arr = [19, 10, 12, 10, 24, 25, 22],
  k = 4;

function nonDivisibleSubset(k, s) {
  if (k === 1) return 1;
  const remindersArr = {};
  let count = 0;
  for (let i = 0; i < k; i++) {
    remindersArr[i] = 0;
  }
  for (let i = 0; i < s.length; i++) {
    remindersArr[s[i] % k]++;
  }
  if (k % 2 === 0) remindersArr[k / 2] = 1;
  count = Math.min(1, remindersArr[0]);
  for (let i = 1; i <= parseInt(k / 2); i++) {
    count += Math.max(remindersArr[i], remindersArr[k - i]);
  }
  return count;
}

console.log(nonDivisibleSubset(k, arr));
