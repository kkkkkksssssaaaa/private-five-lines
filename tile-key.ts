class Key implements Tile {
  constructor(
    private keyConf: KeyConfiguration) { }

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

  }
  
  draw(g: CanvasRenderingContext2D, x: number, y: number): void {
    this.keyConf.setColor(g);
    g.fillRect(
      x * TILE_SIZE,
      y * TILE_SIZE,
      TILE_SIZE,
      TILE_SIZE
    );
  }  

  moveHorizontal(player: Player, dx: number): void {
    this.keyConf.removeLock();
    player.moveHorizontal(dx);
  }

  moveVertical(player: Player, dy: number) {
    this.keyConf.removeLock();
    player.moveVertical(dy);
  }

  update(x: number, y: number): void {
  }

  getBlockOnTopState(): FallingState {
    return new Resting();
  }
}