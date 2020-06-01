var video;
var midway;

$(document).ready(function() {
  // select video element
  var vid = document.getElementById('vid1');
  //var vid = $('#v0')[0]; // jquery option

  // pause video on load
  // vid.pause();

  // alternative & optimized implementation  thanks to http://codepen.io/daveroma/
  window.onscroll = function(){
    vid.play();
  };
});
