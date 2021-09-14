let s = 'haveaniceday';

function encryption(s) {
  let nospace = s.replace(/\s/g, '');
  let rows = Math.floor(Math.sqrt(nospace.length));
  let columns = Math.ceil(Math.sqrt(nospace.length));
  if (rows * columns < nospace.length) {
    rows++;
  }
  let str = '';
  for (let i = 0; i < columns; i++) {
    let jump = 0;
    while (i + jump < nospace.length) {
      str += nospace[i + jump];
      jump += columns;
    }
    str += ' ';
  }
  return str;
}

console.log(encryption(s));
