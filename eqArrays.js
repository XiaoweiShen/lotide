/*eslint linebreak-style: ["error", "windows"]*/
// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  let result = (actual === expected) ? `👌👌👌Assertion Passed: ${actual} === ${expected}` : `⚔️⚔️⚔️Assertion Failed: ${actual} !== ${expected}`;
  console.log(result);
 };

// TEST CODE
//assertEqual("Lighthouse Labs", "Bootcamp");
//assertEqual(1, 1);
function eqArrays(arr1,arr2){
  if(arr1.length!==arr2.length) return false;
  else
     {
      for(let i=0;i<arr1.length;i++){
         if (arr1[i]!==arr2[i]) 
         return false;
      }
     return true; 
    }
}

console.log(eqArrays([1, 2, 3], [1, 2, 3])) // => true
console.log(eqArrays([1, 2, 3], [3, 2, 1])) // => false
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); 