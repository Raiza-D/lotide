const eqArrays = function(arr1, arr2) {
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

/* With this code, the function has two parameters.
Therefore, if you pass in a test-code, that test code
should have two arguments. One will be two arrays being compared.
The other will be a true/false, which acts as our expected value. */

const assertArraysEqual = function(actual, expected) {
  const arrayPass = "✅ Assertion passed.";
  const arrayFail = "❌ Assertion failed.";
  if (actual === expected) {
    console.log(`${arrayPass}`);
  } else {
    console.log(`${arrayFail}`);
  }
};

assertArraysEqual(false, false);
assertArraysEqual(true, false);
assertArraysEqual(true, true);

assertArraysEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); /*The second argument value should MATCH
the expected evaluation of the two arrays after being passed into eqArrays. */

assertArraysEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), true);


/* Another possible solution:
This function has one parameter. Therefore, the test code
will only have one argument being passed in.
The true/false value result from eqArrays is being compared with the
result of conditional if statement.
const assertArraysEqual = function (areArraysEqual) {
  const arrayPass = "✅ Assertion passed."
  const arrayFail = "❌ Assertion failed."
  if (areArraysEqual) {
    console.log(`${arrayPass}`);
  } else {
    console.log(`${arrayFail}`);
  }
};

//Test-code:
assertArraysEqual(eqArrays([1, 2, 3], [1, 2, 3]));
assertArraysEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]));
*/



