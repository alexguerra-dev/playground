/// On the first frame, the setup() function is called once and draw() is called repeatedly.
/// The draw() function is called 60 times per second by default.
let ticks = 0

let time = {
    ticks: 0,
    duration: { seconds: 0, minutes: 0, hours: 0 },
}

const tick = () => {
    time.ticks += 1
    time.duration.seconds = Math.floor(time.ticks / 60) % 60
    time.duration.minutes = Math.floor(time.ticks / 60 / 60) % 60
    time.duration.hours = Math.floor(time.ticks / 60 / 60) % 24
    return time
}

const blob = (x, y, r) => {
    fill(255, 0, 0)
    noStroke()
    ellipse(x, y, r, r)
    ellipse(x + 70, y, r, r)
    ellipse(x + 70, y, r + 40, r)
    ellipse(x + 70, y + 30, r + 10, r + 40)
}

function setup() {
    print('setup called')
    createCanvas(windowWidth, windowHeight)
    print('setup done')
}

function draw() {
    background(200)
    fill(0)
    text(`Seconds: ${time.duration.seconds} ฒ `, mouseX, 10)
    text(`Minutes: ${time.duration.minutes}`, 10, 30)
    blob(random(4), 100, 100)
    // print(time )
    ticks = tick()
}
