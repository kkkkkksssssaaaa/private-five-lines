class Map {
  private map: Tile[][];

  getMap(): Tile[][] {
    return this.map;
  }

  setMap(map: Tile[][]): void {
    this.map = map;
  }
}

let map: Map = new Map();