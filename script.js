let canvas = document.getElementById('canvas1');
let ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let lgBubblePng = new Image();
let medBubblePng = new Image();
let smBubblePng = new Image();
lgBubblePng.src = 'bubble.png'
medBubblePng.src = 'medBubble.png'
smBubblePng.src='smBubble.png'
let animationFrame= 0

// bubble class to create bubbles 
class SmBubble{
    constructor(){
        this.x = Math.random()*(canvas.width);
        this.y = canvas.height + 50
        this.radius=50
        this.angle=0
        this.route= Math.floor(Math.random()*(4-1)+1)
    }
    update(){
        this.y = this.y-3
        this.angle= this.angle + Math.PI/64

    }
    draw(){
        if(this.route == 1){
            ctx.drawImage(smBubblePng, 15*Math.sin(this.angle)+ this.x , this.y)
        }
        if(this.route == 2){
            ctx.drawImage(smBubblePng, 10*Math.cos(this.angle)+ this.x , this.y)
        }
        else ctx.drawImage(smBubblePng, 15*Math.sin(this.angle)+ this.x , this.y)
    }
    
}
class MedBubble{
    constructor(){
        this.x = Math.random()*(canvas.width);
        this.y = canvas.height + 50
        this.radius=50
        this.angle=0
        this.route= Math.floor(Math.random()*(4-1)+1)
    }
    update(){
        this.y = this.y-3
        this.angle= this.angle + Math.PI/64

    }
    draw(){
        if(this.route == 1){
            ctx.drawImage(medBubblePng, 15*Math.sin(this.angle)+ this.x , this.y)
        }
        if(this.route == 2){
            ctx.drawImage(medBubblePng, 10*Math.cos(this.angle)+ this.x , this.y)
        }
        else ctx.drawImage(medBubblePng, 15*Math.sin(this.angle)+ this.x , this.y)
    }
    
}
class LgBubble{
    constructor(){
        this.x = Math.random()*(canvas.width);
        this.y = canvas.height + 50
        this.radius=50
        this.angle=0
        this.route= Math.floor(Math.random()*(3))+1
    }
    update(){
        this.y = this.y-3
        this.angle= this.angle + Math.PI/64

    }
    draw(){
        if(this.route === 1){
            ctx.drawImage(lgBubblePng, 10*Math.sin(this.angle)+ this.x , this.y)
        }
        else if(this.route === 2){
            ctx.drawImage(lgBubblePng, 10*Math.cos(this.angle)+ this.x , this.y)
        }
        else ctx.drawImage(lgBubblePng, 5*Math.sin(this.angle)+ this.x , this.y)
    }
    
}
//an array with some starter bubbles to hold bubbles
let bubblesArray= [ new LgBubble(), new MedBubble()]
let handlebubbles = ()=>{
    //makes a bubble when animation frame is divisable by a number 
    if(animationFrame % 20 == 0){
        bubblesArray.push(new SmBubble())
    }
    if(animationFrame % 40 == 0){
        bubblesArray.push(new MedBubble())
    }
    if(animationFrame % 60 == 0){
        bubblesArray.push(new LgBubble())
    }
    for (let i =0 ; i< bubblesArray.length; i++){
        bubblesArray[i].update()
        bubblesArray[i].draw()        
        if (bubblesArray[i].y< -canvas.height - 50){
            bubblesArray.splice(i,1)
        }
    }
}
let animate= ()=>{
    ctx.clearRect(0,0,canvas.width, canvas.height)
    handlebubbles()
    animationFrame ++
    if(bubblesArray.length> 100) return
    requestAnimationFrame(animate);
}
animate();