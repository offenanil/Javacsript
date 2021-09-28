console.log("Arrays class");

const arr1 = new Array(23, 56, "Anil");
console.log(arr1);
console.log(arr1.length);
console.log(Array.isArray(arr1));
arr1[0] = "Ram";
console.log(arr1);

//Accessing array elements:-

let arr = ["first element", "second element", "last element"];
console.log(arr[0]); // output ' first element'
console.log(arr[1]); //  output ' second element'
console.log(arr[arr.length - 1]); //  output ' last element'

//Length of an Array

let age = [33, 55, 67, 18];
console.log(age.length);

//indexOf():- This method Search the array for an element and returns its position

let std = ["Mark", "John", "Jonas", "Jack"];
let a = std.indexOf("John");

//sort()

let age1 = [33, 55, 67, 18];
let s_age = age1.sort();
console.log(s_age);
//18,33,55,67

//reverse():

let age2 = [33, 55, 67, 18];
let r_age = age2.reverse(age2);
//18,67,55,33

// concat(): This method will returns a new array comprised of this array joined with an other array or value

let alpha = ["a", "b", "c"];
let numeric = [1, 2, 3];
var alphaNumeric = alpha.concat(numeric); // a,b,c,1,2,3

//push()

let fruits = ["Banana", "Orange", "Apple"];
let len = fruits.push("Mango");
// ["Apple", "Banana", "Orange", "Mango"]

// shift()This method is used to remove an item from the beginning of an Array
let first = fruits.shift(); // remove Apple from the front
// ["Banana", "Orange"]
console.log(fruits);

//unshift():- This method is used to add an item to the beginning of an Array

let neLength = fruits.unshift("Strawberry");
console.log(fruits);
// add to the front
// ["Strawberry", "Banana", "Orange"]

console.log(neLength);

let phal = ["mango", "otrange", "banana"];
// let newPhal = phal.unshift("junar");
let newPhal = phal.push("suntala");
console.log(phal);
