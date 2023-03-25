class KeyConfiguration {
  constructor(
    private color: string,
    private _1: boolean,
    private removeStrategy: RemoveStrategy) { }
  
  // TODO: Refactor customized grapic object
  setColor(g: CanvasRenderingContext2D): void {
    g.fillStyle = this.color;
  }

  is1(): boolean {
    return this._1;
  }

  removeLock() {
    remove(this.removeStrategy);
  }
}