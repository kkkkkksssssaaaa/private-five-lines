enum Input {
  RIGHT, LEFT, UP, DOWN
}

interface Input2 {
  isRight(): boolean;
  isLeft(): boolean;
  isUp(): boolean;
  isDown(): boolean;
}