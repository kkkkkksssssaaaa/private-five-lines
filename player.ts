class Player {
  private x: number = 1;
  private y: number = 1;

  draw(g: CanvasRenderingContext2D): void {
    g.fillStyle = "#ff0000";
    g.fillRect(
      this.x * TILE_SIZE,
      this.y * TILE_SIZE,
      TILE_SIZE,
      TILE_SIZE);
  }

  moveHorizontal(map: Map, dx: number): void {
    map.moveHorizontal(this, this.x, this.y, dx);
  }

  moveVertical(map: Map, dy: number): void {
    map.moveVertical(this, this.x, this.y, dy);
  }

  pushHorizontal(map: Map, tile: Tile, dx: number): void {
    map.pushHorizontal(this, tile, this.x, this.y, dx);
  }

  moveToTile(map: Map, newx: number, newy: number): void {
    map.movePlayer(this.x, this.y, newx, newy);
    this.x = newx;
    this.y = newy;
  }
}

let player = new Player();