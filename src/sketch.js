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
    print(density)
}

function draw() {
    background(0)
    image(myImage, 0, 0, myImage.windowHeight, myImage.windowWidth)
    clock.ticks += 1
}
