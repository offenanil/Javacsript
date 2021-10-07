console.log("error handling");

let name = "Anil";
name = undefined;
//here name = undefined then else block is executed then goes to to try and catch block but is name = Anil the if block is executed not goes to further down

if (name != undefined) {
  throw new Error("this is not error");
} else {
  console.log("this is undefined");
}
try {
  console.log("this is try block");
  ram(); //ram is is not defined so error send to atch block . BUt if no error in try block it directly jumps to finnaly block not going to catch block
} catch (err) {
  console.log("this is catch block");
  console.log(err); //error is printing in text form
} finally {
  console.log(
    "finally block is always executed regardless of the try and catch"
  );
}
