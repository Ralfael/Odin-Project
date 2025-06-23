// Define the Book constructor function
function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

// Prototype method to toggle the read status of a book
Book.prototype.toggleReadStatus = function () {
  this.read = !this.read;
};

// Define an array of books (initially empty)
let books = [];

// Function to display books on the page
function displayBooks() {
  const bookContainer = document.getElementById("book-container");

  // Clear existing book cards before re-creating them
  bookContainer.innerHTML = "";

  // Loop through the books array and create a card for each book
  books.forEach((book, index) => {
    const bookCard = document.createElement("div");
    bookCard.classList.add("book-card");

    // Populate the card with book information, read status, and buttons
    bookCard.innerHTML = `
      <h3>${book.title}</h3>
      <p><strong>Author:</strong> ${book.author}</p>
      <p><strong>Number of Pages:</strong> ${book.pages}</p>
      <p><strong>Read:</strong> ${book.read ? "Yes" : "No"}</p>
      <button class="remove-button" data-index="${index}">Remove</button>
      <button class="toggle-read-button" data-index="${index}">Toggle Read Status</button>
    `;

    // Append the card to the book container
    bookContainer.appendChild(bookCard);
  });

  // Attach event listeners to the remove buttons
  const removeButtons = document.getElementsByClassName("remove-button");
  for (const button of removeButtons) {
    button.addEventListener("click", removeBook);
  }

  // Attach event listeners to the toggle read status buttons
  const toggleReadButtons = document.getElementsByClassName("toggle-read-button");
  for (const button of toggleReadButtons) {
    button.addEventListener("click", toggleReadStatus);
  }
}

// Function to handle form submission and add a new book
function addBook(event) {
  event.preventDefault();

  const titleInput = document.getElementById("title");
  const authorInput = document.getElementById("author");
  const pagesInput = document.getElementById("pages");
  const readInput = document.getElementById("read");

  const newBook = new Book(
    titleInput.value,
    authorInput.value,
    parseInt(pagesInput.value),
    readInput.checked
  );

  books.push(newBook);

  // Clear the form after adding the book
  titleInput.value = "";
  authorInput.value = "";
  pagesInput.value = "";
  readInput.checked = false;

  displayBooks();
}

// Function to remove a book from the library
function removeBook(event) {
  const index = event.target.dataset.index;
  if (index !== undefined) {
    books.splice(index, 1);
    displayBooks();
  }
}

// Function to toggle the read status of a book
function toggleReadStatus(event) {
  const index = event.target.dataset.index;
  if (index !== undefined) {
    books[index].toggleReadStatus();
    displayBooks();
  }
}

// Function to toggle the visibility of the new book form
function toggleForm() {
  const formDiv = document.getElementById("new-book-form");
  formDiv.style.display = formDiv.style.display === "none" ? "block" : "none";
}

// Event listener for the "NEW BOOK" button
document.getElementById("new-book-button").addEventListener("click", toggleForm);

// Event listener for the form submission
document.getElementById("book-form").addEventListener("submit", addBook);

// Display initial set of books
displayBooks();
