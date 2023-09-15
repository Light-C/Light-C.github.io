// When the user clicks Upload, the default submission behavior of the form is prevented, 
// and the information entered by the user is first retrieved 
// then placed in a media-item div. Finally, add a container named mediaContainer 
// to this div as a subclass. Finally display it.
document.getElementById('uploadForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Block the default submission behavior of the form

    var author = document.getElementById('author').value;
    var dish = document.getElementById('dish').value;
    var description = document.getElementById('description').value;

    var photoFile = document.getElementById('photo').files[0];
    var videoFile = document.getElementById('video').files[0];

// Create a container to wrap the uploaded content
    var mediaItem = document.createElement('div');
    mediaItem.classList.add('media-item');


    // Add a photo
        var pictureElement = document.createElement('h3');
        pictureElement.textContent = "Dish Picture: ";
        mediaItem.appendChild(pictureElement);

        var photoURL = URL.createObjectURL(photoFile);
        var photoElement = document.createElement('img');
        photoElement.src = photoURL;
        mediaItem.appendChild(photoElement);
        
    // Add a video
    if (videoFile) {
        var vElement = document.createElement('h3');
        vElement.textContent = "Dish Video: ";
        mediaItem.appendChild(vElement);

        var videoURL = URL.createObjectURL(videoFile);
        var videoElement = document.createElement('video');
        videoElement.src = videoURL;
        videoElement.controls = true;
        mediaItem.appendChild(videoElement);
    }

    // Add text
    var authorElement = document.createElement('h3');
    authorElement.textContent = "Author: " + author;
    mediaItem.appendChild(authorElement);

    var dishElement = document.createElement('h3');
    dishElement.textContent = "Dish Name: " + dish;
    mediaItem.appendChild(dishElement);

    var descriptionElement = document.createElement('p');
    descriptionElement.textContent = "Description: " + description;
    mediaItem.appendChild(descriptionElement);


    // Add the uploaded content to the container mediaContainer
    var mediaContainer = document.getElementById('mediaContainer');
    mediaContainer.appendChild(mediaItem);

    // Clear the form
    document.getElementById('author').value = '';
    document.getElementById('dish').value = '';
    document.getElementById('description').value = '';
    document.getElementById('photo').value = '';
    document.getElementById('video').value = '';
});

