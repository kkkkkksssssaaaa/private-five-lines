interface Tile {
  isFlux(): boolean;
  isUnbreakable(): boolean;
  isStone(): boolean;
  isFallingStone(): boolean;
  isAir(): boolean;
  isPlayer(): boolean;
  isBox(): boolean;
  isFallingBox(): boolean;
  isKey1(): boolean;
  isKey2(): boolean;
  isLock1(): boolean;
  isLock2(): boolean;
  color(g: CanvasRenderingContext2D): void;
  draw(g: CanvasRenderingContext2D, x: number, y: number): void;
  isEdible(): boolean;
  isPushable(): boolean;
  moveHorizontal(dx: number): void;
  isStony(): boolean;
  isBoxy(): boolean;
}