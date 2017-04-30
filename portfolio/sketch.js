// Daniel Shiffman
// http://codingtra.in
// Steering Text Paths
// Video: https://www.youtube.com/watch?v=4hA7G3gup-4

var font;
var vehicles = [];


function preload() {
  font = loadFont('AvenirNextLTPro-Demi.otf');
}


function createCanvas() {
  var x = (windowWidth - width)/2;
  var y = (windowHeight - height)/2;


}
function setup() {
var canvas =  createCanvas(1800, 300);
canvas.parent('sketch-holder');
  background(44,62,80);
  // textFont(font);
  // textSize(192);
  // fill(255);
  // noStroke();
  // text('train', 100, 200);

  var points = font.textToPoints('SANDO DMI', 400-(windowWidth-width)/2, 200, 192, {
    sampleFactor: 0.25
  });

  for (var i = 0; i < points.length; i++) {
    var pt = points[i];
    var vehicle = new Vehicle(pt.x, pt.y);
    vehicles.push(vehicle);
    // stroke(255);
    // strokeWeight(8);
    // point(pt.x, pt.y);
  }
}

function draw() {
  background(255, 235, 59);
  for (var i = 0; i < vehicles.length; i++) {
    var v = vehicles[i];
    v.behaviors();
    v.update();
    v.show();
  }

}
