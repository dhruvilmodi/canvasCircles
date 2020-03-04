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

class Floatation{
    constructor(numBubbles, canvas, cont){
        this.canvas = canvas;
        this.ctx = this.canvas.getContext(cont);
        this.ctx.canvas.width = window.innerWidth;
        this.ctx.canvas.height = window.innerHeight;
        this.particleArray = [];
        for(let i=0;i<numBubbles;i++){
            let size = Math.random()*30;
            let x = Math.random() * (innerWidth - size * 2);
            let y = Math.random() * (innerHeight - size * 2);
            let directionX = (Math.random()*0.4) - 0.2;
            let directionY = (Math.random()*0.4) - 0.2;
            let colour = `rgb(${Math.floor(Math.random()*256)},${Math.floor(Math.random()*256)},${Math.floor(Math.random()*256)})`;
            this.particleArray.push(new Particle(x,y,directionX,directionY,size,colour,this.canvas,this.ctx));
        }
        this.animate();
    }
}

let floaters = new Floatation(numFloaters, whereCanvasIs, context);