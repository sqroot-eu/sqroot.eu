// Animated "matrix" text
// Original code from https://codepen.io/cpiscopo/pen/yfBGk

var drawMatrixHandler = null;
var hexChars = "0123456789abcdef";
hexChars = hexChars.split("");
var drops = [];
var font_size = 24;
var columns = 0;
var c = document.getElementById('matrix-header');

function drawMatrix() {
    var cxt = c.getContext("2d");

    cxt.fillStyle = "rgba(0,0,0,0.2)";
    cxt.fillRect(0, 0, c.width, c.height);

    cxt.fillStyle = "#0F0";
    cxt.font = font_size + 'px arial';


    for (var i = 0; i < drops.length; i++) {
        var text = hexChars[Math.floor(Math.random() * hexChars.length)];
        cxt.fillText(text, i * font_size, drops[i] * font_size);

        if (drops[i] * font_size > c.height && Math.random() > 0.975)
            drops[i] = 0;

        //increment y coordinate
        drops[i]++;
    }

}

function initMatrix() {

    // Do not attempt to init matrix on pages where it's not displayed
    if (c === null) {
        return;
    }

    if (drawMatrixHandler !== null) {
        clearInterval(drawMatrixHandler);
    }

    c.width = c.parentElement.offsetWidth;
    c.height = 350;

    columns = c.width / font_size;

    for (var x = 0; x < columns; x++) {
        drops[x] = 1;
    }

    drawMatrixHandler = setInterval(drawMatrix, 100);
}

initMatrix();

window.onresize = function () {
    initMatrix();
};