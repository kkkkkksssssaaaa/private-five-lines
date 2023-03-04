class Resting implements FallingState {
  isFalling(): boolean {
    return false;
  }

  isResting(): boolean {
    return true;
  }

  moveHorizontal(tile: Tile, dx: number): void {
    if (map[playery][playerx + dx + dx].isAir()
      && !map[playery + 1][playerx + dx].isAir()) {
      map[playery][playerx + dx + dx] = tile;
      moveToTile(playerx + dx, playery);
    }
  }
}