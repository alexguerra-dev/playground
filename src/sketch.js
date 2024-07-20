// This is the main file for the sketch

let clock = {
    ticks: 0,
}

function setup() {
    createCanvas(windowWidth, windowHeight)

    // Basic setup for the sketch
    angleMode(DEGREES)
}

function draw() {
    background(0)

    // Some properties that can be set that effects the drawing.
    fill(255, 0, 0)
    stroke(0, 255, 0)
    strokeWeight(8)

    // Draw a rectangle at the top left corner of the screen.
    rect(0, 0, 100, 100)

    // Tick the clock
    clock.ticks += 1
}
