/// On the first frame, the setup() function is called once and draw() is called repeatedly.
/// The draw() function is called 60 times per second by default.
let tick = 0

function setup() {
    createCanvas(1000, 1000)
    print('setup')
}

function draw() {
    background(220)
}
