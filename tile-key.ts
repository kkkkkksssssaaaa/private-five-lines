class Key implements Tile {
  constructor(
    private color: string,
    private removeStrategy: RemoveStrategy) {
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
  
  draw(g: CanvasRenderingContext2D, x: number, y: number): void {
    g.fillStyle = this.color;
    g.fillRect(
      x * TILE_SIZE,
      y * TILE_SIZE,
      TILE_SIZE,
      TILE_SIZE
    );
  }  

  moveHorizontal(dx: number): void {
    remove(this.removeStrategy);
    moveToTile(playerx + dx, playery);
  }

  update(x: number, y: number): void {
  }
}