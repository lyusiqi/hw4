
function setup() {
  background(255);
  noStroke()
}
var h = 0;

function draw() {
  var h = random(360)
  stroke(h, 50, 90);
  fill(h, 50, 100);

  var r = random(30, 60);
  ellipse(random(width), random(height), r, r);
}
draw()
