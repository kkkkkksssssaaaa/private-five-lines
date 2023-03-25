class LockTile implements Tile {
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
  
  isLock1() {
    return this.keyConf.is1();
  }

  isLock2() {
    return !this.keyConf.is1();
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
    this.keyConf.setColor(g);
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
}