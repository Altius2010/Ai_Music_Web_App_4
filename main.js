song1 = "";
song2 = "";
leftWristX = 0;
leftWristY = 0;
rightWristX = 0;
rightWristY = 0;

function preload() {
    song1 = loadSound("Lost Sky Fearless ptII feat Chris Linton NCS Release.mp3");
    song2 = loadSound("Professional Griefers - deadmau5 ft Gerard Way【Asphalt 8 Airborne OST】.mp3");
}

function setup() {
    canvas = createCanvas(600, 500);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded() {
    console.log("Pose Net is Initialiazed");
}

function gotPoses(results) {
    if (results.length > 0) {
        console.log(results);
        leftWristX = results[0].pose.leftWrist.x;
        leftWristY = results[0].pose.leftWrist.y;
        rightWristX = results[0].pose.rightWrist.x;
        rightWristY = results[0].pose.rightWrist.y;
        console.log("Left wrist X = " + leftWristX);
        console.log("Left wrist Y = " + leftWristY);
        console.log("Right Wrist X = " + rightWristX);
        console.log("Right Wrist Y = " + rightWristY);
    }
}

function draw() {
    image(video, 0, 0, 600, 500);
}

function play() {
    song1.play();
    song.setVolume(1);
    song.rate(1);
    song2.play();
    song.setVolume(1);
    song.rate(1);
}
