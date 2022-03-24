const assertEqual = function(actual, expected) {
  const pass = "✅✅✅ Assertion Passed: ";
  const fail = "🛑🛑🛑 Assertion Failed: ";
  if (actual === expected) {
    console.log(`${pass}` + actual + " === " + expected);
  } else {
    console.log(`${fail}` + actual + " !== " + expected);
  }
};

//Tail function that returns the "tail" of an array: everything but the first item (head).
const tail = function(array) {
  return array.slice(1);
};

/*Test-case where the assertion will always fail.
Can't compare an array with another array.
Even though the values inside both arrays are the same.

const result = tail(["Hello", "Lighthouse", "Labs"]);
assertEqual(result, ["Lighthouse", "Labs"]); */

const result = tail(["Hello", "Lighthouse", "Labs"]);
assertEqual(result.length, 2);
assertEqual(result[0], "Lighthouse");
assertEqual(result[1], "Labs");

const words = ["Yo Yo", "Lighthouse", "Labs"];
console.log(tail(words));
assertEqual(words.length, 3);

//Test-case: An array with only one element should yield an empty array for its tail.
const greeting = ["Hola"];
console.log(tail(greeting)); // To show that empty array is printed.
const outcome = tail(greeting);
assertEqual(outcome, "Hola");

//Test-case: An empty array should yield an empty array for its tail
const departure = [];
console.log(tail(departure)); // To show that empty array is printed.
const output = tail(departure);
assertEqual(output, ["Goodbye"]);

