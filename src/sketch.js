// This is the main file for the sketch

let clock = 1000

// let duration = 1000

function secToMin(seconds) {
    return seconds / 60
}

function minToSec(minutes) {
    return minutes * 60
}

function robotEyes() {
    fill(175, random(255), 80)
    strokeWeight(9)
    stroke(9)

    ellipse(mouseX, height / 2, clock, 400)
    fill(0)
    ellipse(mouseX, height / 2, clock / 3, 400 / 0.6)
    fill(175, random(255), 80)
    fill(0)

    ellipse(100 + mouseY, height / 2, 400, 400)

    ellipse(100 + mouseY, height / 2, 400, 400)
    fill(0)
}
function setup() {
    createCanvas(windowWidth, windowHeight)

    // Basic setup for the sketch
    angleMode(DEGREES)

    print('Hello, world! Please stand by for our manifesto...')

    const theCurrentColor = colorList.teal
    print(theCurrentColor)
}

function draw() {
    background(255, 90, 70)

    fill(175, 0, 80)

    robotEyes()

    // Tick the clock

    print(clock)
    clock--
}
