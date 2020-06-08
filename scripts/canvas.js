var w;
var prevW;
var h;
var nodes = [];
var numNodes = 10;
var count = 0;
var canvas;
var nodeRange = 30;
var nodeIndex = 0;
var nodeSpeed = 0.1;
var nodeSpacing = 10;
var interval = 20;

jQuery(document).ready(function() {
  canvas = document.getElementById("canvas"); 

  drawLine();
  drawLine();
  drawLine();
  drawLine();
  drawLine();
});

function drawLine() {
  
  generateNodes(numNodes);

  setInterval(function(){
    update();
  }, interval);

  $(document).mousemove(function(e){
    circleMouseX = e.pageX - 30;
    circleMouseY = e.pageY - 30; 
    dotMouseX = e.pageX;
    dotMouseY = e.pageY;
  });
}

function generateNodes(numNodes) {
  w = $(window).width();
  prevW = w;
  h = $(window).height();
  var x = Math.floor(Math.random() * w);
  var y = 0;

  for(i=numNodes; i>=0; i--) {
    var sign = Math.random() < 0.5 ? -1 : 1;
    x += Math.floor(Math.random() * 30) * sign;
    y = h * (i * 1/numNodes);
    if(x >= w || x <= 0) x *= sign * -1;
    var speed = Math.floor(Math.random() * (nodeSpeed * 100)) / 100;
    var startCount = Math.floor(Math.random() * nodeRange);
    var xsign = Math.random() < 0.5 ? -1 : 1;
    var ysign = Math.random() < 0.5 ? -1 : 1;
    nodes.push({
      obj: buildNode(x, y), 
      count: startCount, 
      xd: 1 * xsign, 
      yd: 1 * ysign, 
      speed: speed, 
      x: x, 
      y: y
    })
  }
}

function buildNode(x, y) {
  var node = document.createElement("span");
  node.className = "node";
  node.id = "node_" + nodeIndex;
  node.style.transform = "translate(" + x + "px," + y + "px)";
  var nodeSize = Math.floor(Math.random() * 15);
  var nodeOpacity = Math.floor(Math.random() * 100);
  node.style.borderWidth = nodeSize + "px";
  node.style.opacity = nodeOpacity + "%";
  canvas.appendChild(node);
  nodeIndex++;
  
  return node;
}

function update() {
  w = $(window).width();
  var offset = 1;
  nodes.forEach(e => {
    if(prevW !== w) {
      offset = calculateOffset(nodes.findIndex(f => f === e), w, prevW);
    }
    if(e.count >= nodeRange) {
      e.count=0;
      e.xd=-e.xd;
      e.yd=-e.yd;
    } else {
      e.count += 1 * nodeSpeed;
    }
    if(e) {
      var x = e.x ;
      var y = e.y;
      var newX = x + (e.speed * e.xd) * offset;
      var newY = y + (e.speed * e.yd);
      e.x = newX;
      e.y = newY;
      e.obj.style.transform = "translate(" + 
      newX + "px," + 
      newY + "px)";
    }
  });
}

function calculateOffset(i, a, b) {
  var scrollTop = $(window).scrollTop();
  var elementOffset = $('#node_' + i).offset().top;
  var distance = (elementOffset - scrollTop);

  var c = Math.abs(a - b);
  var x = a / c;
  return distance * x;
}