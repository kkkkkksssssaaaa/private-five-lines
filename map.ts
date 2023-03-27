class Map {
  private map: Tile[][];

  getMap(): Tile[][] {
    return this.map;
  }

  setMap(map: Tile[][]): void {
    this.map = map;
  }

  transform(): void {
    this.map = new Array(rawMap.length);

    for (let y = 0; y < rawMap.length; y++) {
      this.map[y] = new Array(rawMap[y].length);

      for (let x = 0; x < rawMap[y].length; x++) {
        this.map[y][x] = transformTile(rawMap[y][x]);
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
}

let map: Map = new Map();