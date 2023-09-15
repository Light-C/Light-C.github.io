/**in general, explains:
 * This js file mainly performs 3 functions, 
 * the first function is the mouse hover play and mouse away pause, 
 * the second function is the hover window, 
 * the third function is the video classification
 * 
 * The first function, when the mouse is located on top of the recommended video will automatically play the video, 
 * mouse away will pause the video, including playVideo () and pauseVideo ()
 * 
 * The second function is the hover window to show the video details. 
 * After the user clicks on the video, a hover window will pop up, showing the details of the video. 
 * Include the video can be zoomed in to watch and text explanation. Specific implementation for hideFlowWindow() and flowWindow() 
 * 
 * The third function is the category function, the user selects different categories will appear different recommended videos. 
 * The specific implementation is select.addEventListener()
 */

// Get the selected category, category information
var select = document.getElementById('category');
var videos = document.getElementsByClassName("video-text")

// used for playing video
function playVideo(video) {
    video.play();
}

// used for pause video
function pauseVideo(video) {
    video.pause();

}


/** display flow window function
 * Users click on the recommended video will pop up a hover window,
 *  through the window around will become dark, hover window has two content, 
 * one content is to view the video, the other content is to view the production
 * method and ingredients. I am using JavaScript to modify the hover window 
 * video address and txt document path, so as to achieve the purpose of 
 * switching the content*/
function flowWindow(event, element) {

    /* Hover window display, need to turn display into block*/
    document.getElementById("window").style.display = "block";
    /*Darken the background*/
    document.getElementById("shadow").style.display = "block";

    // Get the file name to modify the path
    const videoSrc = element.querySelector('video').getAttribute('src');
    const fileName = videoSrc.split('/').pop().split('.')[0];
    const videoPath = "video\\detail\\" + fileName + ".mp4";
    const videoElement = document.querySelector('#flowVideo video');
    videoElement.src = videoPath;

    // Auto Play Video
    videoElement.play();

    // Get txt file
    var txtPath = "menuMethod/" + fileName + ".txt";
    var flowTxt = document.getElementById('flowTxt');
    flowTxt.src = txtPath;



}

/**hide flow window function
 * When this method is called with a click, 
 * the hover window and the background will all be hidden.*/
function hideFlowWindow() {
    document.getElementById("window").style.display = "none";
    document.getElementById("shadow").style.display = "none";

    // Users click on the cross, while stopping the video playback
    const videoElement = document.querySelector('#flowVideo video');
    videoElement.pause();
}


/**Video classification function
 * By different data-category attribute, the recommended videos
 *  will be classified into three categories: all, deli, dessert.
 * Create a listener that reads the category selected by the user, 
 * and by iterating through the elements, compares the category selected by the user with the video,
 * and displays the video of the same category.  */
select.addEventListener('change', function () {
    var category = this.value;
    for (var i = 0; i < videos.length; i++) {
        var video = videos[i];
        if (category == "all") {
            video.style.display = 'block';
        } else if (video.getAttribute('data-category') == category) {
            video.style.display = 'block';
        }
        else {
            video.style.display = 'none';
        }
    }
});

// Limit the user to one rating, 
// when the user clicks the first number of stars, 
// how many stars will be lit up. For example, if you click on three stars, 
// three stars will light up after you click on them.

let rated = false;

function rate(stars) {
    var startext = document.getElementById("star-text");
  if (!rated) {
    const starElements = document.getElementsByClassName("star");
    for (let i = 0; i < stars; i++) {
      starElements[i].classList.add("active");
    }
    rated = true;

    if(stars<3){
        startext.textContent ="We're sorry we couldn't satisfy you, please go to the feedback page and tell us your reason.";

    }else{
        startext.textContent ="Thank you for your recognition, we will do better!!!";
    }
  }
}