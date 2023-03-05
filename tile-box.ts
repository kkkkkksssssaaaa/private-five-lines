class Box implements Tile {
  constructor(private falling: FallingState) {
    this.falling = falling;
  }

  isFlux(): boolean {
    return false;
  }

  isUnbreakable(): boolean {
      return false;
  }

  isStone(): boolean {
    return false;
  }

  isFallingStone(): boolean {
    return this.falling.isFalling();
  }

  isAir(): boolean {
    return false;
  }

  isPlayer(): boolean {
    return false;
  }

  isBox(): boolean {
    return true;
  }

  isFallingBox(): boolean {
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

  isEdible(): boolean {
    return false;
  }

  isPushable(): boolean {
    return true;
  }

  moveHorizontal(dx: number): void {
    this.falling.moveHorizontal(this, dx);
  }

  isStony(): boolean {
    return false;
  }
  
  isBoxy(): boolean {
    return true;
  }

  drop(): void {
    this.falling = new Falling();
  }

  rest(): void {
    this.falling = new Resting();
  }

  isFalling(): boolean {
    return this.falling.isFalling();
  }

  canFall(): boolean {
    return true;
  }
}