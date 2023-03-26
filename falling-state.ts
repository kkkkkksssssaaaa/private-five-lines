interface FallingState {
  isFalling(): boolean;
  moveHorizontal(tile: Tile, dx: number): void;
  drop(tile: Tile, x: number, y: number): void;
}