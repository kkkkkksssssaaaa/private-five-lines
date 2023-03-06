class FallStrategy {
  constructor(private falling: FallingState) {
    this.falling = falling;
  }

  getFalling(): FallingState {
    return this.falling;
  }

  update(tile: Tile, x: number, y: number): void {
    // 돌이나 상자를 떨어뜨리고 타일을 교체한 후 새로 공기를 주입
    this.falling = map[y + 1][x].isAir()
      ? new Falling()
      : new Resting();
    
    this.drop(tile, x, y);
  }

  private drop(tile: Tile, x: number, y: number): void {
    if (this.falling.isFalling()) {
      map[y + 1][x] = tile;
      map[y][x] = new Air();
    }
  }
}