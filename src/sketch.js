// This is the main file for the sketch

let clock = {
    ticks: 0,
}

function setup() {
    createCanvas(1000, 1000)

    print('setup')
}

function draw() {
    background(20, 255, 60)

    print(clock.ticks)

    clock.ticks += 1
}
