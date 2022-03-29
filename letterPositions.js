const eqArrays = function (arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
};

const assertArraysEqual = function (actual, expected) {
  const arrayPass = "✅ Assertion passed. ";
  const arrayFail = "❌ Assertion failed. ";

  if (eqArrays(actual, expected)) {
    console.log(arrayPass + actual + " === " + expected);
  } else {
    console.log(arrayFail + actual + " !== " + expected);
  }
};

const letterPositions = function (sentence) {
  const results = {};

  for (let i = 0; i < sentence.length; i++) {
    if (sentence[i] !== " ") {
      if (!results[sentence[i]]) {
      results[sentence[i]] = [];
     }
     results[sentence[i]].push(i);
    }
  }
  // for Each loop. plus split method
  // and for...of starts from BEGINNING to END of array.  one method vs another. And why? Tradeoffs.
};

console.log(letterPositions("hello"));
console.log(letterPositions("Vacation time"));

assertArraysEqual(letterPositions("hello")["e"], [1]);
assertArraysEqual(letterPositions("Vacation time")["a"], [1, 3]); // Dealing with INDICES where letter appears.
//assertArraysEqual(letterPositions("Vacation time").v, [undefined]); // Why TypeError?

/* If using the for..of loop, this is what it would look like.
const letterPositions = function (sentence) {
  const results = {};
  let letterIndex = -1;

  for (const letter of sentence) {
    // Each iteration, increase value of letterIndex. So first one, value is now 0.
    // The zero represents INDEX of letter.
    letterIndex++;
    if (letter !== " ") {
      if (!results[letter]) {
        results[letter] = [];
      }
      results[letter].push(letterIndex); // Push value of element's INDEX.
    }
  }
  return results;
}; */