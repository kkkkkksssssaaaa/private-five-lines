interface Input {
  isRight(): boolean;
  isLeft(): boolean;
  isUp(): boolean;
  isDown(): boolean;
  handle(player: Player): void;
}

class Right implements Input {
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

  handle(player: Player) {
    player.moveHorizontal(1);
  }
}

class Left implements Input {
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

  handle(player: Player) {
    player.moveHorizontal(-1);
  }
}

class Up implements Input {
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

  handle(player: Player) {
    player.moveVertical(-1);
  }
}

class Down implements Input {
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

  handle(player: Player) {
    player.moveVertical(1);
  }
}