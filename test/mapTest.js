const map = require('../map');
const assert = require('chai').assert;

const words = ["ground", "control", "to", "major", "tom"];
const results1 = map(words, word => word[0]);
const results2 = map(words, word => word.length);
const results3 = map(words, word => word.toUpperCase());


describe("#map", () => {
   it("compare with standard array.map for given array and cb1", () => {
     assert.deepEqual(results1,words.map(x=>x[0]));
   });
   it("compare with standard array.map for given array and cb2", () => {
    assert.deepEqual(results2,words.map(x=>x.length));
  });
  it("compare with standard array.map for given array and cb3", () => {
    assert.deepEqual(results3,words.map(x=>x.toUpperCase()));
  });
 });

