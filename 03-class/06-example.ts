// PART-01 : class 상속 
// protected: 외부에서 접근할 수 없고, 상속관계에서만 접근 가능함.

class Parent {
  constructor(protected _name: string, private _age: number) {}

  public print(): void {
    console.log(`이름은 ${this._name}이고 나이는 ${this._age} 입니다.`);
  }

  protected printName(): void {
    console.log(this._name, this._age);
  }
}

class Child extends Parent {
  // public _name = "Mark";  // 접근제한자도 오버라이드 함.
  public gender = "male";
  
  // 상속받은 클래스는 부모 생성자를 호출할 것
  constructor(age: number) {
    super("Mark Jr", age);

    // 생성자 내부에 this 키워드로 호출하려면 super() 먼저 호출해야 함.
    this.printName();
  }
}

// Parent가 생성자 있으므로 같은 형태로 정의해야 함.
const p62 = new Child(1); 
// p62.gender;
p62.print();

// const p61 = new Parent("Mark", 39);
// p61._age;    // error: _age는 private 속성이며, 클래스 내부에서만 접근 가능함.
// p61.print();


// PART-02 : Abstract Classes 
// 1. class 앞에 abstract 붙여줘야 한다.
// 2. abstract class는 new 키워드를 사용할 수 없다.
// 3. 완전하게 하기 위해 클래스 상속을 사용한다.

abstract class AbstractPerson  {
  protected _name: string = "Mark";

  abstract setName(name: string): void;

}

// new AbstractPerson(); // error: 추상 클래스의 인스턴스를 만들 수 없음.

class Person11 extends AbstractPerson {
  setName(name: string): void {
    this._name = name;
  }
}

const p63 = new Person11();
// p63.setName();