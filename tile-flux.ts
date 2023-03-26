class Flux implements Tile {
  isFlux(): boolean {
    return true;
  }

  isUnbreakable(): boolean {
    return false;
  }

  isAir(): boolean {
    return false;
  }

  isPlayer(): boolean {
    return false;
  }

  isLock1(): boolean {
    return false;
  }

  isLock2(): boolean {
    return false;
  }

  color(g: CanvasRenderingContext2D): void {
    g.fillStyle = "#ccffcc";
  }

  draw(g: CanvasRenderingContext2D, x: number, y: number): void {
    g.fillStyle = "#ccffcc";
    g.fillRect(
      x * TILE_SIZE,
      y * TILE_SIZE,
      TILE_SIZE,
      TILE_SIZE
    );
  }

  moveHorizontal(player: Player, dx: number): void {
    moveToTile(player.getX() + dx, player.getY());
  }

  moveVertical(player: Player, dy: number): void {
    moveToTile(player.getX(), player.getY() + dy);
  }

  update(x: number, y: number): void {

  }

  getBlockOnTopState(): FallingState {
    return new Resting();
  }
}