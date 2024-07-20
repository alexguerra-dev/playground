/// On the first frame, the setup() function is called once and draw() is called repeatedly.
/// The draw() function is called 60 times per second by default.
let ticks = 0

let time = {
    ticks: 0,
    duration: { seconds: 0, minutes: 0, hours: 0 },
}

function setup() {
    print('setup called')
    createCanvas(1000, 1000)
    print('setup done')
}

function draw() {
    background(220)
}
