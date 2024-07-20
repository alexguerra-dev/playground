// This is the main file for the sketch

let clock = {
    ticks: 0,
}
let myImage
let video
let asciiDiv

const density =
    '$@B%8&WM#*oahkbdpqwmZO0QLCJUYXzcvunxrjft/|()1{}[]?-_+~<>i!lI;:,"^`\'.'

function preload() {
    // Load any assets here
    myImage = loadImage('data/images/smallDragon.jpg')
}

function setup() {
    // createCanvas(windowWidth, windowHeight)
    // angleMode(DEGREES)
    noCanvas()
    video = createCapture(VIDEO)
    video.size(48, 48)

    asciiDiv = createDiv()
}

function draw() {
    // background(0)

    // myImage.loadPixels()
    video.loadPixels()
    print(video)
    let asciiImage = ''
    for (let j = 0; j < video.height; j++) {
        let row = ''
        for (let i = 0; i < video.width; i++) {
            const lengthOfDensityString = density.length
            const pixelIndex = (i + j * video.width) * 4
            const r = video.pixels[pixelIndex + 0]
            const g = video.pixels[pixelIndex + 1]
            const b = video.pixels[pixelIndex + 2]
            print(r, g, b)
            const avg = (r + g + b) / 3

            const densityCharacterIndex = floor(
                map(avg, 0, 255, lengthOfDensityString, 0),
            )

            const c = density.charAt(densityCharacterIndex)
            if (c == ' ') {
                // asciiImage += '&nbsp'
                asciiImage += 'c'
            } else {
                asciiImage += c
                // print('asd', c)
            }
            // noStroke()
            // fill(avg)

            // textAlign(CENTER, CENTER)
            // text(
            //     density[densityCharacterIndex],
            //     i * w + w * 0.5,
            //     j * h + h * 0.5,
            // )
            asciiImage += '<br>'
        }
    }
    asciiDiv.html(asciiImage)
    print(asciiImage)
    clock.ticks += 1
    noLoop()
}
