
const TILE_SIZE = 30;
const FPS = 30;
const SLEEP = 1000 / FPS;

const RAW_TILES: RawTile2[] = [
  RawTile2.AIR,
  RawTile2.FLUX,
  RawTile2.UNBREAKABLE,
  RawTile2.PLAYER,
  RawTile2.STONE, RawTile2.FALLING_STONE,
  RawTile2.BOX, RawTile2.FALLING_BOX,
  RawTile2.KEY1, RawTile2.LOCk1,
  RawTile2.KEY2, RawTile2.LOCK2
]

const YELLOW_KEY =
  new KeyConfiguration("#ffcc00", true, new RemoveLock1());

const SKY_KEY =
  new KeyConfiguration("#ffcc00", false, new RemoveLock2());

let rawMap: number[][] = [
  [2, 2, 2, 2, 2, 2, 2, 2],
  [2, 3, 0, 1, 1, 2, 0, 2],
  [2, 4, 2, 6, 1, 2, 0, 2],
  [2, 8, 4, 1, 1, 2, 0, 2],
  [2, 4, 1, 1, 1, 9, 0, 2],
  [2, 2, 2, 2, 2, 2, 2, 2],
];

let inputs: Input[] = [];

function assertExhausted(x: never): never {
  throw new Error("Unexpected object: " + x);
}

function transformTile(tile: RawTile2) {
  return tile.transform();
}

function remove(shouldRemove: RemoveStrategy) {
  map.remove(shouldRemove);
}

function update() {
  handleInputs();
  updateMap();
}

function handleInputs() {
  while (inputs.length > 0) {
    let input = inputs.pop();
    input.handle(map, player);
  }
}

function updateMap() {
  map.update();
}

function draw() {
  let g = createGraphics();

  drawMap(g);
  player.draw(g);
}

function createGraphics() {
  let canvas = document.getElementById("GameCanvas") as HTMLCanvasElement;
  let g = canvas.getContext("2d");

  g.clearRect(0, 0, canvas.width, canvas.height);

  return g;
}

function drawMap(g: CanvasRenderingContext2D) {
  map.draw(g);
}

function drawTile(g: CanvasRenderingContext2D, x: number, y: number) {
  map.drawTile(g, x, y);
}

function drawPlayer(g: CanvasRenderingContext2D) {

}

function gameLoop() {
  let before = Date.now();
  update();
  draw();
  let after = Date.now();
  let frameTime = after - before;
  let sleep = SLEEP - frameTime;
  setTimeout(() => gameLoop(), sleep);
}

window.onload = () => {
  gameLoop();
}

const LEFT_KEY = "ArrowLeft";
const UP_KEY = "ArrowUp";
const RIGHT_KEY = "ArrowRight";
const DOWN_KEY = "ArrowDown";
window.addEventListener("keydown", e => {
  if (e.key === LEFT_KEY || e.key === "a") inputs.push(new Left());
  else if (e.key === UP_KEY || e.key === "w") inputs.push(new Up());
  else if (e.key === RIGHT_KEY || e.key === "d") inputs.push(new Right());
  else if (e.key === DOWN_KEY || e.key === "s") inputs.push(new Down());
});

