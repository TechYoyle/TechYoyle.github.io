$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }

    // Create walls - do not delete or modify this code
    createPlatform(-50, -50, canvas.width + 100, 50); // top wall
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200, "navy"); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall

    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////

    // TODO 1 - Enable the Grid
    toggleGrid();


    // TODO 2 - Create Platforms
    createPlatform(200, 625, 80, 50, "#eb6767");
    createPlatform(400, 500, 80, 50, "#eb6767");
    createPlatform(600, 400, 120, 50, "#eb6767");
    createPlatform(1000, 600, 80, 50, "#eb6767");
    createPlatform(1200, 500, 80, 50, "#eb6767");
    createPlatform(820, 520, 80, 50, "#eb6767");

    // TODO 3 - Create Collectables
    createCollectable("max", 400, 450, 0, 0);
    createCollectable("diamond", 830, 480, 0, 0);
    createCollectable("grace", 1230, 450, 0, 0);
    
    // TODO 4 - Create Cannons
    createCannon("top", 200, 800);
    createCannon("right", 300, 1);
    createCannon("bottom", 1130, 600);
    
    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
