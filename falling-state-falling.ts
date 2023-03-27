class Falling implements FallingState {
  isFalling(): boolean {
    return true;
  }

  moveHorizontal(map: Map, player: Player, tile: Tile, dx: number): void {

  }

  drop(map: Map, tile: Tile, x: number, y: number): void {
    map.drop(tile, x, y);
  }
}