function showDetails(n) {
  expandedDetails = document.getElementsByClassName("expanded-details");
  if(expandedDetails[n] != null) {
    if (expandedDetails[n].style.display == "none" || expandedDetails[n].style.display == "") {
      expandedDetails[n].style.display = "flex";
    }
    else if (expandedDetails[n].style.display === "flex") {
      expandedDetails[n].style.display = "none";
    }
  }
}