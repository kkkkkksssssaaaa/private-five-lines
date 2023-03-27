class FallStrategy {
  constructor(private falling: FallingState) {
    this.falling = falling;
  }

  moveHorizontal(map: Map, player: Player, tile: Tile, dx: number) {
    this.falling.moveHorizontal(map, player, tile, dx);
  }

  update(map: Map, tile: Tile, x: number, y: number): void {
    // 돌이나 상자를 떨어뜨리고 타일을 교체한 후 새로 공기를 주입
    this.falling = map.getBlockOnTopState(x, y + 1);
    
    this.falling.drop(map, tile, x, y);
  }
}