class Box implements Tile {
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

  moveHorizontal(map: Map, player: Player, dx: number): void {
    this.fallingStrategy
      .moveHorizontal(map, player, this, dx);
  }

  moveVertical(map: Map, player: Player, dy: number): void {
      
  }

  update(map: Map, x: number, y: number): void {
    this.fallingStrategy.update(map, this, x, y);
  }

  getBlockOnTopState(): FallingState {
    return new Resting();
  }
}