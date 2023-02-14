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