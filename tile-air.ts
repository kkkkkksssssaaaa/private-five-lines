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

  isLock1(): boolean {
    return false;
  }

  isLock2(): boolean {
    return false;
  }

  isKey1(): boolean {
    return false;
  }

  isKey2(): boolean {
    return false;
  }

  color(g: CanvasRenderingContext2D): void {
    
  }

  draw(g: CanvasRenderingContext2D, x: number, y: number): void {
    
  }

  moveHorizontal(player: Player, dx: number): void {
    moveToTile(player.getX() + dx, player.getY());
  }

  moveVertical(player: Player, dy: number): void {
      
  }

  update(x: number, y: number): void {
    
  }

  getBlockOnTopState(): FallingState {
    return new Falling();
  }
}