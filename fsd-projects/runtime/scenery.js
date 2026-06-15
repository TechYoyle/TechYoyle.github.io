// === SCENERY CREATION ===

/* Important Note:
    The background images will be drawn in order from top to bottom, so put the ones in the far background first, then work forward. Note that none of the background images can go in front of Hallebot.
*/

// TODO 1: Create more scenery instances
const scenery = {
  moon: {
    imageUrl: "images/backgrounds/moon.png",
    loopWidth: 0,
    instances: [{ x: 100, y: 175, width: 150, height: 150 }],
  },
  building: {
    imageUrl: "images/backgrounds/building.png",
    loopWidth: 1400,
    instances: [
      { x: -20, width: 80, height: 270, speedX: -2.5 },
      { x: 130, width: 100, height: 300, speedX: -2.5 },
      { x: 50, width: 120, height: 360, speedX: -2.5 },
      { x: 220, width: 120, height: 370, speedX: -2.5 },
      { x: 300, width: 110, height: 330, speedX: -2.5 },
      { x: 370, width: 100, height: 270, speedX: -2.5 },
      { x: 500, width: 120, height: 360, speedX: -2.5 },
      { x: 420, width: 110, height: 300, speedX: -2.5 },
      { x: 600, width: 110, height: 330, speedX: -2.5 },
      { x: 700, width: 130, height: 390, speedX: -2.5 },
      { x: 870, width: 110, height: 330, speedX: -2.5 },
      { x: 800, width: 90, height: 270, speedX: -2.5 },
      { x: 1050, width: 90, height: 300, speedX: -2.5 },
      { x: 950, width: 120, height: 360, speedX: -2.5 },
      { x: 1230, width: 90, height: 270, speedX: -2.5 },
      { x: 1120, width: 130, height: 390, speedX: -2.5 },
      { x: 1300, width: 110, height: 330, speedX: -2.5 },
      { x: 1370, width: 80, height: 240, speedX: -2.5 },
    ],
  },
  lamp: {
    imageUrl: "images/backgrounds/lamp.png",
    loopWidth: 1400,
    instances: [
      { x: 100, width: 50, height: 150, speedX: -6 },
      { x: 400, width: 50, height: 150, speedX: -6 },
      { x: 700, width: 50, height: 150, speedX: -6 },
      { x: 1000, width: 50, height: 150, speedX: -6 },
      { x: 1300, width: 50, height: 150, speedX: -6 }
    ],
  },
};
