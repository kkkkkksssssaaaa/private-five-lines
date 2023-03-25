# five-lines-of-code: 2D 퍼즐 게임 예제 코드 실습

_forked from https://github.com/wikibook/five-lines_

## 규칙

### 다섯 줄 제한

- 메서드는 {, } 를 제외하고 5줄 이상이 되어선 안된다.

### 호출 또는 전달, 한 가지만 할 것

- 함수 내에서는 객체에 있는 메서드를 호출하거나 객체를 인자로 전달할 수 있지만, 둘을 섞어 사용해선 안된다.

### if 문은 함수의 시작에만 배치

- if 문이 있는 경우, 해당 if 문은 함수의 첫 번째 라인에 존재해야 한다.

### if 문에서 else 를 사용하지 말 것

- if-else 를 함께 쓰는 것은 어떠한 결정을 하드코딩 하는 것과 같다.

### switch 를 사용하지 말 것

- default 케이스가 없고 모든 case 에 반환 값이 있는 경우가 아니라면 switch 를 사용하지 말라.

### 순수 조건 사용

- 순수 조건이란, 조건에 부수적인 동작이 없어야 한다는 것을 의미한다. 조건은 항상 순수 조건이어야 한다.

### 구현체가 하나뿐인 인터페이스를 만들지 말 것

- 가독성에 도움이 되지 않으며, 도움이 되지 않는 일반화의 한 형태이다.

### getter 와 setter 를 사용하지 말 것

- boolean 이 아닌 필드를 직접 할당하거나 반환하는 메서드를 사용하지 말라.

---

## 리팩터링 패턴

### 메서드 추출

- 주석이나 빈 라인으로 구분된 코드는 추출한다.

### 클래스로 타입 코드 대체

- 열거형을 인터페이스로 변환하고 열거형의 값들은 클래스로 구현하여 각 값에 속성을 추가하고 해당 특정 값과 관련된 기능을 특성에 맞게 만들 수 있다.

### 클래스로의 코드 이관

- 기능을 클래스로 옮겨라.

### 메서드의 인라인화

- 코드를 제거하기 위해, 메서드에서 이를 호출하는 모든 곳으로 코드를 옮긴다.

### 메서드 전문화

- 좀 더 전문화된 메서드는 더 적은 위치에서 호출되어 필요성이 없어지면 더 빨리 제거할 수 있다.

### 인터페이스에서만 상속받을 것

- 상속은 오직 인터페이스를 통해서만 받는다.

### 삭제 후 컴파일하기

- 인터페이스의 전체 범위를 알고있을 때, 인터페이스에서 사용하지 않는 메서드를 제거하기 위한 방법이다.

### 유사 클래스 통합

- 일련의 상수 메서드를 공통으로 가진 두 개 이상의 클래스가 있을 때, 상수 메서드가 클래스에 따라 다른 값을 반환한다면 통합 가능하다.

### if 문 결합

- 내용이 동일한 연속적인 if 문이 있다면 결합해서 중복을 제거한다.

### 전략 패턴의 도입

- 저수준의 제어 흐름 연산자를 사용하기 보다는, 전략 패턴을 도입하여 다른 클래스를 인스턴스화하여 사용한다.

### 구현에서 인터페이스 추출

- 이 패턴을 도입함으로써 성급하게 추상화를 하지 않고 인터페이스가 필요한 시점까지(변형을 도입하고 싶을 때) 까지 연기할 수 있다.

---

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
  - 단, 방해물이나 아래에 빈 공간이 없어야 한다.
- 상자와 오른쪽 하단 모서리의 사이의 경로는 처음에는 자물쇠로 막혀 있으므로, 이를 제거하기 위해 키를 얻어야 한다.
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
