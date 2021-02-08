class Bob{
    constructor(x,y){
        var opt =  {
            isStatic: false,
            restitution:1,
            friction:0,
            density: 1
        }
        this.body = Bodies.circle(x,y,30,opt);
        World.add(world,this.body);
        this.radius = 30;
        //this.height = height;
    }
        display(){
var pos = this.body.position;
var angle = this.body.angle;
push();
ellipseMode(RADIUS);

translate(pos.x,pos.y);
rotate(angle);
fill('pink');
ellipse(0,0,this.radius,this.radius);
  pop();   
   }
    
}