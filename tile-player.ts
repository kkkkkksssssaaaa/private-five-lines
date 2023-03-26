class PlayerTile implements Tile {
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
    return true;
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
      
  }

  moveVertical(player: Player, dy: number): void {
      
  }

  update(x: number, y: number): void {
    
  }

  getBlockOnTopState(): FallingState {
    return new Resting();
  }
} 