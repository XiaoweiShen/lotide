const assertEqual = function(actual, expected) {
  let result = (actual === expected) ? `👌👌👌Assertion Passed: ${actual} === ${expected}` : `⚔️⚔️⚔️Assertion Failed: ${actual} !== ${expected}`;
  console.log(result);
 };


function head(array)
{return(array[0]);}


// TEST CODE
// assertEqual("Lighthouse Labs", "Bootcamp");
// assertEqual(1, 1);

assertEqual(head([5,67,89]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");