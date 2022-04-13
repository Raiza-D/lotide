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


/* Test-case where the assertion will always fail.
Can't compare an array with another array.
Even though the values inside both arrays are the same.

const result = tail(["Hello", "Lighthouse", "Labs"]);
assertEqual(result, ["Lighthouse", "Labs"]); */

// const result = tail(["Hello", "Lighthouse", "Labs"]);
// assertEqual(result.length, 2);
// assertEqual(result[0], "Lighthouse");
// assertEqual(result[1], "Labs");

// Test Code to ensure original array is being passed in is not modified.
// const words = ["Yo Yo", "Lighthouse", "Labs"];
// console.log(tail(words));
// assertEqual(words.length, 3);

// Test-case: An array with only one element should yield an empty array for its tail.
// const greeting = ["Hola"];
// console.log(tail(greeting)); // To show that empty array is printed.
// const outcome = tail(greeting);
// assertEqual(outcome, "Hola");

// Test-case: An empty array should yield an empty array for its tail
// const departure = [];
// console.log(tail(departure)); // To show that empty array is printed.
// const output = tail(departure);
// assertEqual(output, ["Goodbye"]);

