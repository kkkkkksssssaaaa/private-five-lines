// 2. 리팩터링 깊게 들여다 보기
// 2.2 속도, 유연성 및 안정성 확보

// 예제 2.4 상속을 사용
interface Bird {
  hasBeak(): boolean;
  canFly(): boolean;
}

class CommonBird implements Bird {
  hasBeak() {
    return true;
  }

  canFly() {
    return true;
  }
}

// 상속
class ExtendPenguin extends CommonBird {
  canFly() {
    return false;
  }
}

// 예제 2.5 컴포지션을 사용
class CompositionPenguin implements Bird {
  // 컴포지션
  private bird = new CommonBird();

  hasBeak() {
    return this.bird.hasBeak();
  }

  canFly() {
    return false;
  }
}

// 예제 3.1 2차원 배열에 짝수가 존재하는지 확인하는 함수
function containsEven(arr: number[][]) {
  for (let x = 0; x < arr.length; x++) {
    for (let y = 0; y < arr[x].length; y++) {
      if (arr[x][y] % 2 === 0) {
        return true;
      }
    }
  }

  return false;
}