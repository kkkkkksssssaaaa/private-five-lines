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

  moveHorizontal(dx: number): void {
    map.getMap()[this.y][this.x + dx]
      .moveHorizontal(this, dx);
  }

  moveVertical(dy: number): void {
    map.getMap()[this.y + dy][this.x]
      .moveVertical(this, dy);
  }

  pushHorizontal(tile: Tile, dx: number): void {
    if (map.getMap()[this.y][this.x + dx + dx].isAir()
      && !map.getMap()[this.y + 1][this.x + dx].isAir()) {
      map.getMap()[this.y][this.y + dx + dx] = tile;
      this.moveToTile(this.x + dx, this.y);
    }
  }

    move(dx: number, dy: number): void {
    this.moveToTile(this.x + dx, this.y + dy);
  }

  private moveToTile(newx: number, newy: number): void {
    map.getMap()[this.y][this.x] = new Air();
    map.getMap()[newy][newx] = new PlayerTile();

    this.x = newx;
    this.y = newy;
  }
}

let player = new Player();