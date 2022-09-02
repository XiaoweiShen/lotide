const without = require('../without');
const assert = require('chai').assert;

describe("#without", () => {
   it("return [2,3] for without([1, 2, 3], [1])", () => {
     assert.deepEqual(without([1, 2, 3], [1]),[2, 3]);
   });
   it('return [1] for without(["1", "2", "3"], [1, "2", "3"])', () => {
    assert.deepEqual(without(["1", "2", "3"], [1, "2", "3"]),["1"]);
   });
 });

