console.log("connected");
let headOne = document.querySelector("#one");
let headTwo = document.querySelector("#two");
let headThree = document.querySelector("#three");

headOne.addEventListener("mouseover", function () {
  //
  headOne.textContent = "mouse currently over me";
  headOne.style.color = "red";
});

headTwo.addEventListener("mouseout", function () {
  //
  headOne.textContent = "Hover Over Me";
  headOne.style.color = "black";
});

headTwo.addEventListener("click", function () {
  //
  headTwo.textContent = "Clicked On";
  headTwo.style.color = "green";
});

headThree.addEventListener("dblclick", function () {
  //
  headThree.textContent = "i am double Clicked ";
  headThree.style.color = "orange";
});
