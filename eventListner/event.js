console.log("event and pbject in javascript");
document.getElementById("heading").addEventListener("click", function (e) {
  console.log("you have clicked the heading");
  variable = e.target;
  variable = e.target.className;
  variable = Array.from(e.target.classList);

  variable = e.target.id;
  variable = e.offsetX; //from target heading howfar you clivk in x direction
  //   variable = e.offsetY;
  variable = e.clientX; //how far from the browser
  //   variable = e.clientY;
  console.log(variable);
});
