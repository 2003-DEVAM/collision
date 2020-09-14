var fr,mr;





function setup() {

  createCanvas(1200,800);
  fr=createSprite(600, 400, 50, 50);
  mr=createSprite(600, 400, 60, 40);
  fr.shapeColor="green";
  mr.shapeColor="green";
}

function draw() {
  background(0); 
  mr.x=World.mouseX;
  mr.y=World.mouseY;

  if(mr.x-fr.x<mr.width/2+fr.width/2 && 
    fr.x-mr.x<mr.width/2+fr.width/2 
    && fr.y-mr.y<mr.height/2+fr.height/2 &&
    mr.y-fr.y<mr.height/2+fr.height/2){
      fr.shapeColor="red";
      mr.shapeColor="red";
}
else{
  fr.shapeColor="green";
  mr.shapeColor="green";
}
drawSprites();

}
    







 
