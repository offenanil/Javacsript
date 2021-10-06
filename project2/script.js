console.log("project2");
function Book(name, author, type) {
  this.name = name;
  this.author = author;
  this.type = type;
}
//display constructor

function Display() {}

//add method to display prototype
Display.prototype.add = function (book) {
  console.log("Adding to UI");
  let tableBody = document.getElementById("tableBody");
  let uiDisplay = `
  <tr>
      
      <td>${book.name}</td>
      <td>${book.author}</td>
      <td>${book.type}</td>
    </tr>`;
  tableBody.innerHTML += uiDisplay;
};
// implemnting the clear function
Display.prototype.clear = function () {
  let libraryForm = document.getElementById("libraryForm");
  libraryForm.reset();
};
// implemnting the valiate function
Display.prototype.validate = function (book) {
  if (book.name.lenth < 2 || book.author.length < 2) {
    return false;
  } else {
    return true;
  }
};

Display.prototype.show = function (type, showMsg) {
  let message = document.getElementById("message");
  message.innerHTML = `
  <div class="alert alert-${type} alert-dismissible fade show" role="alert">
  <strong>Message:</strong> ${showMsg}
  <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
</div>`;
  setTimeout(() => {
    message.innerHTML = " ";
  }, 2000);
};

//add  submit eventlistner to library form

let libraryForm = document.getElementById("libraryForm");
libraryForm.addEventListener("submit", libraryFormSubmit);

function libraryFormSubmit(e) {
  console.log("you have clicked the the submitted form");

  let name = document.getElementById("bookName").value;
  let author = document.getElementById("author").value;
  //   let type = document.getElementById("types").value;

  let programming = document.getElementById("programming");
  let novel = document.getElementById("novel");
  let cooking = document.getElementById("cooking");
  let type;
  if (programming.checked) {
    type = programming.value;
  } else if (novel.checked) {
    type = novel.value;
  } else if (cooking.checked) {
    type = cooking.value;
  }
  let book = new Book(name, author, type);
  console.log(book);

  let display = new Display();
  if (display.validate(book)) {
    display.add(book);
    display.clear();
    display.show("Congratulations!", "Your book has been successfully added");
  } else {
    display.show("warning", "You canot add this book");
  }

  e.preventDefault();
}
