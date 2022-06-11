// Generic extends
class HumanExtends<T extends string | number> {
  private _name: T;

  constructor(name: T) {
    this._name = name;
  }
}

new HumanExtends("Mark");
new HumanExtends(39);
// new HumanExtends(true); // 'boolean' 형식의 인수는 'string | number' 형식의 매개 변수에 할당될 수 없음.


// Typescript Gitbook Document 

// Generic의 제약조건을 만들기 위한 인터페이스를 정의한다.
// 제약조건 : 특정 타입으로만 작동하도록 제한을 두는 것.
// 제약조건은 extends를 통해 정의한다.

interface Lengthwise {
  length: number;
}

function lengthFunc1<T extends Lengthwise>(arg: T): T {
  console.log(arg.length);
  return arg;
}

// lengthFunc1(3);  // 'number' 형식의 인수는 'Lengthwise' 형식의 매개 변수에 할당될 수 없음
lengthFunc1({length: 10}); // 프로퍼티의 값을 전달해야 한다.