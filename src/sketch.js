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
}

function draw() {
    background(255, 90, 70)

    robotEyes()
}
