function preloadImages(array) {
    if (!preloadImages.list) {
        preloadImages.list = [];
    }
    var list = preloadImages.list;
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
        list.push(img);
        img.src = array[i];
    }
}

$(document).ready(preloadImages([
    "./shared/images/apple-code-coding-computer-574069.jpg", 
    "./shared/images/grayscale-photo-of-computer-laptop-near-white-notebook-and-169573.jpg",
    "./shared/images/iphone-notebook-pen-working-34578.jpg",
    "./shared/images/three-black-handset-toys-821754.jpg",
    "./shared/images/LI-In-Bug.jpg",
    "./shared/images/GitHub-Mark-120px-plus.jpg"
], true));