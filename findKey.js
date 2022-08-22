/*eslint linebreak-style: ["error", "windows"]*/
// Implement findKey
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
const findKey = (obj,cb)=>{
  for(let item in obj){
    //console.log(obj[item],'---',cb(obj[item]))
    if (cb(obj[item])) 
    return(item)
    }
  }

let result =findKey({"Blue Hill":{ stars: 1 },"Akaleri":{ stars: 3 },
"noma":      { stars: 2 },
"elBulli":   { stars: 3 },
"Ora":       { stars: 2 },
"Akelarre":  { stars: 3 }
}, x => x.stars === 2)  

console.log(result);

assertEqual(result,"noma");
