class Resting implements FallingState {
  isFalling(): boolean {
    return false;
  }

  isResting(): boolean {
    return true;
  }
}