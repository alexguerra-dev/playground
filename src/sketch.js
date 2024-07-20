// This is the main file for the sketch

let clock = {
    ticks: 0,
}

function setup() {
    createCanvas(windowWidth, windowHeight)
    angleMode(DEGREES)
}

function draw() {
    background(0)
    clock.ticks += 1
}
