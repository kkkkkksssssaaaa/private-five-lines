interface RawTileValue {
}

class AirValue implements RawTileValue { }

class FluxValue implements RawTileValue { }

class UnbreakableValue implements RawTileValue { }

class PlayerValue implements RawTileValue { }

class StoneValue implements RawTileValue { }

class FallingStoneValue implements RawTileValue { }

class BoxValue implements RawTileValue { }

class FallingBoxValue implements RawTileValue { }

class Key1Value implements RawTileValue { }

class Lock1Value implements RawTileValue { }

class Key2Value implements RawTileValue { }

class Lock2Value implements RawTileValue { }

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