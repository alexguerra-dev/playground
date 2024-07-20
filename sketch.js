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

function setup() {
    print('setup called')
    createCanvas(1000, 1000)
    print('setup done')
}

function draw() {
    background(220)

    text(`Seconds: ${time.duration.seconds}`, 10, 10)
    text(`Minutes: ${time.duration.minutes}`, 10, 30)
    ticks = tick()
}
