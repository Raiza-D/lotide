// Function to test our assertions
const assertEqual = function(actual, expected) {
  const pass = "✅✅✅ Assertion Passed: ";
  const fail = "🛑🛑🛑 Assertion Failed: ";
  if (actual === expected) {
    console.log(`${pass}` + actual + " === " + expected);
  } else {
    console.log(`${fail}` + actual + " !== " + expected);
  }
};

const countLetters = function(sentence) {
  const results = {};

  for (const letter of sentence) { // Loop through each letter
    if (!results[letter]) {  // If that letter is NOT found in the results object
      results[letter] = 0;  // Then add the letter to results and assign value of zero
    }
    results[letter]++;  // Letter already in results. Add 1 each time letter appears in iteration
  }
  return results;
};

// Test-codes to make sure correct data saved in results object's key-value pairs.
// console.log(countLetters("Hollywood"));
// console.log(countLetters("Mountain"));

const resultsContent = countLetters("Hollywood");

// Test assertions
assertEqual(resultsContent["o"], 3);
assertEqual(resultsContent["h"], 0); // Lowercase "h" does not exist, therefore undefined.



