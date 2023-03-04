class Falling implements FallingState {
  isFalling(): boolean {
    return true;
  }

  isResting(): boolean {
    return false;
  }
}