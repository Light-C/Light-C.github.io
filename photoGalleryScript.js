/**the general explanation: 
 * If the user clicks on the previous dish or the next dish, the functions nextBtn.addEventListener() or prevBtn.addEventListener() will be run. 
 * The data is then transferred to the showSlide() function. The index of images and likes is determined by checking whether the switch is to the previous element or the next element.
 * 
 * The number of likes in the like() function can only be increased and not decreased. 
 * The number of likes is initialized when the program is running, and the number of likes for each image is 0. 
 * The number of likes is not stored immediately after the user clicks on a like, 
 * but when the user clicks on the previous dish or the next dish, 
 * the current number of likes is first stored and then the target number of likes is loaded.
 * 
 * hidehowToCook() and function howToCook() are used to display the floating window.
 * When the user clicks on how to cook, the floating window will be displayed 
 * and the program will modify the path to load the recipe in html according to the content of the image to change the recipe.
 */

// get elements,pictures,prevBtn,nextBtn,likeBtn,likeCountSpan
// set the current recipe to the 1st one, set to 0 likes
let pictures = document.getElementsByClassName("pictures");
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');
let currentSlide = 0;
let likeCount = 0;
const likeBtn = document.getElementById("like-btn");
const likeCountSpan = document.getElementById("like-count");


// Create a new array likeList, which is used to load the number of each dish liek, initialize this array.
let likeList = [];
for (let i = 0; i < pictures.length; i++) {
    likeList.push(0);
}


// Toggle element function
function showSlide(n) {
    // Save the current number of like dishes before switching between images
    var count = n - currentSlide;
    if (count == -1) {
        likeList[n + 1] = likeCount;
    } else if (count == 1) {
        likeList[n - 1] = likeCount;
    } else if (count == -9) {
        likeList[pictures.length - 1] = likeCount;
    } else {
        likeList[0] = likeCount;
    }

    // When switching images, first hide the current element, then show the next element
    pictures[currentSlide].style.display = 'none';
    pictures[n].style.display = 'block';
    currentSlide = n;
    // Get the number of the next element like
    likeCount = likeList[n];
    likeCountSpan.innerHTML = likeCount;

}

// Set a listener to the Next Dish button click event
// When the user clicks Next Dish, the element will be switched and if the element is the last element, then the first element will be returned
nextBtn.addEventListener('click', function () {
    if (currentSlide < pictures.length - 1) {
        showSlide(currentSlide + 1);
    } else {
        showSlide(0);
    }

});

// Set a listener to the Previous Dish button click event
// When the user clicks on Previous Dish, the element will be switched, and if the element is the first element, then the last element will be returned
prevBtn.addEventListener('click', function () {
    if (currentSlide > 0) {
        showSlide(currentSlide - 1);
    } else {
        showSlide(pictures.length - 1);
    }

});

// Clicking like will increase the number of likes
function like() {
    likeCount++;
    likeCountSpan.innerHTML = likeCount;

}

// Get the function to create the tutorial
// When clicking the howToCook button, the path of the hover window txt will be switched for the purpose of making a tutorial
function howToCook(event) {

    /* Hover window display, need to turn display into block*/
    document.getElementById("window").style.display = "block";
    /*Darken the background*/
    document.getElementById("shadow").style.display = "block";
    // Get the file name to modify the path
    var flowTxt = document.getElementById('flowTxt');
    var index = currentSlide + 1;
    var txtPath = "menuMethod/gallery" + index + ".txt";

    flowTxt.src = txtPath;

}
// Hide hover window
function hidehowToCook() {
    document.getElementById("window").style.display = "none";
    document.getElementById("shadow").style.display = "none";

}

