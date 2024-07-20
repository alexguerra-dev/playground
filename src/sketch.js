// This is the main file for the sketch

let clock = {
    ticks: 0,
}

let drips = []

class Drip {
    constructor(x, y, r) {
        this.x = x
        this.y = y
        this.r = r
        this.startR = r
        this.maxSpeed = map(r, 5, 10, 3, 6)
    }
    update() {
        this.y += map(this.r, this.startR, 0, this.maxSpeed, 0)
        this.x += random(-0.5, 0.5)

        this.r -= 0.05
    }
    draw() {
        let a = map(this.r, this.startR, 0, 255, 0)
        fill(0, a)
        circle(this.x, this.y, this.r * 2)
    }
}

function mousePressed() {
    print('mousePressed')
    drips.push(new Drip(mouseX, mouseY, random(5, 10)))
}

function setup() {
    createCanvas(windowWidth, windowHeight)
    angleMode(DEGREES)
}

function draw() {
    background(0, 255, 255)

    for (let i = drips.length - 1; i >= 0; i--) {
        drips[i].update()
        if (drips[i].r < 0) {
            drips.splice(i, 1)
            continue
        }
        drips[i].draw()
    }
    clock.ticks += 1
}
