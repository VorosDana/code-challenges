/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function (s, p) {
  // let output = false;

  if (s.length === 0) {
    if (p.length === 0) {
      return true;
    }
    if(p[1] === '*'){
      return isMatch(s, p.slice(2));
    }
    return false;
  }
  if (p[1] === '*') {
    let nextIndex = -1;
    if (p[0] === '.') {
      nextIndex = s.length;
    } else {
      for (let i = 0; i <= s.length; i++) {
        nextIndex = i;
        if (s[i] !== p[0]) {
          break;
        }
      }
    }
    for (let i = 0; i <= nextIndex; i++) {
      if (isMatch(s.slice(i), p.slice(2))) {
        return true
      }
    }
    return isMatch(s, p.slice(2));
  }
  if (p[0] === '.') {
    return isMatch(s.slice(1), p.slice(1));
  }
  if (p[0] === s[0]) {
    return isMatch(s.slice(1), p.slice(1));
  }
  // return (s.length === 0);
  return false;
};

console.log('Test 1:', isMatch('aa', 'a'), 'expected false');
console.log('Test 2:', isMatch('aa', 'a*'), 'expected true');
console.log('Test 3:', isMatch('ab', '.*'), 'expected true');
console.log('Test 4:', isMatch('aab', 'c*a*b'), 'expected true');
console.log('Test 5:', isMatch('mississippi', 'mis*is*p*.'), 'expected false');
console.log('Test 6:', isMatch('ab', '.*c'), 'expected false');
console.log('Test 7:', isMatch('aaa', 'a*a'), 'expected true');
console.log('Test 8:', isMatch('aaa', 'ab*a*c*a'), 'expected true');
console.log('Test 9:', isMatch('a', 'ab*'), 'expected true');
