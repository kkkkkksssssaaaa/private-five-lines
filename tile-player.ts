class Player implements Tile {
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
    return true;
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
    return false;
  }

  isLock2(): boolean {
    return false;
  }

  color(g: CanvasRenderingContext2D): void {
    
  }

  draw(g: CanvasRenderingContext2D, x: number, y: number): void {

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
} 