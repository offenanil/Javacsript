console.log("we are reading about string");

var myString = "JavaScript!!!";
console.log(myString.charAt(7));
//output: i

var str1 = "JavaScript";
var str2 = str1.concat(" is", "awesome");
console.log(str2);
//Output: JavaScript is awesome

//indexOf(char/substring)
var str1 = "Hi, my name is Sam!";
var str2 = str1.indexOf("locate");
//Output: -1

var myString = "javascript Node.js";
console.log(myString.lastIndexOf("N"));
//output: 11

// slice(start, [end]): This method returns a substring of the string based on the "start" and "end" index , it will not include the "end" index itself. "End" argument is optional, and if none is specified, the slice includes all characters from "start" to end of string.
var text = "programming";
var mystr = text.slice(0, 4);
console.log(mystr);
//Output:- "prog"

var txt = "a,b,c,d,e"; // String
txt.split(","); // Split on commas
txt.split(" "); // Split on spaces

//substring(from, [to])
var myString = "javascript Programming";
myString = myString.substring(0, 10);
console.log(myString);
//output: javascript

//toLowerCase()
var myString = "JAVASCRIPT";
myString = myString.toLowerCase();
console.log(myString);
//output: javascript

var str = "Welcome to programming World!!";
var pos = str.search("programming");

var str = "Apple, Banana, Kiwi";
var res = str.substr(7, 6);
// Output: Banana
