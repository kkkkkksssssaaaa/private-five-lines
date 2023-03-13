interface Tile {
  isFlux(): boolean;
  isUnbreakable(): boolean;
  isAir(): boolean;
  isPlayer(): boolean;
  isKey1(): boolean;
  isKey2(): boolean;
  isLock1(): boolean;
  isLock2(): boolean;
  color(g: CanvasRenderingContext2D): void;
  draw(g: CanvasRenderingContext2D, x: number, y: number): void;
  moveHorizontal(dx: number): void;
  update(x: number, y: number): void;
}