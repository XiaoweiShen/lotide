
/*eslint linebreak-style: ["error", "windows"]*/
const eqObjects = require('./eqObjects.js');

// FUNCTION IMPLEMENTATION

const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect; // <= add this line
  let result = (eqObjects(actual,expected)) ? `👌👌👌Assertion Passed: ${inspect(actual)} === ${inspect(expected)}` : `⚔️⚔️⚔️Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`;
  console.log(result);
};

module.exports = assertObjectsEqual;
