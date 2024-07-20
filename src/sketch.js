// This is the main file for the sketch

function robotEyes() {
    fill(175, 0, 80)
    strokeWeight(9)
    stroke(9)
    ellipse(mouseX, height / 2, 400, 400)

    ellipse(100 + mouseY, height / 2, 400, 400)
}
function setup() {
    createCanvas(windowWidth, windowHeight)

    // Basic setup for the sketch
    angleMode(DEGREES)
}

function draw() {
    background(255, 90, 70)

    fill(175, 0, 80)

    robotEyes()
    // // Some properties that can be set that effects the drawing.
    // fill(255, 0, 0)
    // stroke(0, 255, 0)
    // strokeWeight(8)

    // // Draw a rectangle at the top left corner of the screen.
    // rect(0, 0, 100, 100)

    // Tick the clock
    // clock.ticks += 1
}
