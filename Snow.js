class Snow{
	constructor(x,y)
	{
		var options={
			density : 10,
			restitution :10,
            friction :10,
			}
		this.x=x;
		this.y=y;
		this.r=20;
		this.image=loadImage("snow5.webp")
		this.body=Bodies.circle(this.x, this.y, this.r, options)
		World.add(world, this.body);
	}

	display()
	{
		var snowPos=this.body.position;	
		push()

		ellipse(0,0,this.r, this.r)
		imageMode(CENTER);
		ellipseMode(CENTER);
		image(this.image, snowPos.x, snowPos.y,70, 70)
		pop()
 }
}