
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
        if (i === shelfPos) {
            shelf1Arr[i] = bookArr;
            if (i === bookPos) {
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
let shelf2 = document.querySelector(".shelf2");
let shelf3 = document.querySelector(".shelf3");
let shelf4 = document.querySelector(".shelf4");
let shelf5 = document.querySelector(".shelf5");

let shelf1Button = document.querySelector(".shelf1Button");
let shelf2Button = document.querySelector(".shelf2Button");
let shelf3Button = document.querySelector(".shelf3Button");
let shelf4Button = document.querySelector(".shelf4Button");
let shelf5Button = document.querySelector(".shelf5Button");

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

    shelf1Button.addEventListener("mouseenter", function() {
        shelf1.classList.add("glow");
    });
    shelf1Button.addEventListener("mouseleave", function() {
        shelf1.classList.remove("glow");
    });

    shelf2Button.addEventListener("mouseenter", function() {
        shelf2.classList.add("glow");
    });
    shelf2Button.addEventListener("mouseleave", function() {
        shelf2.classList.remove("glow");
    });

    shelf3Button.addEventListener("mouseenter", function() {
        shelf3.classList.add("glow");
    });
    shelf3Button.addEventListener("mouseleave", function() {
        shelf3.classList.remove("glow");
    });

    shelf4Button.addEventListener("mouseenter", function() {
        shelf4.classList.add("glow");
    });
    shelf4Button.addEventListener("mouseleave", function() {
        shelf4.classList.remove("glow");
    });

    shelf5Button.addEventListener("mouseenter", function() {
        shelf5.classList.add("glow");
    });
    shelf5Button.addEventListener("mouseleave", function() {
        shelf5.classList.remove("glow");
    });

}

//Book choice selectors
let bookPage = document.querySelector(".bookChoiceSelection");

let book1 = document.querySelector(".book1");
let book2 = document.querySelector(".book2");
let book3 = document.querySelector(".book3");
let book4 = document.querySelector(".book4");
let book5 = document.querySelector(".book5");
let book1Button = document.querySelector(".book1Button");
let book2Button = document.querySelector(".book2Button");
let book3Button = document.querySelector(".book3Button");
let book4Button = document.querySelector(".book4Button");
let book5Button = document.querySelector(".book5Button");

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


    book1Button.addEventListener("mouseenter", function() {
        book1.classList.add("glow");
    });

    book1Button.addEventListener("mouseleave", function() {
        book1.classList.remove("glow");
    });

    book2Button.addEventListener("mouseenter" , function() {
        book2.classList.add("glow");
    });
    book2Button.addEventListener("mouseleave", function() {
        book2.classList.remove("glow");
    });

    book3Button.addEventListener("mouseenter", function() {
        book3.classList.add("glow");
    });
    book3Button.addEventListener("mouseleave", function() {
        book3.classList.remove("glow");
    });

    book4Button.addEventListener("mouseenter", function() {
        book4.classList.add("glow");
    });
    book4Button.addEventListener("mouseleave", function() {
        book4.classList.remove("glow");
    });

    book5Button.addEventListener("mouseenter", function() {
        book5.classList.add("glow");
    });
    book5Button.addEventListener("mouseleave", function() {
        book5.classList.remove("glow");
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






