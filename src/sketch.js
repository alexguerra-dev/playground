// This is the main file for the sketch

let clock = {
    ticks: 0,
}
let myImage

const density =
    '$@B%8&WM#*oahkbdpqwmZO0QLCJUYXzcvunxrjft/|()1{}[]?-_+~<>i!lI;:,"^`\'.'

const makeImageArray = (image) => {
    let imageArray = []
    image.loadPixels()
    for (let y = 0; y < image.height; y++) {
        let row = []
        for (let x = 0; x < image.width; x++) {
            let index = (x + y * image.width) * 4
            let r = image.pixels[index]
            let g = image.pixels[index + 1]
            let b = image.pixels[index + 2]
            let brightness = (r + g + b) / 3
            row.push(brightness)
        }
        imageArray.push(row)
    }
    return imageArray
}

function preload() {
    // Load any assets here
    myImage = loadImage('data/images/dragon.jpg')
}

function setup() {
    createCanvas(windowWidth, windowHeight)
    angleMode(DEGREES)
    print(myImage)
    const theArrayOfImage = makeImageArray(myImage)
    print(theArrayOfImage)
}

function draw() {
    background(0)

    let w = width / myImage.width
    let h = height / myImage.height
    loadPixels()

    for (let i = 0; i < myImage.width; i++) {
        for (let j = 0; j < myImage.height; j++) {
            const pixelIndex = (i + j * myImage.width) * 4
            const r = myImage.pixels[pixelIndex + 0]
            const g = myImage.pixels[pixelIndex + 1]
            const b = myImage.pixels[pixelIndex + 2]

            noStroke()
            fill(r, g, b)
            square(i * w, j * h, w)
        }
    }

    clock.ticks += 1
    noLoop()
}
