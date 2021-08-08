let arr = [5, 2, 1, 3, 4];

function permutationEquation(p) {
  let res = [];
  for (let i = 1; i <= p.length; i++) {
    res.push(p.indexOf(p.indexOf(i) + 1) + 1);
  }
  return res;
}

console.log(permutationEquation(arr));
