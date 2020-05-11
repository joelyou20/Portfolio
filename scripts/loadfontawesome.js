// Description: This script is used to render font awesome before rendering the
//      page. This allows fontawesome to load quicker and prevent the page from
//      hanging.

$(document).ready(function() { 
    var css = document.createElement('link'); 
    css.href = 'https://use.fontawesome.com/releases/v5.1.0/css/all.css'; 
    css.rel = 'stylesheet'; css.type = 'text/css'; 
    document.getElementsByTagName('head')[0].appendChild(css); 
}); 