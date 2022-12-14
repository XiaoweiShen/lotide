/*eslint linebreak-style: ["error", "windows"]*/

const eqArrays = function(arr1,arr2) {
  if (Array.isArray(arr1) && Array.isArray(arr2) === false)
    return false;
  if (arr1.length !== arr2.length)
    return false;
  else {
    for (let i = 0; i < arr1.length; i++) {
      if (Array.isArray(arr1[i])) {
        if (eqArrays(arr1[i],arr2[i]));
        else return false;
      } else {
        if (arr1[i] !== arr2[i])
          return false;
      }
    }
  }
  return true;
};

module.exports = eqArrays;

