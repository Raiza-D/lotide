const assertEqual = require("../assertEqual");
const head = require("../head");

// TEST CODE for head function
console.log(head([1, 2, 3, 4]));
console.log(head(["Everest", "Waddington", "Annapurna"]));

// TEST CODE for head function, which makes use of assertEqual function. Checking assertions.
assertEqual(head([5, 6, 7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
assertEqual(head([9]), 9); //Test-case an array with only one element. Should still yield that one element as its head.
assertEqual(head([]), 25); //Test-case an empty array should yield "undefined" as its head.
assertEqual(head([-20, 9, -99]), 98);