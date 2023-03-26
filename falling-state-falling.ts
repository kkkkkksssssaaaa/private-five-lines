class Falling implements FallingState {
  isFalling(): boolean {
    return true;
  }

  moveHorizontal(tile: Tile, dx: number): void {

  }

  drop(tile: Tile, x: number, y: number): void {
    map[y + 1][x] = tile;
    map[y][x] = new Air();
  }
}