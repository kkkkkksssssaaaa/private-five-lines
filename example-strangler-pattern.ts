class LegacyA {
  static a() { }
}

class LegacyB {
  b() { }
}

LegacyA.a();

let b = new LegacyB();
b.b();