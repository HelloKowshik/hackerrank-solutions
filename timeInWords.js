// let h = 3,
//   m = 0;
// h = 7;
// m = 15;
h = 5;
m = 45;
h = 1;
m = 1;
h = 7;
m = 29;

function timeInWords(h, m) {
  const nums = [
    '',
    'one',
    'two',
    'three',
    'four',
    'five',
    'six',
    'seven',
    'eight',
    'nine',
    'ten',
    'eleven',
    'twelve',
    'thirteen',
    'fourteen',
    'quarter',
    'sixteen',
    'seventeen',
    'eighteen',
    'nineteen',
    'twenty',
    'twenty one',
    'twenty two',
    'twenty three',
    'twenty four',
    'twenty five',
    'twenty six',
    'twenty seven',
    'twenty eight',
    'twenty nine',
  ];
  if (m == 0) return `${nums[h]} o' clock`;
  else if (m > 30) {
    if (m == 45) return `quarter to  ${nums[h + 1]}`;
    else return `${nums[60 - m]} minutes to ${nums[h + 1]}`;
  } else if (m < 30) {
    if (m == 15) return `quarter past ${nums[h]}`;
    else {
      //   let str = m > 1 ? 'minutes' : 'minute';
      return `${nums[m]} ${m > 1 ? 'minutes' : 'minute'} past ${nums[h]}`;
    }
  } else return `half past ${nums[h]}`;
}

console.log(timeInWords(h, m));
