
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
let bookSelector;
let authorSelector;
let pagesSelector;
let colorSelector;

let bookName;
let bookAuthor;
let bookPages;
let bookColor;

let book; 


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

    bookSelector = document.querySelector(".bookTitleInput");
    authorSelector = document.querySelector(".authorNameInput");
    pagesSelector = document.querySelector(".pageCountInput");
    colorSelector = document.querySelector(".bookColorInput");

    submitButton = document.querySelector(".submitButton");

    
    submitButton.addEventListener("click", function() {
        bookName = bookSelector.value;
        bookAuthor = authorSelector.value;
        bookPages = pagesSelector.value;
        bookColor = colorSelector.value;
        if (bookName === "" || bookAuthor === "" || bookPages === "") {
            alert("All Fields are Required.");
        } else {
            for (i = 0; i < bookLimit; ++i) {
                book = new Book(bookName, bookAuthor, bookPages, bookColor);
                userLibrary[i] = book;
                showPage = true;
                //console.log(userLibrary[i]);
                return shelfSelection(book, showPage);
            }
        }
    });

   

}

//console.log(userLibrary);

//Makes the Book
function Book(bookName, authorsName, pageCount, colorBook) {
    this.bookName = bookName;
    this.bookAuthor = authorsName;
    this.bookPages = pageCount;
    this.bookColor = colorBook;
}

//Makes the shelve into an Object that hold books (Object within an Object)
function Shelf1(userBook) {
    this.book = userBook;
}



//Shelf Declarations 
let libraryPage = document.querySelector(".libraryCont");
let shelfDOMSelector = document.querySelector(".bookShelf");
let shelfChoicePageSelector = document.querySelector(".shelfChoiceSection");

let shelf1 = document.querySelector(".shelf1");
/*
let shelf2 = document.querySelector(".shelf2");
let shelf3 = document.querySelector(".shelf3");
let shelf4 = document.querySelector(".shelf4");
let shelf5 = document.querySelector(".shelf5");

let shelf1Button = document.querySelector(".shelf1Button");
let shelf2Button = document.querySelector(".shelf2Button");
let shelf3Button = document.querySelector(".shelf3Button");
let shelf4Button = document.querySelector(".shelf4Button");
let shelf5Button = document.querySelector(".shelf5Button");
*/

function shelfSelection(usersBook, showPage) {
    if (showPage === true) {
        inputSect.style.display = "none";
        shelfChoicePageSelector.style.display = "grid";
    } else if (showPage === false) {
        shelfChoicePageSelector.style.display = "none";
    }
    console.log(userLibrary);

    shelf1Button.addEventListener("click", function() {
        
        
    });

}

function bookSelection(usersBook, showPage) {

}






