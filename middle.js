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

const assertArraysEqual = function(actual, expected) {
  const arrayPass = "✅ Assertion passed. ";
  const arrayFail = "❌ Assertion failed. ";

  if (eqArrays(actual, expected)) {
    console.log(arrayPass + actual + " === " + expected);
  } else {
    console.log(arrayFail + actual + " !== " + expected);
  }
};

const middle = function(array) {
  let middleArr = [];

    if (array.length === 1 || array.length === 2) {
      return middleArr;
    }
    if (array.length % 2 === 0) {
      let y = array.length / 2;   // Contains the second middle element. Working with INDEX.
      let x = y - 1  // Contains the first middle element, which is the one BEFORE y. Working with INDEX.
      middleArr.push(array[x]); // Pushing ELEMENT indexed at x
      middleArr.push(array[y]); // Pushing ELEMENT indexed at y
    }
    else {
      let b = (array.length - 1) / 2 // Result is the array's INDEX.
      middleArr.push(array[b]);  // Accessing array's ELEMENT then pushing to middleArr.
    }
    return middleArr;
};

// Test-cases:
console.log(middle([1, 2])); // Should return an empty array
console.log(middle([1, 2, 3])); // Should return the middle element of 2
console.log(middle([1, 2, 3, 4])); // Should return the two middle elements of 2 & 3

//Test-assertion:
assertArraysEqual(middle([1, 2, 3]), [2]);

/* Practice to understand HOW to get middle elements.
Odd number of elements: [1, 2, 3, 4, 5]
To get the middle element of 3, take element length and minus 1.
5 - 1 = 4
Then take answer and divide by 2.
4 / 2 = 2 (This means INDEX 2, which is ELEMENT 3).
Middle numberin array:

Even number of elements: [1, 2, 3, 4]
To get the two middle elements, divide element length by 2.
The above action will give you one of the two middle elements, specifically the second middle.
4 / 2 = 2 (This number references the INDEX value. Index 2, which is element 3.)

Then to derive the other middle element (the first middle),
take the INDEX value from prior and minus 1.
2 - 1 = 1 (This number references the INDEX value. Index 1, which is element 2.)

Another practice set:
Odd number of elements: [1, 2, 3, 4, 5, 6, 7]
Formula: 7 - 1 = 6; 6 / 2 = 3 (This is INDEX 3, which is ELEMENT 4.)
The middle element in this array is 4.

Even number of elements: [1, 2, 3, 4, 5, 6]
Formula: 6 / 2 = 3 (This is INDEX 3, which is ELEMENT 4.)
3 - 1 = 2 (This is INDEX 2, which is ELEMENT 4.)
The middle elements in this array are 3 and 4.
*/

/* Another way to write middle function.
Difference is in the way the else blocks and second if blocks
are written. In this way, you're storing the ELEMENTS into the variables.
Then you're pushing those variables containing the elements into the new array.
Versus storing the INDECES in the variables. Then accessing the ELEMENTS,
then pushing those elements into the new array.

const middle = function(array) {
  let middleArr = [];

  if (array.length === 1 || array.length === 2) {
    return middleArr;
    }
  if (array.length % 2 === 0) {
    let y = array[(array.length / 2)]; // The code inside sq brackets gives you INDEX.
    let x = array[(y - 1)]; // You're accesing the ELEMENT inside array[i] and storing it in x.
    middleArr.push(x); // You're accessing the ELEMENT in [x] pushing it.
    middleArr.push(y); // You're accessing the ELEMENT in [y] and pushing it.
}
else (array.length % 2 !== 0 ) {
      let b = array[(array.length - 1) / 2] // The code inside the sq brackets gives you INDEX.
      // Another way to read this: array[i].
      // So you're accessing the ELEMENT by saying array[formula to get index].
      // That element is stored in variable 'b'.
      middleArr.push(b); // The "push(b) contains actual array ELEMENT.
    }
  }
  return middleArr;
}; */
