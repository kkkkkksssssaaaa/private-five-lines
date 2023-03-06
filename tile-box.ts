class Box implements Tile {
  private fallingStrategy: FallingStrategy

  constructor(falling: FallingState) {
    this.fallingStrategy = new FallingStrategy(falling);
  }

  isFlux(): boolean {
    return false;
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

  isKey1(): boolean {
    return false;
  }

  isKey2(): boolean {
    return false;
  }

  isLock1(): boolean {
    return false;
  }

  isLock2(): boolean {
    return false;
  }

  color(g: CanvasRenderingContext2D): void {
    g.fillStyle = "#8b4513";
  }

  draw(g: CanvasRenderingContext2D, x: number, y: number): void {
    g.fillStyle = "#8b4513";
    g.fillRect(
      x * TILE_SIZE,
      y * TILE_SIZE,
      TILE_SIZE,
      TILE_SIZE
    );
  }

  moveHorizontal(dx: number): void {
    this.fallingStrategy
      .getFalling()
      .moveHorizontal(this, dx);
  }

  isFalling(): boolean {
    return this.fallingStrategy
      .getFalling()
      .isFalling();
  }

  canFall(): boolean {
    return true;
  }

  update(x: number, y: number): void {
    this.fallingStrategy.update(this, x, y);
  }
}