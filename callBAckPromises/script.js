// console.log("promises");

function func1() {
  return new Promise(function (resolve, reject) {
    setTimeout(() => {
      const error = true;
      if (!error) {
        console.log("function says:your proomise has been resolved");
        resolve();
      } else {
        console.log("function says:error has been occured..sorry");
        reject("i am sorry for the error");
      }
    }, 2000);
  });
}

func1()
  .then(function () {
    console.log("Anil:thanks for the success");
  })

  .catch(function (error) {
    console.log("Anil:sorry for the unsuccess" + error);
  });

// func1().catch(function (error) {
//   console.log("Anil:sorry for the uncesses" + error);
// });
