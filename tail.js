
/*eslint linebreak-style: ["error", "windows"]*/

const assertEqual = function(actual, expected) {
  let result = (actual === expected) ? `👌👌👌Assertion Passed: ${actual} === ${expected}` : `⚔️⚔️⚔️Assertion Failed: ${actual} !== ${expected}`;
  console.log(result);
 };

// TEST CODE
assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);


