// Description: This script is used to provide functionality to the navigation
//    menu. It will toggle the display of the menu items so that they are not
//    clickable when the menu is closed. 

var menuWindow;
var menuBtn;

$(document).ready(function() {
    menuWindow = document.getElementById("menu-window");
    menuBtn = document.getElementById("menu-btn");
});

// Function called when opening the menu. This will fade out the menu hamburger
//  button, fade in the menu window element, and set the menu items
//  display to "block" to allow the items to be clickable.
function openMenu() {
    menuBtn.style.opacity = 0;
    menuWindow.style.opacity = 1;
    setMenuItemDisplay("block");
}

// Function called when closing the menu. This will fade in the menu hamburger
//  button, fade out the menu window element, and set the menu items
//  display to "none" to stop the items from being clickable.
function closeMenu() {
    menuBtn.style.opacity = 1;
    menuWindow.style.opacity = 0;
    setMenuItemDisplay("none");
}

// This function will iterate through every menu-item and set each display to
//  the value of the "display" input parameter.
function setMenuItemDisplay(display) {
    menuItems = document.getElementsByClassName("menu-item");

    // Iterate through each menu item.
    for (i = 0; i < menuItems.length; i++) {
        menuItems[i].style.display = display;
    }
}