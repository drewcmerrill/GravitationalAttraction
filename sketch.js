let mover;
let movers = [];
function setup() {
	createCanvas(600, 600);
	mover = new Mover(width/2, height/2, 50);
}

function draw() {
	background(51);

	mover.show();

	for(object of movers)
	{

		//uncomment to have every object attract each other
		// for(move of movers)
		// {
		// 	mover.attract(move);
		// }
		mover.update();
		object.showVelocity();
		object.update();
		mover.attract(object);
		object.show();
	}


}

function mouseClicked()
{
  let mover = new Mover(mouseX, mouseY, random(25));
	mover.vel = p5.Vector.random2D();
	movers.push(mover);
}
