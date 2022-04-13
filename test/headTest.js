const assert = require("chai").assert;
const head = require("../head");

describe("#head", () => {
  it("returns 1 for [1, 2, 3]", () => {
    assert.strictEqual(head([1, 2, 3]), 1);
  });

  it("returns '5' for ['5']", () => {
    assert.strictEqual(head(["5"]), "5");
  });

  it("returns 'Hello' for ['Hello', 'Lighthouse', 'Labs']", () => {
    assert.strictEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
  });

  it("returns undefined for an empty array []", () => {
    assert.strictEqual(head([]), undefined);
  });

});


// TEST CODE for head function
// console.log(head([1, 2, 3, 4]));
// console.log(head(["Everest", "Waddington", "Annapurna"]));

// TEST CODE for head function, which makes use of assertEqual function. Checking assertions.
// assertEqual(head([5, 6, 7]), 5);
// assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
// assertEqual(head([9]), 9); //Test-case an array with only one element. Should still yield that one element as its head.
// assertEqual(head([]), 25); //Test-case an empty array should yield "undefined" as its head.
// assertEqual(head([-20, 9, -99]), 98);