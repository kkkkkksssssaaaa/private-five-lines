class ArrayMinimum {
  private processor: MinimumProcessor;

  constructor(accumulator: number) {
    this.processor = new MinimumProcessor(accumulator);
  }

  process(arr: number[]) {
    for (let i = 0; i < arr.length; i++) {
      this.processElement(arr[i]);
    }

    return this.accumulator;
  }

  processElement(e: number) {
    this.processor.processElement(e);
  }
}

class ArraySum {
  private processor: SumProcessor;

  constructor(accumulator: number) {
    this.processor = new SumProcessor(accumulator);
  }

  process(arr: number[]) {
    for (let i = 0; i < arr.length; i++) {
      this.processElement(arr[i]);
    }

    return this.accumulator;
  }

  processElement(e: number) {
    this.processor.processElement(e);
  }
}

class MinimumProcessor {
  constructor(private accumulator: number) {

  }

  processElement(e: number) {
    if (this.accumulator > e) {
      this.accumulator = e;
    }
  }
}

class SumProcessor {
  constructor(private accumulator: number) {
    
  }

  processElement(e: number) {
    this.accumulator += e;
  }
}