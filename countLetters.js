// Function to test our assertions
/*const assertEqual = function (actual, expected) {
  const pass = "✅✅✅ Assertion Passed: ";
  const fail = "🛑🛑🛑 Assertion Failed: ";
  if (actual === expected) {
    console.log(`${pass}` + actual + " === " + expected);
  } else {
    console.log(`${fail}` + actual + " !== " + expected);
  }
}; */

const countLetters = function(sentence) {
  let letterCount = "";

  for (let i = 0; i < sentence.length; i++) {
   if (sentence[i]) {
     if (letterCount[i]) {
       letterCount++;
     } else {
       letterCount[i] = 1;
     }
   }
  }
  return letterCount;
};

console.log(countLetters("Hollywood"));
