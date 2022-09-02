//Implement letterPositions
//modified from implement countLetters in Lotide
/*eslint linebreak-style: ["error", "windows"]*/
const assertArraysEqual = require('./assertArraysEqual.js');

const letterPositions = function(sen) {
  let result = {};
  for (let i = 0; i < sen.length; i++) {
    if (isletter(sen[i])) {
      let letter = sen[i];
      result[letter] = result[letter] || [];
      result[letter].push(i);
    }
    //Below is the first solution of object , but check youtube find some more efficient way!!!!!!!!
    // if(!Object.keys(result).includes(letter))
    //   { result[letter]=[];
    //     result[letter].push(i);}
    // else
    //   {
    //     result[letter].push(i);
    //   }
    //console.log(result);}
  }
  return result;
};
 
const isletter = (char => {
  return ((char.charCodeAt() <= 90 && char.charCodeAt() >= 64) || (char.charCodeAt() <= 122 && char.charCodeAt() >= 97));
});

module.exports = {isletter,letterPositions};
 