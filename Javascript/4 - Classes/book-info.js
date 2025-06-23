//book info//

class Book {
    constructor(title, author, pages, read = false) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.read = read;
    }
    bookInfo(){
        const readStatus = this.read ? "read" : "not read yeat";
        return `Title: ${this.title}, Author: ${this.author}, Pages: ${this.pages}, Status: ${readStatus}`;
    }
}
const theHobbit = new Book ("The Hobbit", "Tolkien", 591, true);

console.log(theHobbit.bookInfo());

