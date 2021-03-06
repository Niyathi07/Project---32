class Polygon  {
    constructor(x,y,width,height)  {
        var options={
            isStatic:false
        }
        this.image = loadImage("polygon.png")

        this.width = width
        this.height = height
        this.body = Bodies.rectangle(x,y,width,height,options)
        
        World.add(world,this.body)

    }
    display()  {
        imageMode(CENTER)
        image(this.image,this.body.position.x,this.body.position.y,this.width,this.height)

    }
}

