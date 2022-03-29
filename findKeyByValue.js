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
  keyArray = Object.keys(object);
  //console.log(objKey);

  /*for (const key in object) {  // key represents ONLY the object's key
    //console.log(key);
    if (object[key] === value) {
      return key;
    }
  } */
  for (const arrElement of keyArray) {
    if (object[arrElement] === value) {
      return arrElement;
    }
  }
  return undefined;
};

const bestTVShowsByGenre = {
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama: "The Wire"
};

//console.log(bestTVShowsByGenre.comedy);
//console.log(bestTVShowsByGenre[comedy]);
//console.log(bestTVShowsByGenre["comedy"]);

console.log(findKeyByValue(bestTVShowsByGenre, "The Wire"));

// bestTVShowsByGenre.sci_fi;
// bestTVShowsByGenre["sci_fi"];

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That 70's Show"), undefined);