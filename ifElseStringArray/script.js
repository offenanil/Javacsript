//remember to use strict mode at the beginning of the program

"use strict";

let x = 30;
// x = 3;
console.log("the value of x is " + x);

let meroMarks = {
  nepali: 30,
  math: 45,
  science: 78,
};
console.log(meroMarks);
console.log(typeof meroMarks);

let numbers = parseFloat("34.098");
console.log(numbers);
console.log(numbers.toFixed(3), typeof numbers);
// Type conversion
console.log("Welcome to tut5");
let myVar;
myVar = String(34);
// console.log(myVar, (typeof myVar));
let booleanVar = String(true);
// console.log(booleanVar, (typeof booleanVar));

let date = String(new Date());
// console.log(date, (typeof date));

let arr = String([1, 2, 3, 4, 5]);
// console.log(arr.length, (typeof arr));

let i = 75;
// console.log(i.toString())

let stri = Number("3434");
stri = Number("343d4");
stri = Number(false);
stri = Number([1, 2, 3, 4, 5, 6, 7, 8, 9]);
// console.log(stri, (typeof stri));

let number = parseFloat("34.098");
// console.clear();
