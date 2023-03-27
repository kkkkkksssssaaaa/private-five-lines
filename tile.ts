interface Tile {
  isFlux(): boolean;
  isUnbreakable(): boolean;
  isAir(): boolean;
  isPlayer(): boolean;
  isLock1(): boolean;
  isLock2(): boolean;
  color(g: CanvasRenderingContext2D): void;
  draw(g: CanvasRenderingContext2D, x: number, y: number): void;
  moveHorizontal(map: Map, player: Player, dx: number): void;
  moveVertical(map: Map, player: Player, dy: number): void;
  update(map: Map, x: number, y: number): void;
  getBlockOnTopState(): FallingState;
}