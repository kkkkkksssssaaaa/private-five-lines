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
  
  draw(g: CanvasRenderingContext2D, x: number, y: number): void {
    g.fillStyle = this.keyConf.getColor();
    g.fillRect(
      x * TILE_SIZE,
      y * TILE_SIZE,
      TILE_SIZE,
      TILE_SIZE
    );
  }  

  moveHorizontal(dx: number): void {
    remove(this.keyConf.getRemoveStrategy());
    moveToTile(playerx + dx, playery);
  }

  moveVertical(dy: number) {
    remove(this.keyConf.getRemoveStrategy());
    moveToTile(playerx, playery + dy);
  }

  update(x: number, y: number): void {
  }
}