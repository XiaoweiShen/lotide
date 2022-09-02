const takeUntil = require('../takeUntil');
const assert = require('chai').assert;

describe("#takeUntil", () => {
   it("take until meet x => x < 0 for [1, 2, 5, 7, 2, -1, 2, 4, 5]", () => {
     assert.deepEqual(takeUntil([1, 2, 5, 7, 2, -1, 2, 4, 5], x => x < 0),[1, 2, 5, 7, 2]);
   });
   it('take until meet x => x === "," for given array of strings', () => {
    assert.deepEqual(takeUntil(["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"], x => x === ','),[ 'I\'ve', 'been', 'to', 'Hollywood' ]);
   });
 });



// const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
// const results2 = takeUntil(data2, x => x === ',');

// assertEqual(eqArrays(results1,[1,2,5,7,2]),true);
// assertArraysEqual(results2,[ 'I\'ve', 'been', 'to', 'Hollywood' ]);
