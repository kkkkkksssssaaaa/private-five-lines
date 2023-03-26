class Unbreakable implements Tile {
  isFlux(): boolean {
    return false;
  }

  isUnbreakable(): boolean {
    return true;
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

  isKey1(): boolean {
    return false;
  }

  isKey2(): boolean {
    return false;
  }

  color(g: CanvasRenderingContext2D): void {
    g.fillStyle = "#999999";
  }

  draw(g: CanvasRenderingContext2D, x: number, y: number): void {
    g.fillStyle = "#999999";
    g.fillRect(
      x * TILE_SIZE,
      y * TILE_SIZE,
      TILE_SIZE,
      TILE_SIZE
    );
  }

  moveHorizontal(player: Player, dx: number): void {

  }

  moveVertical(player: Player, dy: number): void {
      
  }

  update(x: number, y: number): void {
    
  }

  getBlockOnTopState(): FallingState {
    return new Resting();
  }
}