
//The Users library
function bookLibrary() { 

}

//Page Selectors
const sideContentPage = document.querySelector(".sideCont");
const libraryContentPage = document.querySelector(".LibraryCont");


//Shelf Selectors
let shelfOne = document.querySelector(".shelf1");
let shelfTwo = document.querySelector(".shelf2");
let shelfThree = document.querySelector(".shelf3");
let shelfFour = document.querySelector(".shelf4");
let shelfFive = document.querySelector(".shelf5");

//Button Selectors
const startBTN = document.querySelector(".startBTN");
const removeBTN = document.querySelector(".removeBTN");

//The page for input Selection on book
let inputSect = document.querySelector(".inputSection");

let startPage = document.querySelector(".startSection");
let colorPage = document.createElement("div");


//boolean to hide/show a page
let showPage;

startBTN.addEventListener("click", function() {
    showPage = true;
    startPageFunc(showPage);
});

function startPageFunc(showPage) {
    if (showPage === true) {
        startPage.style.display = "none";
    } else if (showPage === false) {
        startPage.style.display = "grid";
    }
    return inputPageFunc(showPage);
}


//Users Library
const userLibrary = []; 


//Book Info Variable Declarations 
let bookName;
let bookAuthor;
let bookPages;
let bookColor;


//Submit button Declarations
let submitButton;

let i;
let bookLimit = 30;

function inputPageFunc(showPage) {
    if (showPage === true) {
        inputSect.style.display = "grid";
    } else if (showPage === false) {
        inputSect.style.display = "none";
    }

    bookName = document.querySelector(".bookTitleInput");
    bookAuthor = document.querySelector(".authorNameInput");
    bookPages = document.querySelector(".pageCountInput");
    bookColor = document.querySelector(".bookColorInput");

    submitButton = document.querySelector(".submitButton");

    let name = bookName.value;
    let author = bookAuthor.value;
    let pages = bookPages.value;
    let color = bookColor.value;

    let book; 

    
    submitButton.addEventListener("click", handleClick);

    function handleClick() { 
        if (name === "" || author === "" || pages === "" ) {
            alert("All Fields are Required.");
        } else {
            for (i = 0; i < bookLimit; ++i) {
                book = new Book(name, author, pages, color);
                userLibrary[i] = book;
                break;
            }
        }
    }

}

console.log(userLibrary);

//Makes the Book
function Book(bookName, authorsName, pageCount, colorBook) {
    this.bookName = bookName;
    this.bookAuthor = authorsName;
    this.bookPages = pageCount;
    this.bookColor = colorBook;
}





