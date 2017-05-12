const PAINTING_WIDTH = 500;
const PAINTING_HEIGHT = 500;

var canvas;
var ctx;
var imgDataId;
var imgData;
var pixels;

function loadPixels() {
    for(var x=0; x<PAINTING_WIDTH; x++) {
        for(var y=0; y<PAINTING_HEIGHT; y++) {
            pix = pixels[x][y];
            // TODO: Check if pixel is changed, requires middleware to be written
            drawPixel(x, y, pix[0], pix[1], pix[2]);
        }
    }
}

function writePixel(x, y, r, g, b) {
    // TODO: Write to back end

    // Draw pixel
    drawPixel(x, y, r, g, b);
}

function drawPixel(x, y, r, g, b) {
    imgData[0] = r;
    imgData[1] = g;
    imgData[2] = b;
    imgData[3] = 255;
    ctx.putImageData(imgDataId, x, y);
}

function convertCanvasToImage (can) {
    var tempImg = new Image();
    tempImg.src = can.toDataURL('image/png');
    return tempImg;
}

function init() {
    canvas = document.getElementById("canvas");
    ctx = canvas.getContext("2d");

    imgDataId = ctx.createImageData(1, 1);
    imgData = imgDataId.data;

    canvas.width = PAINTING_WIDTH;
    canvas.height = PAINTING_HEIGHT;
    ctx.imageSmoothingEnabled = false;
    ctx.mozImageSmoothingEnabled = false;
    ctx.webkitImageSmoothingEnabled = false;
    ctx.msImageSmoothingEnabled = false;

    // Initialize pixels
    pixels = [];
    for(var x=0; x<PAINTING_WIDTH; x++) {
        var column = [];
        for(var y=0; y<PAINTING_HEIGHT; y++) {
            column.push([0, 0, 0]);
            drawPixel(x, y, 0, 0, 0);
        }
        pixels.push(column);
    }
}

window.onload = init;