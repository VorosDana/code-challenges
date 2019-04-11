/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function (s, wordDict) {
  //brute force break


  // for(let i = 0; i < wordDict.length; i++){
  //   for(let j = 0; j < wordDict[i].length; j++){
  //     if(s.includes(wordDict[i][j])){
  //       test = test.replace(new RegExp(wordDict[i][j], 'g'), '');
  //       continue;
  //     } else {
  //       return false;
  //     }
  //   }
  // }

  // new approach: dictionary of the letters in each, compare keys
  let testDict = {};

  wordDict.forEach(word => {
    word.split('').forEach(letter => {
      testDict[letter] = true;
    })
  })

  let testDictKeys = Object.keys(testDict);

  let sDict = {};

  s.split('').forEach(letter => {
    sDict[letter] = true;
  })

  let sDictKeys = Object.keys(sDict);

  for(let i = 0; i < sDictKeys.length; i++){
    if(!testDictKeys.includes(sDictKeys[i])){
      return false;
    }
  }


  return (wordBreakTest(s, wordDict));
};

var wordBreakTest = function (s, wordDict) {
  if (!s) {
    return true;
  }
  for (let i = 0; i < wordDict.length; i++) {
    if (s.match(new RegExp(`^${wordDict[i]}`))) {
      let output = wordBreakTest(s.slice(wordDict[i].length), wordDict);
      if (output) {
        return true;
      }
    }
  }
  return false;
}

// console.log('Test 1: ', wordBreak('leetcode', ['leet', 'code']), ', expected: true');
// console.log('Test 2: ', wordBreak('applepenapple', ['apple', 'pen']), ', expected: true');
// console.log('Test 3: ', wordBreak('catsandog', ['cats', 'dog', 'sand', 'and', 'cat']), ', expected: false');
// console.log('Test 4: ', wordBreak('aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaab', ['a', 'aa', 'aaa', 'aaaa', 'aaaaa', 'aaaaaa', 'aaaaaaa', 'aaaaaaaa', 'aaaaaaaaa', 'aaaaaaaaaa']), ', expected: false');
// console.log('Test 5: ', wordBreak('ab', ['a','b']), ', expected: true');
// console.log('Test 6: ', wordBreak('bb', ['a', 'b', 'bbb', 'bbbb']), ', expected: true');
console.log('Test 7: ', wordBreak('aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaabaabaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa', ['aa','aaa','aaaa','aaaaa','aaaaaa','aaaaaaa','aaaaaaaa','aaaaaaaaa','aaaaaaaaaa','ba']), ', expected: true');

