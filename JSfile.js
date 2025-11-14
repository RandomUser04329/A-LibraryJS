
//Page Selectors
const sideContentPage = document.querySelector(".sideCont");
const libraryContentPage = document.querySelector(".LibraryCont");

//Users Library
const userLibrary = [];


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
                return shelfSelection(book, showPage);
            }
        }
    });
}


//Makes the Book
function Book(bookName, authorsName, pageCount, colorBook) {
    this.bookName = bookName;
    this.bookAuthor = authorsName;
    this.bookPages = pageCount;
    this.bookColor = colorBook;
}

const shelf1Arr = [];
const bookArr = [];


//Makes the shelf hold arrays to allocate which shelf and which book position the book is stored at
function Shelf(userBook, shelfPos, bookPos) {

    for (i = 0; i < 5; i++) {
        if (shelfPos === i) {
            shelf1Arr[i] = bookArr;
            if (i === bookPos) {
                shelf1Arr[i] = bookArr;
                bookArr[i] = userBook;
                return confirmedPageFunc();
            }
        }
    }
}



//Shelf Declarations 
let libraryPage = document.querySelector(".libraryCont");
let shelfDOMSelector = document.querySelector(".bookShelf");
let shelfChoicePageSelector = document.querySelector(".shelfChoiceSection");

let shelf1 = document.querySelector(".shelf1");
let shelf1Button = document.querySelector(".shelf1Button");

let shelfPos = 0;
let bookPos = 0;


function shelfSelection(usersBook, showPage) {
    if (showPage === true) {
        inputSect.style.display = "none";
        shelfChoicePageSelector.style.display = "grid";
    } else if (showPage === false) {
        shelfChoicePageSelector.style.display = "none";
    }

    shelf1Button.addEventListener("click", function() {
        shelfPos = 1;
        showPage = true;
        return bookSelection(usersBook, showPage, shelfPos)
    });

}

//Book choice selectors
let bookPage = document.querySelector(".bookChoiceSelection");
let book1Button = document.querySelector(".book1Button");

function bookSelection(usersBook, showPage, shelfPos) {
    if (showPage === true) {
        shelfChoicePageSelector.style.display = "none";
        bookPage.style.display = "grid";
    } else if (showPage === false) {
        bookPage.style.display = "none";
    }

    book1Button.addEventListener("click", function() {
        bookPos = 1;
        return Shelf(usersBook, shelfPos, bookPos); 
    });
}



//Last page(confirmed/done page) selectors/
let confirmedPage = document.querySelector(".confirmedSect");
let backtoMain = document.querySelector(".backButton");


function confirmedPageFunc() {
    confirmedPage.style.display = "grid"
    bookPage.style.display = "none";
    console.log(shelf1Arr);


    backtoMain.addEventListener("click", function() {
        showPage = false;
        confirmedPage.style.display = "none";
        return startPageFunc(showPage);
    })
}






