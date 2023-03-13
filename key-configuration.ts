class KeyConfiguration {
  constructor(
    private color: string,
    private _1: boolean,
    private removeStrategy: RemoveStrategy) { }
  
  getColor(): string {
    return this.color;
  }

  is1(): boolean {
    return this._1;
  }

  getRemoveStrategy(): RemoveStrategy {
    return this.removeStrategy;
  }
}