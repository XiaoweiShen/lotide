
const eqObjects = require('../eqObjects');

const assert = require('chai').assert;

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
const abc = { a: "1", b: "2", c: "3" };
const cd = {c: "1", d: ["2", 3], ob:{ name:"xev",b:3 }};
const dc = {d: ["2", 3], c: "1", ob:{ name:'xev',b:3 }};

 describe("#eqObjects", () => {
   it("returns true for simple objects match", () => {
     assert.strictEqual(eqObjects(ab, ba),true);
   });
   it("returns false for simple objects not match", () => {
    assert.strictEqual(eqObjects(ab, abc),false);
   });
   it("returns true for nested objects match", () => {
    assert.strictEqual(eqObjects({ a: { z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 }),true);
   });
   
   it("returns false for nested objects not match", () => {
    assert.strictEqual(eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 }),false);
       
   });
   
 });
