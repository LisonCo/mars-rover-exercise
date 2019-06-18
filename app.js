rover = {
  direction : "N",
  x : 0,
  y : 0,
  travelLog : [],
}
// ======================

// ======================


function turnLeft(rover){
  console.log("turnLeft was called");
  switch(rover.direction){
    case "N" :
    rover.direction = "W";
    break;
    case "W" :
    rover.direction = "S";
    break;
    case "S" :
    rover.direction = "E";
    case "E" :
    rover.direction = "N";
  };
  console.log("The rover coordinates are [" + rover.x + ", " + rover.y + "]");
}

function turnRight(rover){
  console.log("turnRight was called");
  switch(rover.direction){
    case "N" :
    rover.direction = "E";
    break;
    case "W" :
    rover.direction = "N";
    break;
    case "S" :
    rover.direction = "W";
    case "E" :
    rover.direction = "S";
  };
  console.log("The rover coordinates are [" + rover.x + ", " + rover.y + "]");
}

function moveForward(rover){
  switch(rover.direction) {
    case "N" : 
rover.y -= 1;
    break;
   case "W":
rover.x -= 1;
    break;
    case "S" :
rover.y += 1;
    break;
   case "E" :
rover.x += 1;
    break;
  };
  console.log("moveForward was called");
  console.log("The rover coordinates are [" + rover.x + ", " + rover.y + "]");
  rover.travelLog.push(["["+rover.x + ", " + rover.y+"]"])
}

function direction(){
  console.log("The rover is facing "+ rover.direction);
}

function commandList(myList) {
  for(i=0 ; i <= myList.length ; i++) {
switch(myList[i]){
  case "r" :
  turnRight(rover);
  break;
  case "l" :
  turnLeft(rover);
  break;
  case "f" :
  moveForward(rover);
  break;
    }
  }
  console.log("The rover has been to : ["+ rover.travelLog+"]");
}

function displayTravelLog() {
  console.log("The rover has been to : ["+ rover.travelLog+"]");
}

function moveBackward(rover){
  switch(rover.direction) {
    case "N" : 
rover.x -= 1;
    break;
   case "W":
rover.y -= 1;
    break;
    case "S" :
rover.y -= 1;
    break;
   case "E" :
rover.x -= 1;
    break;
  };
  console.log("moveBackward was called");
  console.log("The rover coordinates are [" + rover.x + ", " + rover.y + "]");
  rover.travelLog.push(["["+rover.x + ", " + rover.y+"]"])
}





