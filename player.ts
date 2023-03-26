class Player {
  private x: number = 1;
  private y: number = 1;

  getX(): number {
    return this.x;
  }

  getY(): number {
    return this.y;
  }

  setX(x: number): void {
    this.x = x;
  }

  setY(y: number): void {
    this.y = y;
  }

  draw(g: CanvasRenderingContext2D): void {
    g.fillStyle = "#ff0000";
    g.fillRect(
      this.x * TILE_SIZE,
      this.y * TILE_SIZE,
      TILE_SIZE,
      TILE_SIZE);
  }
}

let player = new Player();