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
  
  let keyWanted;

  for (const key in object) {  // key represents ONLY the object's key. NOT including its value.
    if (object[key] === value) { // Use bracket notation. key is dynamic here (changing w/ each iteration)
      keyWanted = key;
      return keyWanted;
    }
  }
  return undefined;
};

const bestTVShowsByGenre = {
  sciFi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama: "The Wire",
  horror: "Haunted",
  action: "Snowpiercer",
  drama: "Bridgerton"
};

// Tests to ensure findKeyByValue function output correct:
console.log(findKeyByValue(bestTVShowsByGenre, "The Wire"));

// Examples testing our assertions:
assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That 70's Show"), undefined);
assertEqual(findKeyByValue(bestTVShowsByGenre, "Snowpiercer"), "action");
