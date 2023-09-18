class MainCanvas {

    draw = () => {
    let canvas = document.getElementById('tutorial');
    let ctx = canvas.getContext('2d');


    ctx.fillStyle = "rgb(200, 0, 0)";
    let x = 50;
    let y = 50;
    let width = 50;
    let heigh = 50;
    ctx.fillRect(x, y, width, heigh);


    ctx.fillStyle = "rgb(200, 0, 0)";'c'
    x = 125;
    y = 50;
    width = 50;
    heigh = 50;
    ctx.fillRect(x, y, width, heigh);


    ctx.fillStyle = "rgb(200, 0, 0)";
    x = 250;
    y = 250;
    width = 50;
    heigh = 50;
    ctx.fillRect(x, y, width, heigh);


    ctx.moveTo(150, 100);
    ctx.quadraticCurveTo(150, 175, 200, 175);
    ctx.stroke();

    ctx.moveTo(75, 100);
    ctx.quadraticCurveTo(75, 175, 162.5, 175);
    ctx.quadraticCurveTo(275, 175, 275, 250);
    ctx.stroke();

    }
}

export default mainCanvas = MainCanvas();