let background = document.getElementById('canvas0')
let backgroundCtx = background.getContext('2d');
backgroundCtx.width = window.innerWidth;
backgroundCtx.height = window.innerHeight;

let drawLight= () =>{
    backgroundCtx.globalAlpha = 0.1;
    backgroundCtx.beginPath();
    backgroundCtx.moveTo(background.width/4, 0);
    backgroundCtx.lineTo(background.width/5, 0);
    backgroundCtx.lineTo(background.width, background.height/3);
    backgroundCtx.fillStyle = '#9ec3f7'
    backgroundCtx.fill();

    backgroundCtx.beginPath();
    backgroundCtx.moveTo(background.width/6, 0);
    backgroundCtx.lineTo(background.width/7, 0);
    backgroundCtx.lineTo(background.width, background.height/1.5);
    backgroundCtx.fillStyle = '#9ec3f7'
    backgroundCtx.fill();
    
    backgroundCtx.beginPath();
    backgroundCtx.moveTo(background.width/9, 0);
    backgroundCtx.lineTo(background.width/10, 0);
    backgroundCtx.lineTo(background.width, background.height);
    backgroundCtx.fillStyle = '#9ec3f7'
    backgroundCtx.fill();

    backgroundCtx.beginPath();
    backgroundCtx.moveTo(background.width/14, 0);
    backgroundCtx.lineTo(background.width/16, 0);
    backgroundCtx.lineTo(background.width/1.5, background.height);
    backgroundCtx.fillStyle = '#9ec3f7'
    backgroundCtx.fill();

    backgroundCtx.beginPath();
    backgroundCtx.moveTo(background.width/500, 0);
    backgroundCtx.lineTo(background.width/30, 0);
    backgroundCtx.lineTo(background.width/2.2, background.height);
    backgroundCtx.fillStyle = '#9ec3f7'
    backgroundCtx.fill();

    backgroundCtx.beginPath();
    backgroundCtx.moveTo(0 , background.height/10);
    backgroundCtx.lineTo(0 , background.height/8);
    backgroundCtx.lineTo(background.width/3.5, background.height);
    backgroundCtx.fillStyle = '#9ec3f7'
    backgroundCtx.fill();

    backgroundCtx.beginPath();
    backgroundCtx.moveTo(0 , background.height/2);
    backgroundCtx.lineTo(0 , background.height/2.2);
    backgroundCtx.lineTo(background.width/8, background.height);
    backgroundCtx.fillStyle = '#9ec3f7'
    backgroundCtx.fill();

    backgroundCtx.globalAlpha = 1.0;
    
}
drawLight();