class LockTile implements Tile {
  constructor(
    private color: string,
    private lock1: boolean) {
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
      
  }

  update(x: number, y: number): void {
    
  }

  isLock1() {
    return this.lock1;
  }

  isLock2() {
    return !this.lock1;
  }
}