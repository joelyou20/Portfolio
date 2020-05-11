// Description: This script is used to overwrite the default behaviour of
//    clicking on a hyperlink. When that link causes the page to scroll to a
//    specific section within the page, this script will cause that scrolling
//    to be smooth and slightly offset.

$(document).ready(function(){
    // Add smooth scrolling to all links
    $("a").click(function() {
  
      // Make sure this.hash has a value before overriding default behavior
      if (this.hash !== "") {
  
        // Store hash
        var hash = this.hash;
        var scrollOffset = 100;

        // Using jQuery's animate() method to add smooth page scroll
        // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
        $('html, body').animate({
          scrollTop: $(hash).offset().top - scrollOffset
        }, 800, function(){
    
          // Add hash (#) to URL when done scrolling (default click behavior)
          window.location.hash = hash;
        });
      } // End if
    });
  });