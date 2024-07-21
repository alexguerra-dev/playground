// This is the main file for the sketch

let clock = {
    ticks: 0,
}

let myImage

const density =
    '$@B%8&WM#*oahkbdpqwmZO0QLCJUYXzcvunxrjft/|()1{}[]?-_+~<>i!lI;:,"^`\'.'

function preload() {
    // Load any assets here
    myImage = loadImage('data/images/dragon.jpg')
}

function setup() {
    createCanvas(windowWidth, windowHeight)
    angleMode(DEGREES)
}

function draw() {
    // background(0)
    const w = width / myImage.width
    const h = height / myImage.height
    myImage.loadPixels()
    let asciiImage = ''

    for (let i = 0; i < 10; i++) {
        print('THis is number ' + i)

        for (let j = 0; j < 10; j++) {
            print('This is number ' + j)
        }
    }

    for (let i = 0; i < myImage.height; i++) {
        let row = ''
        for (let j = 0; j < myImage.width; j++) {
            const lengthOfDensityString = density.length
            const pixelIndex = (i + j * myImage.width) * 4

            const r = myImage.pixels[pixelIndex + 0]
            const g = myImage.pixels[pixelIndex + 1]
            const b = myImage.pixels[pixelIndex + 2]

            const avg = (r + g + b) / 3

            const densityCharacterIndex = floor(
                map(avg, 0, 255, lengthOfDensityString, 0),
            )
            noStroke()
            fill(avg)

            textAlign(CENTER, CENTER)
            text(
                density[densityCharacterIndex],
                i * w + w * 0.5,
                j * h + h * 0.5,
            )
        }
    }

    clock.ticks += 1
    noLoop()
}
