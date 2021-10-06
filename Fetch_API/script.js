console.log("Fetch API");

let myBtn = document.getElementById("myBtn");

let content = document.getElementById("content");

function getData1() {
  console.log("started getData");
  let url = "anil.txt";
  fetch(url)
    .then((response) => {
      console.log("inside first then");
      return response.text();
    })
    .then((data) => {
      console.log("inside second then");
      console.log(data);
    });
}

console.log("Before running getData");
getData1();
console.log("After running getData");

function getData() {
  let url = "https://api.github.com/users";
  fetch(url)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log(data);
    });
}

// getData();

// function postData() {
//   let url = "http://dummy.restapiexample.com/api/v1/create";
//   data = '{"name":"Anil6567","salary":"125653","age":"23"}';
//   params = {
//     method: "post",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: data,
//   };
//   fetch(url, params).then(response=> response.json())
//     .then(data => console.log(data)
// }
// postData();

function postData() {
  url = "http://dummy.restapiexample.com/api/v1/create";
  data = '{"name":"harglry347485945","salary":"123","age":"23"}';
  params = {
    method: "post",
    headers: {
      "Content-Type": "application/json",
    },
    body: data,
  };
  fetch(url, params)
    .then((response) => response.json())
    .then((data) => console.log(data));
}

postData();
