var fixedRect, movingRect,gameObj1,gameObj2,gameObj3,gameObj4;

 
function setup() { createCanvas(1200, 800);
   fixedRect = createSprite(600, 400, 50, 80);
    fixedRect.shapeColor = "green"; fixedRect.debug = true;
     movingRect = createSprite(400, 200, 80, 30); 
    movingRect.shapeColor = "green"; movingRect.debug = true; 
    gameObj1=createSprite(100,100,50,50); 
    gameObj2=createSprite(200,100,50,50);
     gameObj3=createSprite(300,100,50,50);
      gameObj4=createSprite(400,100,50,50); 
      gameObj1.shapeColor="green";
       gameObj2.shapeColor="green"; 
      gameObj3.shapeColor="green";
       gameObj4.shapeColor="green"; 
       movingRect.velocityY = -5; 
       fixedRect.velocityY = +5;
      }

       function draw() { background(0, 0, 0);
         movingRect.x = World.mouseX;
          movingRect.y = World.mouseY;
           if (isTouching(movingRect,gameObj3)) {
              movingRect.shapeColor = "yellow"; 
              gameObj3.shapeColor = "yellow"; }
               else { movingRect.shapeColor = "green"; 
               gameObj1.shapeColor = "green"; } 
               bounceOff(movingRect,fixedRect);
               drawSprites(); }


















