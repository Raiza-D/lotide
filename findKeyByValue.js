const assertEqual = function(actual, expected) {
  const pass = "✅✅✅ Assertion Passed: ";
  const fail = "🛑🛑🛑 Assertion Failed: ";
  if (actual === expected) {
    console.log(`${pass}` + actual + " === " + expected);
  } else {
    console.log(`${fail}` + actual + " !== " + expected);
  }
};

const findKeyByValue = function(object, value) {

  for (const key in object) {  // key represents ONLY the object's key. NOT including its value.
    if (object.key === value) { // Use bracket notation. key is dynamic here (changing w/ each iteration)
      return key;
    }
  }
  return undefined;
};

// Tests to ensure findKeyByValue function output correct:
console.log(findKeyByValue(bestTVShowsByGenre, "The Wire"));

const bestTVShowsByGenre = {
  sciFi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama: "The Wire"
};

// Examples testing our assertions:
assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That 70's Show"), undefined);

/* Method below makes use of Object.keys(). Keys are stored in an array.
const findKeyByValue = function (object, value) {
  keyArray = Object.keys(object);

  for (const arrElement of keyArray) {
    if (object[arrElement] === value) {
      return arrElement;
    }
  }
  return undefined;
}; */

/* Test-codes to demonstrate why we cannot use dot notation in Line 14:
console.log(bestTVShowsByGenre.comedy);
console.log(bestTVShowsByGenre[comedy]);
console.log(bestTVShowsByGenre["comedy"]); */