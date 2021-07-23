function preload(){

}

function setup() {
   
    video = createCapture(VIDEO);
    video.size(550,150);

    canvas = createCanvas(550, 550);
    canvas.position(550,160);

    posenet = ml5.poseNet(video, modelloaded);
    posenet.on('pose', gotresult);
  }
  
  function draw() {
    background('#a89d9d');
  }

  function  modelloaded(){
    console.log("poseNet is working");
  }

  function gotresult(results){
if(results.length > 0) {
console.log(results);

}

  }