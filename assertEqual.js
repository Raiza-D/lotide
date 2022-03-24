/*(Mod1,Wk1: assertEqual > Implement assertEqual):
Original code using concatenated strings.

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

/* Code Review notes from  mentor Konstantin Toroshchin:
Suggestion to improve code further: use ternary operator.
Warned against ternary operator. Code can become hard to read,
so best to use if/else statements, like what I have.

const assertEqual = function(actual, expected) {
  const result = actual === expected ? `✅✅✅ Assertion Passed: ${actual} === ${expected}` 
      : `🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`
  return result;
};
console.log(assertEqual("Lighthouse Labs", "Bootcamp"));
console.log(assertEqual(1,1));
console.log(assertEqual("Weekend", "Weekend"));
console.log(assertEqual(1,5)); */
