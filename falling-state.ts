interface FallingState {
  isFalling(): boolean;
  isResting(): boolean;
  moveHorizontal(tile: Tile, dx: number): void;
}