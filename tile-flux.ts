class Flux implements Tile {
  isFlux(): boolean {
    return true;
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
    return false;
  }

  isLock2(): boolean {
    return false;
  }

  color(g: CanvasRenderingContext2D): void {
    g.fillStyle = "#ccffcc";
  }

  draw(g: CanvasRenderingContext2D, x: number, y: number): void {
    g.fillStyle = "#ccffcc";
    g.fillRect(
      x * TILE_SIZE,
      y * TILE_SIZE,
      TILE_SIZE,
      TILE_SIZE
    );
  }

  isEdible(): boolean {
    return true;
  }

  isPushable(): boolean {
    return false;
  }

  moveHorizontal(dx: number): void {
    moveToTile(playerx + dx, playery);
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
}