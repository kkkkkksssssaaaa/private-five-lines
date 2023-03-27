class Map {
  private map: Tile[][];

  constructor() {
    this.map = new Array(rawMap.length);

    for (let y = 0; y < rawMap.length; y++) {
      this.map[y] = new Array(rawMap[y].length);

      for (let x = 0; x < rawMap[y].length; x++) {
        this.map[y][x] = transformTile(RAW_TILES[rawMap[y][x]]);
      }
    }
  }

  update(): void {
    for (let y = this.map.length - 1; y >= 0; y--) {
      for (let x = 0; x < this.map[y].length; x++) {
        this.map[y][x].update(this, x, y);
      }
    }
  }

  draw(g: CanvasRenderingContext2D): void {
    for (let y = 0; y < this.map.length; y++) {
      for (let x = 0; x < this.map[y].length; x++) {
        this.map[y][x].draw(g, x, y);
      }
    }
  }

  drop(tile: Tile, x: number, y: number): void {
    this.map[y + 1][x] = tile;
    this.map[y][x] = new Air();
  }

  getBlockOnTopState(x: number, y: number): FallingState {
    return this.map[y][x].getBlockOnTopState();
  }

  isAir(x: number, y: number): boolean {
    return this.map[y][x].isAir();
  }

  drawTile(g: CanvasRenderingContext2D, x: number, y: number) {
    this.map[y][x].color(g);

    if (!this.isAir(x, y) && !this.map[y][x].isPlayer())
      this.map[y][x].draw(g, x, y);
  }

  movePlayer(x: number, y: number, newx: number, newy: number): void {
    this.map[y][x] = new Air();
    this.map[newy][newx] = new PlayerTile();
  }

  moveHorizontal(player: Player, x: number, y: number, dx: number): void {
    this.map[y][x + dx]
      .moveHorizontal(this, player, dx);
  }

  moveVertical(player: Player, x: number, y: number, dy: number): void {
    this.map[y + dy][x]
      .moveVertical(this, player, dy);
  }

  pushHorizontal(player: Player, tile: Tile, x: number, y: number, dx: number): void {
    if (this.map[y][x + dx + dx].isAir()
      && !this.map[y + 1][x + dx].isAir()) {
      this.map[y][y + dx + dx] = tile;
      player.moveToTile(this, x + dx, y);
    }
  }

  remove(shouldRemove: RemoveStrategy): void {
    for (let y = 0; y < this.map.length; y++) {
      for (let x = 0; x < this.map[y].length; x++) {
        if (shouldRemove.check(this.map[y][x])) {
          this.map[y][x] = new Air();
        }
      }
    }
  }

  private setTile(x: number, y: number, tile: Tile): void {
    this.map[x][y] = tile;
  }
}

let map: Map = new Map();