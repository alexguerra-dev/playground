// This is the main file for the sketch

let clock = {
    ticks: 0,
}
let myImage

const density =
    '$@B%8&WM#*oahkbdpqwmZO0QLCJUYXzcvunxrjft/|()1{}[]?-_+~<>i!lI;:,"^`\'.'

function preload() {
    // Load any assets here
    myImage = loadImage('data/images/smallDragon.jpg')
}

function setup() {
    createCanvas(windowWidth, windowHeight)
    angleMode(DEGREES)
}

function draw() {
    background(0)

    let w = width / myImage.width
    let h = height / myImage.height
    myImage.loadPixels()

    for (let i = 0; i < myImage.width; i++) {
        for (let j = 0; j < myImage.height; j++) {
            const pixelIndex = (i + j * myImage.width) * 4
            const r = myImage.pixels[pixelIndex + 0]
            const g = myImage.pixels[pixelIndex + 1]
            const b = myImage.pixels[pixelIndex + 2]
            const avg = (r + g + b) / 3
            noStroke()
            fill(avg)

            textAlign(CENTER, CENTER)
            text('G', i * w + w * 0.5, j * h + h * 0.5)
        }
    }

    clock.ticks += 1
    noLoop()
}
