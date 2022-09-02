
const countOnly = require('../countOnly');
const assert = require('chai').assert;
 
const firstNames = ["Karl","Salima","Agouhanna","Fang","Kavith","Jason","Jason", "Salima", "Fang","Joe"];

const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });

 describe("#countOnly", () => {
   it("returns 2 for (result1['Jason']", () => {
     assert.strictEqual(result1["Jason"], 2); 
   });
   it("returns undefined for (result1['Karima'], undefined)", () => {
    assert.strictEqual(result1["Karima"], undefined)
   });
 });

 