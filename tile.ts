interface Tile {
  isFlux(): boolean;
  isUnbreakable(): boolean;
  isStone(): boolean;
  isFallingStone(): boolean;
  isAir(): boolean;
  isPlayer(): boolean;
  isBox(): boolean;
  isFallingBox(): boolean;
  isKey1(): boolean;
  isKey2(): boolean;
  isLock1(): boolean;
  isLock2(): boolean;
  color(g: CanvasRenderingContext2D): void;
}

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
}

class Unbreakable implements Tile {
  isFlux(): boolean {
    return false;
  }

  isUnbreakable(): boolean {
    return true;
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
    g.fillStyle = "#999999";
  }
}

class Stone implements Tile {
  isFlux(): boolean {
    return false;
  }

  isUnbreakable(): boolean {
    return false;
  }

  isStone(): boolean {
    return true;
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
    g.fillStyle = "#0000cc";
  }
}

class FallingStone implements Tile {
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
    return true;
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
    g.fillStyle = "#0000cc";
  }
}

class Air implements Tile {
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
    return true;
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
    
  }
}

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
}

class Box implements Tile {
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
    return true;
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
    g.fillStyle = "#8b4513";
  }
}

class FallingBox implements Tile {
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
    return true;
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
    g.fillStyle = "#8b4513";
  }
}

class Key1 implements Tile {
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
    return true;
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
    g.fillStyle = "#ffcc00";
  }
}

class Key2 implements Tile {
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
    return true;
  }

  isLock1(): boolean {
    return false;
  }

  isLock2(): boolean {
    return false;
  }

  color(g: CanvasRenderingContext2D): void {
    g.fillStyle = "#00ccff";
  }  
}

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
}

class Lock2 implements Tile {
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
    return false;
  }

  isLock2(): boolean {
    return true;
  }

  color(g: CanvasRenderingContext2D): void {
    g.fillStyle = "#00ccff";
  }  
}