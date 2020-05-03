var aboutRef;
var recentWorkRef;
var portfolioRef;
var contactRef;
var menuWindow;
var menuBtn;

$(document).ready(function() {
    aboutRef = document.getElementById("about");
    recentWorkRef = document.getElementById("recent-work");
    portfolioRef = document.getElementById("portfolio");
    contactRef = document.getElementById("contact");
    menuWindow = document.getElementById("menu-window");
    menuBtn = document.getElementById("menu-btn");
});

function openMenu() {
    menuBtn.style.opacity = 0;
    menuWindow.style.opacity = 1;

}

function closeMenu() {
    menuBtn.style.opacity = 1;
    menuWindow.style.opacity = 0;
}