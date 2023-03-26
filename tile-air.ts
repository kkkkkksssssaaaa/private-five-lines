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

  color(g: CanvasRenderingContext2D): void {
    
  }

  draw(g: CanvasRenderingContext2D, x: number, y: number): void {
    
  }

  moveHorizontal(player: Player, dx: number): void {
    player.moveHorizontal(dx);
  }

  moveVertical(player: Player, dy: number): void {
    player.moveVertical(dy);
  }

  update(x: number, y: number): void {
    
  }

  getBlockOnTopState(): FallingState {
    return new Falling();
  }
}