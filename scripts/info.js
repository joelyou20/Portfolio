function showInfo() {
  var moreInfo = document.getElementsByClassName("more-info");
  var moreInfoBtn = document.getElementsByClassName("more-info-btn");
  var hideInfoBtn = document.getElementsByClassName("hide-info-btn");
  for (i = 0; i < moreInfo.length; i++) {
    if(moreInfo[i] != null) {
      if (moreInfo[i].style.display == "none" || moreInfo[i].style.display == "") {
        moreInfoBtn[i].style.display = "none";
        hideInfoBtn[i].style.display = "flex";
        moreInfo[i].style.display = "flex";
      }
      else if (moreInfo[i].style.display === "flex") {
        moreInfoBtn[i].style.display = "flex";
        hideInfoBtn[i].style.display = "none";
        moreInfo[i].style.display = "none";
      }
    }
  }
}