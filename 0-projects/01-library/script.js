const myLibrary = []; //Array criando ordem dos livros a serem inseridos

//Constructor para Book
function Book(title, author, pages, read){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

//Action
function addBookToLibrary(){
    let title = document.querySelector("#title").value;
    let author = document.querySelector("#author").value;
    let pages = document.querySelector("#pages").value;
    let read = document.querySelector("#read").checked;
    let newBook = new Book(title, author, pages, read);
    console.log(newBook);
}

let newBookbtn = document.querySelector("#button-3");
newBookbtn.addEventListener("click", 
    function(){
        let newBookForm = document.querySelector("#new-book-form");
        newBookForm.style.display="block";
})

document.querySelector("#new-book-form").addEventListener("submit", function())
