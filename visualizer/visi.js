let mic, fft;

function setup() {
    createCanvas(windowWidth, windowHeight);
    colorMode(HSL);
    noStroke();
    mic = new p5.AudioIn();
    mic.start();
    fft = new p5.FFT();
    fft.setInput(mic);
}

function draw() {
    background(0);
    translate(0, height / 2);
    let vals = fft.analyze();
    for (let i = 0; i < vals.length - 800; i++) {
        let xPos = map(i, 0, vals.length - 800, 0, width / 2);
        let y1Pos = map(vals[i], 0, 255, 0, height / 2);
        let y2Pos = map(vals[i], 0, 255, 0, -height / 2);
        let size = map(vals[i], 0, 255, 0, 30);
        let clr = color(map(vals[i], 0, 255, 200, 255));
        fill(clr, clr, clr);
        circle(xPos, y1Pos, size);
        circle(xPos, y2Pos, size);
        circle(width - xPos, y1Pos, size);
        circle(width - xPos, y2Pos, size);
    }
}

function mousePressed() {
    getAudioContext().resume();
}
