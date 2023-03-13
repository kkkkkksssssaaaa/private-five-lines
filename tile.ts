interface Tile {
  isFlux(): boolean;
  isUnbreakable(): boolean;
  isAir(): boolean;
  isPlayer(): boolean;
  draw(g: CanvasRenderingContext2D, x: number, y: number): void;
  moveHorizontal(dx: number): void;
  update(x: number, y: number): void;
}