// FUNCTION IMPLEMENTATION HERE:
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log("✅✅✅ Assertion Passed: " + actual + " === " + expected);
  } else {
    console.log("🛑🛑🛑 Assertion Failed: " + actual + " !== " + expected);
  }
};

// TEST CODE:
assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1,1);
// Testing scenarios of non-identical values:
assertEqual("Weekend", "Weekend");
assertEqual(1,5);