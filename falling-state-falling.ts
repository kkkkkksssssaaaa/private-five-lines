class Falling implements FallingState {
  isFalling(): boolean {
    return true;
  }

  moveHorizontal(player: Player, tile: Tile, dx: number): void {

  }

  drop(tile: Tile, x: number, y: number): void {
    map.getMap()[y + 1][x] = tile;
    map.getMap()[y][x] = new Air();
  }
}