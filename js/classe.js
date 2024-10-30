class obj 
{
    frame = 1
    timer = 0

    constructor(px, py, width, height, image)
    {
        this.px = px
        this.py = py
        this.width = width
        this.height = height
        this.image = image
    }
    
    drawing()
    {
        let img = new Image()
        img.src = this.image
        board.drawImage(img, this.px, this.py, this.width, this.height)
    }

    animation(speed, limit, nameImage) 
    {
        this.timer++
        if (this.timer > speed) 
        {
            this.timer = 0
            this.frame++
        }
        
        if(this.frame > limit) 
        {
            this.frame = 1
        }

        this.image = 'sprites/' + nameImage + this.frame + '.png'
    }
}

class BG extends obj 
{
    move() {}
}

class BANANACAT extends obj
{
    fall(speedDown, gravity)
    {
        speedDown += gravity
        this.py = Math.min(this.py + speedDown, this.py)
    }

    detectCollision(obj) 
    {
        return this.px < obj.px + obj.width &&   //a's top left corner doesn't reach b's top right corner
               this.px + this.width > obj.px &&   //a's top right corner passes b's top left corner
               this.py < obj.py + obj.height &&  //a's top left corner doesn't reach b's bottom left corner
               this.py + this.height > obj.py;    //a's bottom left corner passes b's top left corner
    }
}

class OBSTACLES extends obj 
{
    //
}

class FOOD extends OBSTACLES
{
    //
}