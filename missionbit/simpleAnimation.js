// grab canvas and context from DOM
let canvas = document.getElementById("mycanvas");
let ctx = canvas.getContext("2d");

// variables to represent the position
let x = 50;
let y = 50;
let vx = 1;
let vy = 0;
let size = 50

// update function called each frame
let update = function() {
    collisionDetection();
    
    // clear canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    // draw a square
    ctx.fillStyle = "#000000";
    ctx.fillRect(x, y, 50, 50);
    
// update position
    x += vx;
    y += vy;
};

let collisionDetection = function() {
    // right wall
    if (x + size >= canvas.width) {
        console.log("collision");
        x = canvas.width - size;
        vx = -vx + rInt(-10, 10);
    };
    // left wall
    if (x <= 0) {
        x = 0;
        vx = -vx + rInt(-10, 10);
    }
    // top
    if (y + size >= canvas.height) {
        y = canvas.height - size;
        vy = -vy + rInt(-10, 10);
    }
    // bottom
    if (y <= 0) {
        y = 0;
        vy = -vy + rInt(-10, 10);
}

// set a timer to call our function
let interval = setInterval(update, 30);
    
function rInt(lo, hi) {
    return Math.floor(Math.random() * (hi - lo) + lo);
