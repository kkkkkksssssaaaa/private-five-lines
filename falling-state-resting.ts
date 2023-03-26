class Resting implements FallingState {
  isFalling(): boolean {
    return false;
  }

  moveHorizontal(player: Player, tile: Tile, dx: number): void {
    if (map[player.getY()][player.getX() + dx + dx].isAir()
      && !map[player.getY() + 1][player.getX() + dx].isAir()) {
      map[player.getY()][player.getX() + dx + dx] = tile;
      moveToTile(player.getX() + dx, player.getY());
    }
  }

  drop(tile: Tile, x: number, y: number): void {
      
  }
}