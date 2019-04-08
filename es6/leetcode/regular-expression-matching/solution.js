/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function (s, p) {
  let output = false;
  let str = s.split('');
  let reg = p.split('');

  while (reg.length > 0) {
    if (str.length === 0) {
      return false;
    }
    if (reg[1] === '*') {
      while (reg[2] === reg[0]) {
        reg.splice(2, 1);
      }
      if (reg[0] === '.') {
        if (reg.length === 2) {
          return true
        }
        if (reg[2] !== '.') {
          if (str.includes(reg[2])) {
            str = str.slice(str.indexOf(reg[2]))
          } else {
            if (str.length > 0) {
              return false;
            } else {
              return true;
            }
          }
        } else {
          return false;
        }
      }
      while (reg[0] === str[0]) {
        str = str.slice(1);
      }
      reg = reg.slice(2);
      continue;
    }
    if (reg[0] === '.') {
      str = str.slice(1);
      reg = reg.slice(1);
      continue;
    }
    if (reg[0] === str[0]) {
      str = str.slice(1);
      reg = reg.slice(1);
    }
  }
  return (str.length === 0);
};

// console.log('Test 1:', isMatch('aa', 'a'), 'expected false');
// console.log('Test 2:', isMatch('aa', 'a*'), 'expected true');
// console.log('Test 3:', isMatch('ab', '.*'), 'expected true');
// console.log('Test 4:', isMatch('aab', 'c*a*b'), 'expected true');
// console.log('Test 5:', isMatch('mississippi', 'mis*is*p*.'), 'expected false');
// console.log('Test 6:', isMatch('ab', '.*c'), 'expected false');
// console.log('Test 7:', isMatch('aaa', 'a*a'), 'expected true');
console.log('Test 8:', isMatch('aaa', 'ab*a*c*a'), 'expected true');
