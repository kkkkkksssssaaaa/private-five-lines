interface ElementProcessor {
  processElement(e: number): void;
  getAccumulator(): number;
}

class BatchProcessor {
  constructor(private processor: ElementProcessor) {

  }

  process(arr: number[]): number {
    for (let i = 0; i < arr.length; i++) {
      this.processor.processElement(arr[i]);
    }

    return this.processor.getAccumulator();
  }
}

class MinimumProcessor implements ElementProcessor {
  constructor(private accumulator: number) {

  }

  getAccumulator(): number {
    return this.accumulator;
  }

  processElement(e: number): void {
    if (this.accumulator > e) {
      this.accumulator = e;
    }
  }
}

class SumProcessor implements ElementProcessor {
  constructor(private accumulator: number) {

  }

  getAccumulator(): number {
    return this.accumulator;
  }

  processElement(e: number): void {
    this.accumulator += e;
  }
}