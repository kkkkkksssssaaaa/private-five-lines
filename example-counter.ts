class Counter {
  private counter: number = 0;

  getCounter(): number {
    return this.counter;
  }

  setCounter(c: number): void {
    this.counter = c;
  }
}

let counter: Counter = new Counter();

function incrementCounter(counter: Counter) {
  counter.setCounter(
    counter.getCounter() + 1);
}

function main() {
  for (let i = 0; i < 20; i++) {
    incrementCounter(counter);
    console.log(counter.getCounter());
  }
}