// FUNCTION IMPLEMENTATION HERE

/* (Mod1,Wk1: assertEqual > Implement assertEqual):
Original code with concatenated strings.

const assertEqual = function (actual, expected) {
  const pass = "";
  if (actual === expected) {
    console.log("✅✅✅ Assertion Passed: " + actual + " === " + expected);
  } else {
    console.log("🛑🛑🛑 Assertion Failed: " + actual + " !== " + expected);
  }
};*/

/* (Mod1,Wk1: assertEqual > Improve assertEqual):
Updated code that uses template literals. */

const assertEqual = function(actual, expected) {
  const pass = "✅✅✅ Assertion Passed: ";
  const fail = "🛑🛑🛑 Assertion Failed: ";
  if (actual === expected) {
    console.log(`${pass}` + actual + " === " + expected);
  } else {
    console.log(`${fail}` + actual + " !== " + expected);
  }
};

// TEST CODE:
assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1,1);
// Testing scenarios of non-identical values:
assertEqual("Weekend", "Weekend");
assertEqual(1,5);


