jQuery(document).ready(function() {

  var circleMouseX = 0, circleMouseY = 0;
  var dotMouseX = 0, dotMouseY = 0;
  var circle_xp = 0, circle_yp = 0;
  var dot_xp = 0, dot_yp = 0;
    
  $(document).mousemove(function(e){
    circleMouseX = e.pageX - 30;
    circleMouseY = e.pageY - 30; 
    dotMouseX = e.pageX;
    dotMouseY = e.pageY;
  });
    
  setInterval(function(){
    circle_xp += ((circleMouseX - circle_xp)/6);
    circle_yp += ((circleMouseY - circle_yp)/6);
    dot_xp += ((dotMouseX - dot_xp));
    dot_yp += ((dotMouseY - dot_yp));
    $("#cursor-circle").css({left: circle_xp +'px', top: circle_yp +'px'});
    $("#cursor-dot").css({left: dot_xp +'px', top: dot_yp +'px'});
  }, 20);

});