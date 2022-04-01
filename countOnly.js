// assertEqual function to compare Boolean values true/false.
// Compares actual result against what we expect the result to be.
const assertEqual = function (actual, expected) {
  const pass = "✅✅✅ Assertion Passed: ";
  const fail = "🛑🛑🛑 Assertion Failed: ";
  if (actual === expected) {
    console.log(`${pass}` + actual + " === " + expected);
  } else {
    console.log(`${fail}` + actual + " !== " + expected);
  }
};
// Function that takes in collection of items and returns the counts
// only for specific subset of those items.
const countOnly = function (allItems, itemsToCount) {
  const results = {}; // Save the items and their count here

  for (const item of allItems) {
    // Loop through each element in given array.
    if (itemsToCount[item]) {
      // If item can be found in itemsToCount object AND its value is TRUE
      if (results[item]) {
        // If the same item is found in the results object
        results[item] += 1;
      } else {
        results[item] = 1;
      }
    }
  }
  return results;
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
  "Joe",
];

const result1 = countOnly(firstNames, {
  Jason: true,
  Karima: true,
  Fang: true,
  Agouhanna: false,
});
// result1 = results object from countOnly function stored in this variable.

assertEqual(result1["Jason"], 1);
assertEqual(result1["Karima"], undefined); // Actual = "undefined". Karima is not saved in results.
assertEqual(result1["Fang"], 2);
assertEqual(result1["Agouhanna"], undefined);
assertEqual(result1["Kavith"], undefined);
