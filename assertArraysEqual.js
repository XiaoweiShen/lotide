/*eslint linebreak-style: ["error", "windows"]*/

const assertEqual = require('./assertEqual.js');
const eqArrays = require('./eqArrays.js');

const assertArraysEqual = function(arr1,arr2) {
  assertEqual(eqArrays(arr1,arr2),true);
};


module.exports = assertArraysEqual;
