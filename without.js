//without.js
/*eslint linebreak-style: ["error", "windows"]*/

const without = function(arr1,arr2) {
  const alteredArray = arr1.reduce((result,cur)=>{
    return((arr2.includes(cur)) ? result : result.concat(cur));
  },[]);
  return alteredArray;
};

module.exports = without;

