class Resting implements FallingState {
  isFalling(): boolean {
    return false;
  }

  moveHorizontal(map: Map, player: Player, tile: Tile, dx: number): void {
    player.pushHorizontal(map, tile, dx);
  }

  drop(map: Map, tile: Tile, x: number, y: number): void {
      
  }
}