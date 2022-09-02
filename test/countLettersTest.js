
const countLetters = require('../countLetters');
const assert = require('chai').assert;
 
 describe("#countLetters", () => {
   it("returns count of a is 5 for 'aaaaabbbbbbvccccOK'", () => {
     assert.strictEqual(countLetters('aaaaabbbbbbvccccOK').a,5); 
   });
   it("returns {v:2} for 'xev is fav'", () => {
    assert.strictEqual(countLetters('xev is fav').v,2)
   });
 });

 module.exports = countLetters;

