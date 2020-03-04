class Particle{
    constructor(x,y,directionX, directionY, size, colour, canvas, ctx){
        this.x = x;
        this.y = y;
        this.directionX = directionX;
        this.directionY = directionY;
        this.size = size;
        this.colour = colour;
        this.canvas = canvas;
        // ctx = context
        this.ctx = ctx;
    }

    // adding circle and fill into it
    draw(){
        // start
        this.ctx.beginPath();
        // make circle
        this.ctx.arc(this.x, this.y, this.size, 0, Math.PI*2, false);
        // taget the colour
        this.ctx.fillStyle = this.colour;
        // fill the colour
        this.ctx.fill;
    };

    // changing the valocity or position
    update(){
        if (this.x + this.size > this.canvas.width || this.x - this.size < 0) {
            this.directionX = -this.directionX;
        }
        if (this.y + this.size > this.canvas.height || this.y - this.size < 0) {
            this.directionY = -this.directionY;
        }
        this.x += this.directionX;
        this.y += this.directionY;
        this.draw();
    };
}