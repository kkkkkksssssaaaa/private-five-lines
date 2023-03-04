class Lock1 implements Tile {
  isFlux(): boolean {
    return false;
  }

  isUnbreakable(): boolean {
      return false;
  }

  isStone(): boolean {
    return false;
  }

  isFallingStone(): boolean {
    return false;
  }

  isAir(): boolean {
    return false;
  }

  isPlayer(): boolean {
    return false;
  }

  isBox(): boolean {
    return false;
  }

  isFallingBox(): boolean {
    return false;
  }

  isKey1(): boolean {
    return false;
  }

  isKey2(): boolean {
    return false;
  }

  isLock1(): boolean {
    return true;
  }

  isLock2(): boolean {
    return false;
  }

  color(g: CanvasRenderingContext2D): void {
    g.fillStyle = "#ffcc00";
  }

  draw(g: CanvasRenderingContext2D, x: number, y: number): void {
    g.fillStyle = "#ffcc00";
    g.fillRect(
      x * TILE_SIZE,
      y * TILE_SIZE,
      TILE_SIZE,
      TILE_SIZE
    );
  }  

  isEdible(): boolean {
    return false;
  }

  isPushable(): boolean {
    return false;
  }

  moveHorizontal(dx: number): void {
      
  }

  isStony(): boolean {
    return false;
  }
  
  isBoxy(): boolean {
    return false;
  }

  drop(): void {
      
  }

  rest(): void {
      
  }

  isFalling(): boolean {
    return false;
  }
}