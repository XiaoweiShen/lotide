/*eslint linebreak-style: ["error", "windows"]*/
//Implement takeUntil.js

const takeUntil = function(array, callback) {
  let result = [];
  let i = 0;
  while (!callback(array[i])) {
    result.push(array[i]);
    i += 1;
  }
  // solution 1-------------------------for
  // for(let x of array)
  // {
  //   if(!callback(x))
  //    result.push(x);
  //   else
  //    break;
  // }
  return result;
};
module.exports = takeUntil;


