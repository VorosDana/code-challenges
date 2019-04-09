/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits, working = '', output = []) {
  if(!digits) {working ? output.push(working) : 0; return output;}
  letterCombinations.lookup[digits[0]].forEach((possibility) => letterCombinations(digits.slice(1), working + possibility, output))
  return output;
};

letterCombinations.lookup = {
    '1': [''],
    '2': ['a','b','c'],
    '3': ['d','e','f'],
    '4': ['g','h','i'],
    '5': ['j','k','l'],
    '6': ['m','n','o'],
    '7': ['p','q','r','s'],
    '8': ['t','u','v'],
    '9': ['w','x','y','z'],
    '*': ['+'],
    '0': [' ']
}

console.log(letterCombinations('623'))
