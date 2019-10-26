// Animated "matrix" text
// Original code from https://codepen.io/cpiscopo/pen/yfBGk

var drawMatrixHandler = null;
var hexChars = "0123456789abcdef";
hexChars = hexChars.split("");
var drops = [];
var font_size = 24;
var columns = 0;
var c = document.getElementById('matrix-header');
var cxt = c.getContext("2d");


function drawMatrix(){
    cxt.fillStyle="rgba(0,0,0,0.05)";
    cxt.fillRect(0,0,c.width,c.height);

    cxt.fillStyle = "#0F0";
    cxt.font = font_size+'px arial';


    for(var i=0;i<drops.length;i++){
        var text = hexChars[Math.floor(Math.random()*hexChars.length)];
        cxt.fillText(text,i*font_size,drops[i]*font_size);

        if(drops[i]*font_size>c.height && Math.random() >0.975)
            drops[i]=0;

        //increment y coordinate
        drops[i]++;
    }

}

function initMatrix() {

    if (drawMatrixHandler !== null){
        clearInterval(drawMatrixHandler);
    }

    c.width = window.innerWidth - 20;
    c.height = 350;

    columns = c.width / font_size;

    for (var x = 0; x < columns; x++) {
        drops[x] = 1;
    }
console.log('init');
    drawMatrixHandler = setInterval(drawMatrix,100);
}

initMatrix();

window.onresize = function() {
    initMatrix();
};