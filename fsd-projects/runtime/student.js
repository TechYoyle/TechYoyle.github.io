function moveScenery() {
  // TODO 2: Move background scenery based on current level speed
  for (var i = 0; i < scenery.building.instances.length; i++) {
    var buildingInstance = scenery.building.instances[i];
    buildingInstance.x += buildingInstance.speedX + currentLevel.speed;
    if (buildingInstance.x + buildingInstance.width < 0) {
      buildingInstance.x += scenery.building.loopWidth;
    }
  }
  for (var i = 0; i < scenery.lamp.instances.length; i++) {
    var lampInstance = scenery.lamp.instances[i];
    lampInstance.x += lampInstance.speedX + currentLevel.speed;
    if (lampInstance.x + lampInstance.width < 0) {
      lampInstance.x = scenery.lamp.loopWidth;
    }
  }
}

function generateLevel() {
  // TODO 3: Generate the current level's game objects
  console.log("test", currentLevel.gameObjects);
  for (var i = 0; i < currentLevel.gameObjects.length; i++) {
    var currentObject = currentLevel.gameObjects[i];
    create(currentObject);
    console.log(currentObject.type, currentObject.kind);
  }
}

function create(obj) {
  // TODO 4: Create a game object based on its type and kind
  if (obj.type === "obstacle") {
    makeObstacle(obj);
  } else if (obj.type === "enemy") {
    makeEnemy(obj);
  } else if (obj.type === "powerup") {
    makePowerup(obj);
  } else if (obj.type === "goal") {
    makeGoal(obj);
  } else if (obj.type === "platform") {
    makePlatform(obj);
  }
}

function filterObjects(type) {
  // TODO 5: Return only the game objects of the specified type
  let matchedObjects = [];
  for (let i = 0; i < currentLevel.gameObjects.length; i++) {
    let obj = currentLevel.gameObjects[i];
    
    if (obj.type === type) {
      matchedObjects.push(obj);
    }
  }
  return matchedObjects;
}

function moveGameObjects(objectList) {
  // TODO 6: Move all game objects of a single type based on speeds
  /*
  1. **🔍 Locate the `moveGameObjects` function**
   - Open **student.js**
   - Find the function named `moveGameObjects`
   - This function should take **one argument**: an array of game objects.

  2. **Loop through the array of objects**
    - Inside the function, write a loop that iterates over the array you receive.

  3. **Store the current object in a variable**
    - Inside the loop, store the current object in a variable for easy access.

  4. **Update the object’s position**
    - Modify the object’s position by:
      - Adding the object’s speed to the current position
      - Subtracting the level’s speed from the current position
  */
  for (let i = 0; i < objectList.length; i++) {
    let currentObject = objectList[i];
    let objectSpeed = currentObject.speed || 0; 
    currentObject.x += objectSpeed - currentLevel.speed;
  }
}

function handleProjectileCollisions() {
  // TODO 8: Handle collisions between projectiles and enemies
}

function handleHallebotGenericCollisions() {
  // TODO 9: Handle collisions between Hallebot and game objects
}

function triggerLevelTransition() {
  // TODO 10: Transition to the next level or show win screen
}
