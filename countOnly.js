/*eslint linebreak-style: ["error", "windows"]*/
// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  let result = (actual === expected) ? `👌👌👌Assertion Passed: ${actual} === ${expected}` : `⚔️⚔️⚔️Assertion Failed: ${actual} !== ${expected}`;
  console.log(result);
 };

// allItems: an array of strings that we need to look through
// itemsToCount: an object specifying what to count
const countOnly = function(allItems, itemsToCount) {
  let result ={};
  for(const key in itemsToCount){
    var counts = 0;
    //console.log(key);
    if(itemsToCount[key]) 
    {
      //console.log(itemsToCount[key]);
      const res = allItems.filter(word=>word===key)
      //console.log(res)
      counts = res.length;
    }
    if (counts>0) result[key] = counts;
    console.log(result);
  }
  return(result);
}

const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];

const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });

console.log(result1);


// assertEqual(result1["Jason"], 2);
// assertEqual(result1["Karima"], undefined);
// assertEqual(result1["Fang"], 2);
// assertEqual(result1["Agouhanna"], undefined);