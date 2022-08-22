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

/*eslint linebreak-style: ["error", "windows"]*/
const map = function(array,callback) {
  //console.log('array: ', array);
  //console.log('callback: ', callback);
  const results = [];
  for (let item of array) {
    // console.log('item BEFORE: ', item);
    // console.log('item AFTER: ', callback(item));
    // console.log('---');
    results.push(callback(item));
  }
  return results;
}


const words = ["ground", "control", "to", "major", "tom"];
const results1 = map(words, word => word[0]);
const results2 = map(words, word => word.length);
const results3 = map(words, word => word.toUpperCase());

console.log(results1);

assertEqual(eqArrays(results1,words.map(x=>x[0])),true);
assertEqual(eqArrays(results2,words.map(x=>x.length)),true);
assertEqual(eqArrays(results3,words.map(x=>x.toUpperCase())),true);