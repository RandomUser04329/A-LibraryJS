//Makes the Book
function Book() {

}

//Users Library
const userLibrary = []; 


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

let bookName;
let bookAuthor;
let bookPages;
let bookColor;

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
    
    

}
