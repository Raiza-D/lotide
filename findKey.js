/* assertEqual will take two arguments: actual result, expected
Actual result from running findKey func. Expected is our expected outcome. */
const assertEqual = function(actual, expected) {
  const pass = "✅✅✅ Assertion Passed: ";
  const fail = "🛑🛑🛑 Assertion Failed: ";
  if (actual === expected) {
    console.log(`${pass}` + actual + " === " + expected);
  } else {
    console.log(`${fail}` + actual + " !== " + expected);
  }
};

/* findKey function takes two parameters: an object and a callback
Function will scan the object and return the first key for
which callback returns a truthy value. If no key is found, return "undefined". */
const findKey = function(object, callback) {
  for (const key in object) {
    if (callback(object[key])) {
      return key;
    }
  }
  return undefined;
};

/* Store result from running findKey function. So can be used as an
argument when using assertEqual function. Result will be key name. */
const resultsOne = findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 2); // => "noma". Wrap this in a console.log to make sure result correct.

/*Store result from running findKey function. So can be used as an
argument when using assertEqual function. Result will be key name. */
const resultsTwo = findKey({
    London: { rating: 9 },
    Paris: { rating: 8 },
    Vancouver: { rating: 10 },
    Berlin: { rating: 7 },
    Brighton: { rating: 8 },
  },
  x => x.rating === 9
); // => London. Wrap this in a console.log to make sure result correct.

const resultsThree = findKey({
    Frosty: { level: "Novice" },
    Everest: { level: "Expert" },
    Rainier: { level: "Intermediate" },
    Denali: { level: "Expert" }
  },
  x => x.level === "Easy" // Will return undefined. No key found that has value of "Easy"
); // => Everest

assertEqual(resultsOne, "noma");
assertEqual(resultsTwo, "London");
assertEqual(resultsThree, undefined);