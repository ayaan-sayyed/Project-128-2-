 var TheNights = "";
 var GamesBegin = "";
 var MagentaRiddim = "";

function preload() {
    TheNights = loadSound("The Nights.mp3");
   GamesBegin = loadSound("LET THE GAMES BEGIN.mp3");
    MagentaRiddim = loadSound("Magenta Riddim.mp3");
}

function setup() {
    canvas = createCanvas(600, 400);
    canvas.position(480, 250);
    video = createCapture(VIDEO);
    video.hide();
}

function draw() {
    image(video, 0, 0, 650, 470);
}


function play() {
    TheNights.play();
    TheNights.setVolume(0.7);
    TheNights.rate(1);
}

function stop() {
    TheNights.stop();
}
