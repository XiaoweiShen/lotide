//flatten.js
/*eslint linebreak-style: ["error", "windows"]*/
const assertEqual = require('./assertEqual.js');
const eqArrays = require('./eqArrays.js');

const flatten = (array)=>{
  const res = array.reduce((flat,cur)=>{
    return((typeof(cur) === 'object' && Array.isArray(cur)) ? flat.concat(flatten(cur)) : (flat.concat(cur)));
  },[]);
  return res;
  //--- This is 2nd solution, actually more easier.
  // for(const ele of array)
  // {if(typeof(ele)=='object'&&Array.isArray(ele))
  //    flatten(ele);
  //  else
  //    result.push(ele);
  // }
};

module.exports = flatten;
