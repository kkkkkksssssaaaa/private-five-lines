class Counter {
  private counter: number = 0;

  increment(): void {
    this.counter++;
    console.log(this.counter);
  }
}

let counter: Counter = new Counter();

function main() {
  for (let i = 0; i < 20; i++) {
    counter.increment();
  }
}