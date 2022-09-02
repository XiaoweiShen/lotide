/*eslint linebreak-style: ["error", "windows"]*/
// Implement findKey
const assertEqual = require('./assertEqual.js');

const findKeyByValue = (obj,str) => {
  for (let item in obj) {
    if (obj[item] === str)
      return (item);
  }
};

module.exports = findKeyByValue;











