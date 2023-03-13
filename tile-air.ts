class Air implements Tile {
  isFlux(): boolean {
    return false;
  }

  isUnbreakable(): boolean {
    return false;
  }

  isAir(): boolean {
    return true;
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
    
  }

  draw(g: CanvasRenderingContext2D, x: number, y: number): void {
    
  }

  moveHorizontal(dx: number): void {
    moveToTile(playerx + dx, playery);
  }

  update(x: number, y: number): void {
    
  }
}