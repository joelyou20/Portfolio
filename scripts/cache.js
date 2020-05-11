// Description: This script is used to cache images to improve
//    performance of the site. This is accomplished by preloading the images
//    and storing them in an array. When that image is needed it is readily
//    available and will not cause any decrease in performance. The image is
//    then removed from the array to free up memory.

// This function handles the preloading of the images. It will iniatialize the
//  images onload event to remove itself from the list of preloaded images when
//  the respective image is loaded.
function preloadImages(array) {
  // Initialize empty list
  if (!preloadImages.list) {
    preloadImages.list = [];
  }
  var list = preloadImages.list;
  // Iterate through all images specified in the inputted array.
  for (var i = 0; i < array.length; i++) {
    var img = new Image();
    img.onload = function() {
      var index = list.indexOf(this);
      if (index !== -1) {
        // remove image from the array once it's loaded
        // for memory consumption reasons
        list.splice(index, 1);
      }
    }
    list.push(img); // Add image to list.
    img.src = array[i];
  }
}

// On document ready, preload specified images.
$(document).ready(preloadImages([
    "./images/grayscale-photo-of-computer-laptop-near-white-notebook-and-169573.jpg",
    "./images/GitHub-Mark-120px-plus.jpg",
    "./images/aml_menu_logo.png",
    "./images/Joel_Cribby_Photo.jpg",
    "./images/logosm.png"
]));