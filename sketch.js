const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg;
var hour;
var bg ;

function preload() {
    // create getBackgroundImg( ) here
    getBackgroundImg();
}

function setup(){
    var canvas = createCanvas(1200,700);
    engine = Engine.create();
    world = engine.world;

}

function draw(){

    // add condition to check if any background image is there to add
    if(backgroundImg){
        background(backgroundImg);
    }
    else{
        background("black");
    }


    Engine.update(engine);

    // write code to display time in correct format here
    if(hour>=12){ 
        text("Time : "+ hour%12 + " PM", 50,100);
     }
     else if(hour==0){ 
     text("Time : 12 AM",100,100); 
     }
     else{ 
     text("Time : "+ hour%12 + " AM", 50,100); 
    }



}

async function getBackgroundImg(){

    // write code to fetch time from API
    var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata")

    //change the data in JSON format
    var responsejson = await response.json();
    var datetime = responsejson.datetime;

    // write code slice the datetime
    hour = datetime.slice(11,13);


    // add conditions to change the background images from sunrise to sunset
    if(hour>=06&& hour<=08){
        bg = "sunrise1.png";
    }
    else  if(hour>=09 && hour<=11){
        bg = "sunrise2.png";
    }
    else  if(hour>=12 && hour<=17){
        bg = "sunset10.png";
    }
    else  if(hour>=18 && hour<=19){
        bg = "sunset11.png";
    }
    else{
        bg = "sunset12.png";
    }
    


    //load the image in backgroundImg variable here
    backgroundImg = loadImage(bg);

}
