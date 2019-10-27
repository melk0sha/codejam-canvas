document.addEventListener('DOMContentLoaded', event => {
    let canvasContext = getCanvasContext();
    let radioButtons = document.getElementsByTagName('input');
    radioButtons[0].onclick = () => fetch("assets/data/4x4.json")
        .then(response => response.json().then(json => drawMatrix4x4(json, canvasContext)));
    radioButtons[1].onclick = () => fetch("assets/data/32x32.json")
        .then(response => response.json().then(json => drawMatrix32x32(json, canvasContext)));
    radioButtons[2].onclick = () => drawCanvasImage(canvasContext);
});

function getCanvasContext() {
    let canvas = document.getElementById('canvas');
    let ctx = canvas.getContext('2d');
    canvas.width = 512;
    canvas.height = 512;
    return ctx;
}

function drawMatrix32x32(frame, ctx) {
    frame.forEach((row, i) => {
        row.forEach((column, j) => {
            ctx.fillStyle = 'rgba(' + column[0] + ', ' + column[1] + ', ' + column[2] + ')';
            ctx.fillRect(j*16, i*16, (j+1)*16, (i+1)*16);
        });
    });
}

function drawMatrix4x4(frame, ctx) {
    frame.forEach((row, i) => {
        row.forEach((column, j) => {
            ctx.fillStyle = '#' + column;
            ctx.fillRect(j*128, i*128, (j+1)*128, (i+1)*128);
        });
    });
}

function drawCanvasImage(ctx) {
    let imgObj = new Image();

    imgObj.onload = function() {
        let w = canvas.width;
        let nw = imgObj.naturalWidth;
        let nh = imgObj.naturalHeight;
        let aspect = nw / nh;
        let h = w / aspect;
        canvas.height = h;
        ctx.drawImage(imgObj, 0, 0, w, h);
    };

    imgObj.src = 'assets/data/image.png';
}