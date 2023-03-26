class Resting implements FallingState {
  isFalling(): boolean {
    return false;
  }

  moveHorizontal(player: Player, tile: Tile, dx: number): void {
    player.pushHorizontal(tile, dx);
  }

  drop(tile: Tile, x: number, y: number): void {
      
  }
}