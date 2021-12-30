const canvas = document.getElementById('canvas1');
// which api to use for projects
const ctx = canvas.getContext('2d')
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
ctx.globalCompositeOperation = 'destination-over';
hue =Math.random() * 360;

let number =0;
let scale = 10;

// let size = 0;

function drawflower(){
    let angle = number * 2.3;
    let radius = scale * Math.sqrt(number);
    let positionX = radius * Math.sin(angle) + canvas.width/2;
    let positionY = radius * Math.cos(angle) + canvas.height/2;

        // draw a cricle
    ctx.strokeStyle = 'hsl(' +hue +', 100%, 50%';
    ctx.fillStyle = '';
    ctx.lineWidth = 4;
    ctx.beginPath();
    ctx.arc(positionX,positionY,number,0,Math.PI * 2);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();

    number ++;
    hue+=1;
}



function animate(){
    // ctx.clearRect(0, 0, canvas.width, canvas.height);
    // size+=0.02;
    
    drawflower();
    // draw each frame
    if (number > 200 ) return
    requestAnimationFrame(animate);
}

animate();