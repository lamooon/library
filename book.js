const myLibrary = [new Book("test", "test", 23, false), new Book("test2", "test2", 45, true)];
const library = document.querySelector('.my-library');
const addBookBtn = document.querySelector('.add-book');
const dialog = document.getElementById('adding-book');
const inputReader = document.querySelector('input');
const addBtn = document.querySelector('.submit-book');
// book constructor
function Book(title, author, pages, readStatus) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.readStatus = readStatus;

    this.info = function() {
        let initial = this.title + " by " + this.author + ", " + this.pages + " pages, ";
        if (this.readStatus === false) {
            return (initial + "not read yet");
        }
        else {
            return (initial + "read.");
        }
    }
}

function addBookToLibrary(title, author, pages, read) {

    const newBook = new Book(title, author, pages, read);
    myLibrary.push(newBook);

    displayLibrary();
}

function displayLibrary() {



    myLibrary.forEach((book) => {
        let bookDiv = document.createElement('div');
        bookDiv.classList.add('book');

        let title = document.createElement('div');
        let author = document.createElement('div');
        let pages = document.createElement('div');
        let status = document.createElement('div');

        title.classList.add('title');
        author.classList.add('author');
        pages.classList.add('pages');
        status.classList.add('status');

        title.textContent = "Title: " + book.title;
        author.textContent = "Author: " + book.author;
        pages.textContent = book.pages + " pages";
        if (book.readStatus === false) {
            status.textContent = "Status: Not Read.";
        } else {
            status.textContent = "Read";
        }

        bookDiv.append(title, author, pages, status);
        library.appendChild(bookDiv);
    })
}

addBookBtn.addEventListener('click', () => {
    dialog.showModal();
})

addBtn.addEventListener("click", (event) => {
    event.preventDefault();
    const title = document.getElementById('title');
    const author = document.getElementById('author');
    const pages = document.getElementById('pages');
    const read = document.getElementById('read');

    addBookToLibrary(title.value, author.value, pages.value, read.checked);
    dialog.close();
})



displayLibrary();
