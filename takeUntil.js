/*eslint linebreak-style: ["error", "windows"]*/
//Implement takeUntil.js

const takeUntil = function(array, callback) {
  let result =[];
  //solution 2 ---------------------------while
  let i=0;
  while(!callback(array[i]))
    {result.push(array[i]);
    i+=1;
    }
  //solution 1-------------------------for
    // for(let x of array)
  // {
  //   if(!callback(x)) 
  //    result.push(x);
  //   else 
  //    break;
  // }

  return result;
}

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
console.log(results1);

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
console.log(results2);


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

assertEqual(eqArrays(results1,[1,2,5,7,2]),true);
assertEqual(eqArrays(results2,[ 'I\'ve', 'been', 'to', 'Hollywood' ]),true);


