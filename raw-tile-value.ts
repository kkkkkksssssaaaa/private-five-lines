interface RawTileValue {
  transform(): Tile;
}

class AirValue implements RawTileValue { 
  transform(): Tile {
    return new Air();
  }
}

class FluxValue implements RawTileValue {
  transform(): Tile {
    return new Flux();
  }
 }

class UnbreakableValue implements RawTileValue { 
  transform(): Tile {
    return new Unbreakable();
  }
}

class PlayerValue implements RawTileValue { 
  transform(): Tile {
    return new PlayerTile();
  }
}

class StoneValue implements RawTileValue { 
  transform(): Tile {
    return new Stone(new Resting());
  }
}

class FallingStoneValue implements RawTileValue { 
  transform(): Tile {
    return new Stone(new Falling());
  }
}

class BoxValue implements RawTileValue { 
  transform(): Tile {
    return new Box(new Resting());
  }
}

class FallingBoxValue implements RawTileValue { 
  transform(): Tile {
    return new Box(new Falling());
  }
}

class Key1Value implements RawTileValue { 
  transform(): Tile {
    return new Key(YELLOW_KEY);
  }
}

class Lock1Value implements RawTileValue { 
  transform(): Tile {
    return new LockTile(YELLOW_KEY);
  }
}

class Key2Value implements RawTileValue { 
  transform(): Tile {
    return new Key(SKY_KEY);
  }
}

class Lock2Value implements RawTileValue { 
  transform(): Tile {
    return new LockTile(SKY_KEY);
  }
}

class RawTile2 {
  static readonly AIR = new RawTile2(new AirValue());
  static readonly FLUX = new RawTile2(new FluxValue());
  static readonly UNBREAKABLE = new RawTile2(new UnbreakableValue());
  static readonly PLAYER = new RawTile2(new PlayerValue());
  static readonly STONE = new RawTile2(new StoneValue());
  static readonly FALLING_STONE = new RawTile2(new FallingStoneValue());
  static readonly BOX = new RawTile2(new BoxValue());
  static readonly FALLING_BOX = new RawTile2(new FallingBoxValue());
  static readonly KEY1 = new RawTile2(new Key1Value());
  static readonly KEY2 = new RawTile2(new Key2Value());
  static readonly LOCk1 = new RawTile2(new Lock1Value());
  static readonly LOCK2 = new RawTile2(new Lock2Value());

  private constructor(private value: RawTileValue) {

  }
}