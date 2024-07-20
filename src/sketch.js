// This is the main file for the sketch

let clock = {
    ticks: 0,
}

function setup() {
    createCanvas(windowWidth, windowHeight)
    angleMode(DEGREES)

    fetch('https://api.coindesk.com/v1/bpi/currentprice.json')
        .then((response) => response.json())
        .then((data) => {
            console.log(data)
        })
        .catch((error) => {
            console.error(error)
        })
}

function draw() {
    background(0)
    clock.ticks += 1
}
