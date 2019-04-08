/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
  var output = s.length ? 1 : 0;
  for(let i = 0; i < s.length; i++){
      let working = s[i];
      for(let j = i + 1; j < s.length; j++){
          if(!working.includes(s[j])){
              working += s[j];
              if(working.length > output){
                  output = working.length;
              }
          } else {
              break;
          }
      }
  }
  
  return output;
};
