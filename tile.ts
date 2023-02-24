interface Tile2 {
  isFlux(): boolean;
  isUnbreakable(): boolean;
  isStone(): boolean;
}

class Flux implements Tile2 {
  isFlux(): boolean {
    return true;
  }

  isUnbreakable(): boolean {
      return false;
  }

  isStone(): boolean {
    return false;
  }
}

class Unbreakable implements Tile2 {
  isFlux(): boolean {
    return false;
  }

  isUnbreakable(): boolean {
      return true;
  }

  isStone(): boolean {
    return false;
  }
}

class Stone implements Tile2 {
  isFlux(): boolean {
    return false;
  }

  isUnbreakable(): boolean {
      return false;
  }

  isStone(): boolean {
    return true;
  }
}