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
    this.falling.moveHorizontal(this, dx);
  }

  isFalling(): boolean {
    return this.falling.isFalling();
  }

  canFall(): boolean {
    return true;
  }

  update(x: number, y: number): void {
    if (map[y + 1][x].isAir()) {
      // 돌이나 상자를 떨어뜨리고 타일을 교체한 후 새로 공기를 주입
      this.falling = new Falling();
      map[y + 1][x] = this;
      map[y][x] = new Air();
    } else if (this.falling.isFalling()) {
      this.falling = new Resting();
    }
  }
}