class Stone implements Tile {
  private fallingStrategy: FallStrategy

  constructor(falling: FallingState) {
    this.fallingStrategy = new FallStrategy(falling);
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

  color(g: CanvasRenderingContext2D): void {
    g.fillStyle = "#0000cc";
  }

  draw(g: CanvasRenderingContext2D, x: number, y: number): void {
    g.fillStyle = "#0000cc";
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

  update(x: number, y: number): void {
    this.fallingStrategy.update(this, x, y);
  }
}