enum RawInput {
  RIGHT, LEFT, UP, DOWN
}

interface Input2 {
  isRight(): boolean;
  isLeft(): boolean;
  isUp(): boolean;
  isDown(): boolean;
}

class Right implements Input2 {
  isRight() {
    return true;
  }

  isLeft() {
    return false;
  }

  isUp() {
    return false;
  }

  isDown() {
    return false;
  }
}

class Left implements Input2 {
  isRight() {
    return false;
  }

  isLeft() {
      return true;
  }

  isUp() {
    return false;
  }

  isDown() {
    return false;
  }
}

class Up implements Input2 {
  isRight() {
    return false;
  }

  isLeft() {
    return false;
  }

  isUp() {
    return true;
  }

  isDown() {
    return false;
  }
}

class Down implements Input2 {
  isRight() {
    return false;
  }

  isLeft() {
    return false;
  }

  isUp() {
    return false;
  }

  isDown() {
    return true;
  }
}