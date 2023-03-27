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

  moveHorizontal(map: Map, player: Player, dx: number): void {
    player.moveHorizontal(dx);
  }

  moveVertical(map: Map, player: Player, dy: number): void {
    player.moveVertical(dy);
  }

  update(map: Map, x: number, y: number): void {
    
  }

  getBlockOnTopState(): FallingState {
    return new Falling();
  }
}