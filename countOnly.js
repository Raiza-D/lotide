const assertEqual = function(actual, expected) {
  const pass = "✅✅✅ Assertion Passed: ";
  const fail = "🛑🛑🛑 Assertion Failed: ";
  if (actual === expected) {
    console.log(`${pass}` + actual + " === " + expected);
  } else {
    console.log(`${fail}` + actual + " !== " + expected);
  }
};

const countOnly = function(allItems, itemsToCount) {
  let results = {};
    
  for (const item of allItems) {
    // item is Karl. itemsToCount[Karl] ---> Look into itemsToCount object and find Karl. This should be false bc Karl is not in the itemsToCount.
      // Karl is not stored anywhere. If you include Karl in test-code, you will get undefined === undefined.
    // item is Salima. itemsToCount[Salima]. This should be false bc Salima is not in the itemsToCount.
    // item is Agouhanna. itemsToCount[Agouhanna]. Agouhanna's value in the itemsToCount object false.
      //Her name not saved in results object above. So undefined.
    // item is Fang. itemsToCount[Fang], should be true.
    // item is Kavith. itemsToCount[Kavith]. Does not exist in itemsToCount.
    // item is Jason. itemsToCount[Jason].
    if (itemsToCount[item]) {
      if (results[item]) {
        // results[Fang] is false. Fang is not yet found/inside the results object.
        results[item] += 1;
      } else {
        results[item] = 1;
        // results = {Fang: 2, Jason: 1}
      }
    }
  }
  console.log(results);
  return results;  // Final results objects with all the names and their counts.
};

const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];

const result1 = countOnly(firstNames, {"Jason": true, "Karima": true, "Fang": true, "Agouhanna": false});
// result1 = {Fang: 2, Jason: 1}
// result1["Jason"] ---> actual. In result1, what is the count for Jason? Actual: 1. We expect 1. Terminal output: Assertion Passed.

assertEqual(
  result1["Jason"], 
  1
);

assertEqual(result1["Karima"], undefined); // Why is actual value "undefined?"
// Karima cannot be found in itemsToCount object.
assertEqual(result1["Fang"], 2);
assertEqual(result1["Agouhanna"], undefined); // Why is actual value "undefined?"
// Agouhanna has a "false" value assigned within itemsToCount object.
assertEqual(result1["Fang"], 3);
assertEqual(result1["Kavith"], undefined);