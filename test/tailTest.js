const assert = require("chai").assert;
const tail = require("../tail");

describe("#tail", () => {
  it("returns ['Lighthouse', 'Labs'] for ['Hello', 'Lighthouse', 'Labs']", () => {
    assert.deepEqual(tail(["Hello", "Lighthouse", "Labs"]), ["Lighthouse", "Labs"]);
  });

  it("returns an empty array [] for an array with only one element ['Hola']", () => {
    assert.deepEqual(tail(["Hola"]), []);
  });

  it("returns an empty array [] if an empty array is passed in []", () => {
    assert.deepEqual(tail([]), []);
  });

});
