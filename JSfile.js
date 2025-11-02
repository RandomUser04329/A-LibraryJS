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
let startPage;
let inputPage; 
let colorPage; 

//boolean to remove/show a page
let remove;

startBTN.addEventListener("click", function() {
    remove = true;
    bookMake(remove);
});

function bookMake(removePage) {

    //The pages for book creation
    inputPage = document.createElement("div");
    colorPage = document.createElement("div"); 
  
    startPage = document.querySelector(".startSect");

    if (removePage === true) {
        sideContentPage.remove(startPage);
    } 
    


}