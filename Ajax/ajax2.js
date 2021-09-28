console.log("Ajax");

let fetchBtn = document.getElementById("fetchBtn");
fetchBtn.addEventListener("click", buttonClickHandler);

function buttonClickHandler() {
  console.log("you have clicked the fetch data");
  //initiate an Xhr object
  const xhr = new XMLHttpRequest();
  //open the object
  xhr.open("GET", "anil.txt", true);
  //what to do on progress(og,ailptional)
  xhr.onprogress = function () {
    console.log("on progress");
  };
  //what to do when progress is ready
  xhr.onload = function () {
    console.log(this.responseText);
  };
  xhr.send();
}
