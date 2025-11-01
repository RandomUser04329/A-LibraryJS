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
const makeBTN = document.querySelector(".startBTN");
const removeBTN = document.querySelector(".removeBTN");

//The pages for book creation
let inputPage; 
let colorPage; 

makeBTN.addEventListener("click", bookMake(true));

function bookMake(removePage) {

    //The pages for book creation
    let inputPage; 
    let colorPage; 
  
    if (removePage == true) {
        let startPage = document.querySelector(".startSect");

        sideContentPage.classList.remove(startPage);

    }
}