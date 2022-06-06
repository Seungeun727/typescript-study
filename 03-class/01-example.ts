// 클래스(class)
// 1. 이름은 보통 대문자로 작성한다.
// 2. 클래스 이전에는 es5는 함수로 변경된다.
// 3. new를 사용해서 class를 통해 object 만들 수 있다.
// 4. constructor를 이용해 object 생성하여 값을 전달한다.
// 5. this를 이용해 obejct를 가리킬 수 있음.


// class1 : class Person6 정의
class Person6 {
  // 객체 프로퍼티 사용
  name: string;

  constructor(name: string) {
    this.name = name;
  }
}

const p21 = new Person6("Mark");

console.log(p21);


// class2 : !옵션이 있는 경우
// * 클래스 내부에서 프로퍼티 선언하지 않거나, 생성자 값을 할당하지 않은 경우 붙임.
// * 클래스 프로퍼티 선언이 되어 있지만 값을 대입하지 않으면 undefind 출력됨.
// * !는 주의해야 한다.

class Person7 {
  // 1. 프로퍼티 선언 시 값을 할당하는 방법.
  name: string = "Mark";  
  age!: number;    // error : 초기값이 없거나 생성자에 할당되어 있지 않음.

  // 2. 생성자 안에 this로 클래스 멤버 접근하는 방법.
  // constructor(age: number) {
  //   this.age = age;
  // }
}

const p22: Person7 = new Person7();   // 생성자를 작성하지 않을 때는 default 생성자 호출됨.
console.log(p22);
// p22.age = 37;
console.log(p22.age);    // result: undefind 


// class 3 
// 단 생성자는 async를 설정할 수 없다.

class Person8 {
  name: string = "Mark";  
  age!: number;
  
  // undefind 혹은 number를 출력하고 싶은 경우
  constructor(age?: number) {
    if ( age === undefined) {
      this.age = 20;
    } else {
      this.age = age;
    }
  }

  async init() {

  }

  // constructor(age: numner) {
  //   this.age = age;
  // }
}

const p23: Person8 = new Person8(39);  
const p24: Person8 = new Person8();  

console.log(p23);
// p22.age = 37;
console.log(p23.age);


// TypeScript Document 예시

// 클래스 Gretter 정의
class Gretter {
  //프로퍼티 선언
  gretting: string;

  // 생성자
  constructor(message: string) {
    // this 키워드로 클래스 멤버를 접근한다.
    this.gretting = message;
  }

  greet() {
    return "Hello, " + this.gretting;
  }
}

// new 키워드로 클래스의 인스턴스를 생성한다.
let gretter = new Gretter("world");