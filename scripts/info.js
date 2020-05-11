// Description: This script is used to provide functionality to the "MORE INFO"
//    button. This is accomplished by toggling the display of various elements
//    on click.

// This function is used to manage the display of the info items. When the
//  "MORE INFO" button is clicked, this function will run and set all of the
//  gallery pages info columns to be visible. All columns are set to maintain
//  consistency between gallery entries.
function showInfo() {
  var moreInfo = document.getElementsByClassName("more-info");
  var moreInfoBtn = document.getElementsByClassName("more-info-btn");
  var hideInfoBtn = document.getElementsByClassName("hide-info-btn");

  // Iterate through each gallery entry.
  for (i = 0; i < moreInfo.length; i++) {
    if(moreInfo[i] != null) {
      // If display is off, turn display on.
      if (moreInfo[i].style.display == "none" || moreInfo[i].style.display == "") {
        moreInfoBtn[i].style.display = "none";
        hideInfoBtn[i].style.display = "flex";
        moreInfo[i].style.display = "flex";
      }
      // If display is on, turn display off.
      else if (moreInfo[i].style.display === "flex") {
        moreInfoBtn[i].style.display = "flex";
        hideInfoBtn[i].style.display = "none";
        moreInfo[i].style.display = "none";
      }
    }
  }
}