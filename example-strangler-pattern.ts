namespace Legacy {
  class LegacyA {
    static a() { }
  }

  class LegacyB {
    b() { }
  }

  export class Gate {
    a() {
      return LegacyA.a();
    }

    bClass() {
      return new LegacyB();
    }
  }
}

let gate = new Legacy.Gate();
gate.a();

let b = gate.bClass();
b.b();