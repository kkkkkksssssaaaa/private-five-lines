class FallStrategy {
  constructor(private falling: FallingState) {
    this.falling = falling;
  }

  moveHorizontal(player: Player, tile: Tile, dx: number) {
    this.falling.moveHorizontal(player, tile, dx);
  }

  update(tile: Tile, x: number, y: number): void {
    // 돌이나 상자를 떨어뜨리고 타일을 교체한 후 새로 공기를 주입
    this.falling =
      map[y + 1][x].getBlockOnTopState();
    
    this.falling.drop(tile, x, y);
  }
}