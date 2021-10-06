console.log("async Await");

async function Anil() {
  console.log(" i am first function");
  let response = await fetch("https://api.github.com/users");

  console.log("i am inside Anil function2");
  const users = await response.json();
  return users;
  return response;
}

console.log("i am before calling function");
let a = Anil();
console.log("i am after calling function");
console.log(a);
a.then((data) => console.log(data));
console.log(" i am the last function");
