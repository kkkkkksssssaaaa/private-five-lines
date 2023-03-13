class ArrayMinimum {
  private processor: MinimumProcessor;

  constructor(accumulator: number) {
    this.processor = new MinimumProcessor(accumulator);
  }

  process(arr: number[]) {
    for (let i = 0; i < arr.length; i++) {
      this.processor.processElement(arr[i]);
    }

    return this.processor.getAccumulator();
  }
}

class ArraySum {
  private processor: TmpName;

  constructor(accumulator: number) {
    this.processor = new TmpName(accumulator);
  }

  process(arr: number[]) {
    for (let i = 0; i < arr.length; i++) {
      this.processor.processElement(arr[i]);
    }

    return this.processor.getAccumulator();
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

  getAccumulator() {
    return this.accumulator;
  }
}

class TmpName implements SumProcessor {
  constructor(private accumulator: number) {
    
  }

  processElement(e: number) {
    this.accumulator += e;
  }

  getAccumulator() {
    return this.accumulator;
  }
}

interface SumProcessor {

}