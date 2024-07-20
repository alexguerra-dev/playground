// This is the main file for the sketch

let clock = {
    ticks: 0,
}

let colors

const drawFlower = (x, y, size, color) => {
    fill(color)

    rect(x, y, size, size)
    // ellipse(x, y, size, size)
}

const drawGarden = (x, y, size, color) => {
    fill(color)
    push()
    translate(x, y)
    rotate(45)
    drawFlower(0, 0, size, color)
    rect(x, y, size, size)
    pop()

    push()
    translate(x + 100, y, 40)
    rotate(45)
    drawFlower(0, 0, size, color)
    pop()

    push()
    translate(x - 100, y, 40)
    rotate(45)
    drawFlower(0, 0, size, color)
    pop()

    push()
    translate(x, y + 100, 40)
    rotate(45)
    drawFlower(0, 0, size, color)
    pop()

    push()
    translate(x, y - 100, 40)
    rotate(45)
    drawFlower(0, 0, size, color)
    pop()
}

function setup() {
    createCanvas(windowWidth, windowHeight)
    angleMode(DEGREES)

    colors = colorList
}

function draw() {
    print(clock.ticks)
    print(colors['purple'])
    drawFlower(100, 100, 100, colors['purple'])
    drawFlower(200, 200, 100, colors['green'])
    drawFlower(300, 300, 100, colors['red'])
    drawFlower(400, 400, 100, colors['blue'])

    push()

    drawGarden(width / 2, height / 2, 100, colors['yellow'])
    pop()
    clock.ticks += 1
}
