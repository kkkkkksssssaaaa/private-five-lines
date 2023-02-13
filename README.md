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

---

# five-lines-of-code: 2D 퍼즐 게임

## 요소 설명

1. 빨간 사각형은 `플레이어`
2. 갈색 사각형은 `상자`
3. 파란색 사각형은 `돌`
4. 노란색 사각형은 `키` 나 `자물쇠`.
   - 나중에 수정됨
5. 연두색 사각형은 `**플럭스**`
6. 회색 새각형은 `벽`
7. 흰색 사각형은 `빈 공간`
