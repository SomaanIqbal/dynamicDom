// 1A. Maintain an array of objects representing all of the user's added bookmarks.
console.log('Hi');
const userBookmarks = []

// --------------------------------------------------------
const linkInput = document.querySelector(".linkInput");

const bookmarkInput = document.querySelector(".bookmarkInput");

const bookmarkButton = document.querySelector(".bookmarkButton");

const bookmarkList = document.querySelector(".bookmarkList");

// --------------------------------------------------------

// 1B. render 1 bookmark
let bookmark = "taco";
const renderSingleBookmark = (bookmark) => {
    const bookmarkAdded = document.createElement("li");
    bookmarkAdded.innerText = bookmark;
    bookmarkList.appendChild(bookmarkAdded);
    
    
}  
console.log(renderSingleBookmark());


// 2B. render all bookmarks with .map
const renderAllBookmarks = (bookmarks) => {
    
    const elements = bookmarks.map((bookmark) => renderSingleBookmark(bookmark));
    // connecting to "ul"
    bookmarkList.append(elements)        
}

// 3B. function add bookmark??
bookmarkButton.addEventListener('click', () => {
    ;
    userBookmarks.push(renderSingleBookmark())


}); renderAllBookmarks(userBookmarks);



// 2A. Re-render the entire list of bookmarks any time a bookmark is added or removed.






// 3A. Use map to map the bookmark array to DOM elements.