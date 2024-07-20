// This is the main file for the sketch

let clock = {
    ticks: 0,
}

const drawFlower = () => {
    fill(255, 0, 0)
    ellipse(0, 0, 100, 100)
}

function setup() {
    createCanvas(windowWidth, windowHeight)
    angleMode(DEGREES)
}

function draw() {
    background(0)
    drawFlower()
    clock.ticks += 1
}
