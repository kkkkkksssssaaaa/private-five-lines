# five-lines-of-code: 2D 퍼즐 게임 예제 코드 실습

_forked from https://github.com/wikibook/five-lines_

## 규칙

### 다섯 줄 제한

- 메서드는 {, } 를 제외하고 5줄 이상이 되어선 안된다.

### 호출 또는 전달, 한 가지만 할 것

- 함수 내에서는 객체에 있는 메서드를 호출하거나 객체를 인자로 전달할 수 있지만, 둘을 섞어 사용해선 안된다.

### if 문은 함수의 시작에만 배치

- if 문이 있는 경우, 해당 if 문은 함수의 첫 번째 라인에 존재해야 한다

### if 문에서 else 를 사용하지 말 것

- if-else 를 함께 쓰는 것은 어떠한 결정을 하드코딩 하는 것과 같다

---

## 리팩터링 패턴

### 메서드 추출

- 주석이나 빈 라인으로 구분된 코드는 추출한다.

## 퍼즐 게임

### 요소 설명

1. 빨간 사각형은 `플레이어`
2. 갈색 사각형은 `상자`
3. 파란색 사각형은 `돌`
4. 노란색 사각형은 `키` 나 `자물쇠`.
   - 나중에 수정됨
5. 연두색 사각형은 `**플럭스**`
6. 회색 새각형은 `벽`
7. 흰색 사각형은 `빈 공간`

### 규칙

- 상자나 돌은 밑에 아무것도 없으면 아래로 떨어진다.
- 플레이어는 돌이나 상자를 한 번에 하나씩 밀 수 있다.
  - 단, 방해물이나 아래에 빈 공간이 없어야 한다
- 상자와 오른쪽 하단 모서리의 사이의 경로는 처음에는 자물쇠로 막혀 있으므로, 이를 제거하기 위해 키를 얻어야 한다
- 플레이어는 플럭스를 밟아 제거할 수 있다.
- 코드에서 게임 난이도를 변경할 수 있다.

---

# five-lines

In this kata your task is to refactor the code for a small game. When finished it should be easy to add new tile types, or make the key draw as a circle, so we can easily distinguish it from the lock.

The code already abides by the most common principles "Don't Repeat Yourself", "Keep It Simple, Stupid", and there are only very few magic literals. There are no poorly structured nor deeply nested `if`s.

This is _not_ an easy exercise.

# About the Game

In the game, you are a red square and have to get the box (brown) to the lower right corner. Obstacles include falling stones (blue), walls (gray), and a lock (yellow, right) that can be unlocked with the key (yellow, left). You can push one stone or box at a time, and only if it is not falling. The flux (greenish) holds up boxes and stones but can be 'eaten' by the player.

![Screenshot of the game](game.png)

# How to Build It

Assuming that you have the Typescript compiler installed: Open a terminal in this directory, then run `tsc`. There should now be a `index.js` file in this directory.

# How to Run It

To run the game you need to first build it, see above. Then simply open `index.html` in a browser. Use the arrows to move the player.

# Thank You!

If you like this kata please consider giving the repo a star. You might also consider purchasing a copy of my book where I show a simple way to tackle code like this: [Five Lines of Code](https://www.manning.com/books/five-lines-of-code), available through the Manning Early Access Program.

[![Five Lines of Code](frontpage.png)](https://www.manning.com/books/five-lines-of-code)

If you have feedback or comments on this repo don't hesitate to write me a message or send me a pull request.

Thank you for checking it out.
