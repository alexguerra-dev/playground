// This is the main file for the sketch

let clock = {
    ticks: 0,
}

let colors

const drawFlower = (x, y, size, color) => {
    fill(color)
    ellipse(x, y, size, size)
}

function setup() {
    createCanvas(windowWidth, windowHeight)

    colors = colorList
}

function draw() {
    print(clock.ticks)
    print(colors['purple'])
    drawFlower(100, 100, 100, colors['purple'])
    drawFlower(200, 200, 100, colors['green'])
    drawFlower(300, 300, 100, colors['red'])

    clock.ticks += 1
}
