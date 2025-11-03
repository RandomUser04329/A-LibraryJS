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

//The pages for book creation
const inputPage = document.createElement("div");
inputPage.setAttribute("class", "inputSection")

let startPage = document.querySelector(".startSection");
let inputSect = document.querySelector(".inputSection")
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
        inputPageFunc(showPage);
    } 
    
}

function inputPageFunc(showPage) {
    if (showPage === true) {
        inputSect.style.display = "grid";
        sideContentPage.appendChild(inputPage);
    } 
}