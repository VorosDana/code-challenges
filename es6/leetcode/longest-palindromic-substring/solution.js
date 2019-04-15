/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
  let output = '';
  for(let i = 0; i < s.length; i++){
    for(let j = i+1; j <= s.length; j++){
      if(testPalindrome(s.substring(i,j)) && s.substring(i,j).length > output.length){
        output = s.substring(i,j)
      }
      if(output.length > j - i){
        continue
      }
    }
    if(output.length > s.length - i){
      break;
    }
  }

  return output;
};

var testPalindrome = function(s) {
  let index = 0;
    while(s[index] === s[s.length-1-index] && s.length / 2 > index){
        index++
    }
    if(index >= s.length / 2){
        return true;
    }
    return false;
}

console.log('Test 1:', longestPalindrome('babad'), ', expected \'aba\'');
console.log('Test 2:', longestPalindrome('cbbd'), ', expected \'bb\'');
console.log('Test 3:', longestPalindrome('a'), ', expected \'a\'');
console.log('Test 4:', longestPalindrome('abcda'), ', expected \'a\'');
console.log('Test 5:', longestPalindrome('abcba'), ', expected \'abcba\'');
