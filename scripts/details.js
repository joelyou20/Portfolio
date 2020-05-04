var detailsWindow;

$(document).ready(function() {
  detailsWindow = document.getElementById("details");
});

function showDetails() {
  var height = detailsWindow.style.height;
  var width = detailsWindow.style.width;
  var id = setInterval(frame, 5);
  var value = 0;
  function frame() {
    if (value == 500) {
      clearInterval(id);
    } else {
      value++; 
      var newHeight = height + value;
      var newWidth = width + value;
      detailsWindow.style.height = newHeight + "px"; 
      detailsWindow.style.width = newWidth + "px"; 
    }
  }
}