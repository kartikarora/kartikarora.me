let mic, fft, colorToggleButton, enableColor = false;

function setup() {
    createCanvas(windowWidth, windowHeight);
    colorMode(HSL);
    noStroke();
    mic = new p5.AudioIn();
    mic.start();
    fft = new p5.FFT();
    fft.setInput(mic);

    colorToggleButton = createButton('Toggle color mode');
    colorToggleButton.mousePressed(toggleColor);
    colorToggleButton.position(width - colorToggleButton.width - 10, 10);
}

function draw() {
    background(0);
    // toggle


    // fft stuff
    translate(0, height / 2);
    let vals = fft.analyze();
    for (let i = 0; i < vals.length - 800; i++) {
        let xPos = map(i, 0, vals.length - 800, 0, width / 2);
        let y1Pos = map(vals[i], 0, 255, 0, height / 2);
        let y2Pos = map(vals[i], 0, 255, 0, -height / 2);
        let size = map(vals[i], 0, 255, 0, 30);
        if (enableColor) {
            colorMode(HSB, 100);
            let clr = map(vals[i], 0, 255, 0, 200);
            fill(clr, 100, 100);
        } else {
            colorMode(RGB);
            let clr = color(map(vals[i], 0, 255, 200, 255));
            fill(clr, clr, clr);
        }
        circle(xPos, y1Pos, size);
        circle(xPos, y2Pos, size);
        circle(width - xPos, y1Pos, size);
        circle(width - xPos, y2Pos, size);
    }
}

function toggleColor() {
    enableColor = !enableColor;
}

function mousePressed() {
    getAudioContext().resume();
}
