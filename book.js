let myLibrary = []
const addBookBtn = document.querySelector('.add-book');
const libraryDiv = document.querySelector('.my-library');
const dialog = document.getElementById('adding-book');
const addBtn = document.querySelector('.submit-book');
const getForm = document.querySelector('.add-form');
// book constructor
function Book(title, author, pages, readStatus) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.readStatus = readStatus;

}

function addBookToLibrary(title, author, pages, read) {


    const newBook = new Book(title, author, pages, read);
    myLibrary.push(newBook);

    displayLibrary(newBook);
}

function displayLibrary(book) {

    let bookDiv = document.createElement('div');
    bookDiv.classList.add('book');

    let title = document.createElement('div');
    let author = document.createElement('div');
    let pages = document.createElement('div');
    let status = document.createElement('button');
    let removeButton = document.createElement('button');


    title.classList.add('title');
    author.classList.add('author');
    pages.classList.add('pages');
    removeButton.classList.add('remove-book');

    title.textContent = "Title: " + book.title;
    author.textContent = "Author: " + book.author;
    pages.textContent = book.pages + " pages";
    removeButton.textContent = "Remove";

    // status
    if (book.readStatus === false) {
        status.textContent = "Not Read";
        status.classList.add("not-read");
    }
    else {
        status.textContent = "Read";
        status.classList.add("read-book");
    }

    status.addEventListener('click', () => {
        if (status.textContent.includes("Not Read")) {
            status.textContent = "Read";
            status.classList.remove("not-read");
            status.classList.add("read-book");
            myLibrary.find(b => b.title === book.title).readStatus = true;
        } else {
            status.textContent = "Not Read";
            status.classList.remove("read-book");
            status.classList.add("not-read");
            myLibrary.find(b => b.title === book.title).readStatus = false;
        }
    })




    bookDiv.append(title, author, pages, status, removeButton);
    libraryDiv.appendChild(bookDiv);

    removeButton.onclick = function() {
        // myLibrary = myLibrary.filter(book => book.title !== book.title);
        let index = Array.prototype.findIndex.call(myLibrary, (x) => (x.title === book.title && x.pages === book.pages && (x.author === book.author)));
        console.log("index is: " + index);
        myLibrary.splice(index, 1);
        bookDiv.parentNode.removeChild(bookDiv);
    }


}

addBookBtn.addEventListener('click', () => {
    dialog.showModal();
})

addBtn.addEventListener("click", (event) => {
    event.preventDefault();
    const title = document.getElementById('title');
    const author = document.getElementById('author');
    const pages = document.getElementById('pages');
    const read = document.getElementById('read-check');

    addBookToLibrary(title.value, author.value, pages.value, read.checked);

    // resetting the values after closing dialog
    getForm.reset();
    dialog.close();
})

