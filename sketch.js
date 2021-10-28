
function setup() {
  createCanvas(700,700);
 
  createSprite (350, 350, 50, 50)
}

function draw() 
{
  background ("yellow");
 
 
if (keyDown ("right")) {
  background ("red");
}

if (keyDown ("up")) {
  background ("green")
}
if (keyDown ("left")) {
  background ("blue")
}
if (keyDown ("down")) {
  background ("purple")
}
text ("If you press right key, It will be red. If you press up key, it will be green.\nIf you press the left, it will be blue, and when you press down, it will be purple.", 5, 10)
  drawSprites ()
}




