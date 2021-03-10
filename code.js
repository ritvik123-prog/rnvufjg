
var cube,rect,rect1,rect2,rect3,egdes

function setup(){
 rect=createSprite(10,395,100,10)
rect.shapeColor="orange"
 rect1=createSprite(125,395,100,10)
rect1.shapeColor="green"
 rect2=createSprite(250,395,100,10)
rect2.shapeColor="blue"
 rect3=createSprite(375,395,100,10)
rect3.shapeColor="purple"
cube=createSprite(200,200,10,10)
cube.shapeColor="yellow"
cube.velocityX=-2
cube.velocityY=3
edges=createEdgeSprites()

}
function draw() {
  createCanvas(400,400)

  if(cube.isTouching(rect)){
    cube.bounceOff(rect)
    cube.shapeColor="orange"
  }
  else if(cube.isTouching(rect1)){
      cube.bounceOff(rect1) 
       cube.shapeColor="green"
  }
 else if(cube.isTouching(rect2)){
    cube.bounceOff(rect2)
    cube.shapeColor="blue"
 }
 else if(cube.isTouching(rect3)){
     cube.bounceOff(rect3)
    cube.shapeColor="purple"
 }
 cube.bounceOff(edges)
 
  
  drawSprites()
}

