namespace Legacy {
  class LegacyA {
    static a() { }
  }

  class LegacyB {
    b() { }
  }

  export class Gate {
    a() {
      try {
        let result = LegacyA.a();
        console.log("a success");

        return result;
      } catch (e) {
        console.error("a fail");
        
        throw e;
      }
    }

    bClass() {
      try {
        let result = new LegacyB();
        console.log("bClass success");

        return result;
      } catch (e) {
        console.error("bClass fail");
        
        throw e;
      }
    }
  }
}

let gate = new Legacy.Gate();
gate.a();

let b = gate.bClass();
b.b();