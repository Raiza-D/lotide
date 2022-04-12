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

// Testing scenarios of with one having non-identical values:
assertEqual("Weekend", "Weekend");
assertEqual(1,5);

