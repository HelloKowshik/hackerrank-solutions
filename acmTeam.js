let topic = ['10101', '11100', '11010', '00101'];
function acmTeam(topic) {
  let count = 1,
    max = 0;
  topic.forEach((v, i, a) => {
    a.slice(i + 1).forEach((str) => {
      let newCount = [...v].reduce((x, v, i) => {
        return x + (v === '1' || str.charAt(i) === '1');
      }, 0);
      if (newCount > max) {
        max = newCount;
        count = 1;
      } else {
        count += newCount === max;
      }
    });
  });
  return [max, count];
}
console.log(acmTeam(topic));
