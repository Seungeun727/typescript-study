// PART01 - 강의 이후 클래스 다시 복습 필요해서 공부함.

// 클래스(Class)
// 1. class 키워드 뒤에 대문자로 클래스 이름을 작성한다.
// 2. 프로퍼티, 생성자, 메서드를 가진다.
// 3. new 키워드로 인스턴스를 생성한다.


class Circle {
  // 클래스 프로퍼티 선언
  width: number;
  height: number;

  // 생성자 선언
  // * 생성자 : 객체 생성시 호출되고 객체의 멤버들을 초기화.
  // * 인수의 들어오는 데이터 타입을 지정하지 않으면 error 발생함.
  constructor(width: number, height: number) {
    // 클래스 내부의 멤버 접근시 this키워드를 사용한다.
    this.width = width;
    this.height = height;
  }
  
  // 메서드 선언
  hello(): void {
    console.log("hello " + this.width);
  }
}

const c1: Circle = new Circle(3, 5);
c1.hello();  // result :  3
console.log(c1);  // Circle { width: 3, height: 5 }


// 클래스 접근 제한자 
// public: 클래스의 내부 멤버는 default로 public으로 누구나 접근됨(공개)
// private: 클래스 외부에서 접근 불가능
// protected: 클래스 외부에서 접근 불가능, 상속관계에서만 접근 가능함.


class Animal4 {
  public name: string;
  private age: number;
  protected gender: string;

  constructor(name: string, age: number, gender: string) {
    this.name = name;
    this.age = age;
    this.gender = gender;
  }
}

const a2 = new Animal4('mike', 5, 'female');
// a2.age;     // 'age' 속성은 private이며 'Animal4' 클래스 내에서만 접근 가능함.
// a2.gender;  // 'gender' 속성은 protected이며 하위 클래스 에서 사용 가능함.


class Hero {
  // name: string;
  // age: number;
  
  constructor(public name: string, public age: number) {
    this.name = name;
    this.age = age;
  }
}

const hero1 = new Hero('Thor', 50);
console.log("hero1 data", hero1);  // Hero { name: 'Thor', age: 50 }


// 상속 - 강의 때 예제 다시 풀어보기
class Animal5 {
  constructor(protected name: string, protected age: number) {}

  public print(): void {
    console.log(`이름은 ${this.name}이고 나이는 ${this.age} 입니다.`);
  }
}

class Dog extends Animal5 {
  // 상속받은 클래스에 추가적인 데이터를 선언할 수 있다.
  text: string;

   // 상속받은 클래스는 부모 생성자를 꼭 호출해줘야 한다.
   // 생성자 내부에 this 키워드 호출 시 super()를 먼저 작성한다.
  constructor(name: string, age: number) {
    super(name,age);
    this.text = "강아지입니다.";
  }

  printText(): void {
    console.log(`이름: ${this.name}, 나이: ${this.age}, 설명: ${this.text}`);
  }
  
}

const dog: Dog = new Dog('하루', 5);
dog.printText();