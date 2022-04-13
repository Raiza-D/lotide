const assertEqual = function(actual, expected) {
  const pass = "✅✅✅ Assertion Passed: ";
  const fail = "🛑🛑🛑 Assertion Failed: ";
  if (actual === expected) {
    console.log(`${pass}` + actual + " === " + expected);
  } else {
    console.log(`${fail}` + actual + " !== " + expected);
  }
};

// findKeyByValue takes in an object and a value.
// Scan the object and return the first key containing the value specified.
const findKeyByValue = function(object, value) {
  
  for (const key in object) {  // key represents ONLY the object's key. NOT including its value.
   if (object[key] === value) { // Use bracket notation. key is dynamic here (changing w/ each iteration)
    return key;
   }
  }
  return undefined;
};

// const bestTVShowsByGenre = {
//   sciFi: "The Expanse",
//   comedy: "Brooklyn Nine-Nine",
//   drama: "The Wire",
//   horror: "Haunted",
// };

// Tests to ensure findKeyByValue function output accurate:
// console.log(findKeyByValue(bestTVShowsByGenre, "The Wire"));

// Examples testing our assertions:
// assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
// assertEqual(findKeyByValue(bestTVShowsByGenre, "That 70's Show"), undefined);

module.exports = findKeyByValue;


/* Test-scenario I thought of: What if your object contains two instances of the same key,
but the actual value of each of the identical keys are different?
My Terminal output is "undefined". Why?
Mentor provided this code solution.
1. The shows that belong to the same genre, MUST be placed into an array.
2. Within the for..in loop, add IF statement. Then use .includes method.
Object containing that key in current iteration will be checked to see if its array
(and here we know it's an array) INCLUDES the value we specified as our second argument.
Then return the key.

If you don't follow #1 above, instead you list more than one of the same genre,
but the values for each are different, this is what will happen.
In the for..in loop, JavaScript will override the value of the first genre instance
with value of the second genre's instance. E.g. "The Wire" will get overwritten by
"Bridgerton" when JS reaches the second instance of drama. Use assertEqual to test this.
I would not have known the above. This advanced topic/developer territory.

const findKeyByValue = function(object, value) {
  
  for (const key in object) {  // key represents ONLY the object's key. NOT including its value.
    // Check to see if key in current iteration has a value that has
    if (object[key].includes(value)) { // Checking to see if key contains an array of values.
      return key;
    }
    if (object[key] === value) { // Use bracket notation. key is dynamic here (changing w/ each iteration)
      console.log(value);
      return key;
    }
  }
  return undefined;
};

const bestTVShowsByGenre = {
  sciFi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama: ["The Wire", "Bridgerton"],
  horror: "Haunted",
};

// Tests to ensure findKeyByValue function output correct:
console.log(findKeyByValue(bestTVShowsByGenre, "The Wire"));

// Examples testing our assertions:
assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
// assertEqual(findKeyByValue(bestTVShowsByGenre, "That 70's Show"), undefined);

// Assertion test to demonstrate that value of first genre instance gets replaced
// with value of same genre's second instance within the object.
assertEqual(findKeyByValue(bestTVShowsByGenre, "Bridgerton"), "drama");
*/
