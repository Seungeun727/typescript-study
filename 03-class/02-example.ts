// 접근 제어자
// * 설정하지 않으면 default는 public 임.
// * 클래스 내부에 프로퍼티, 생성자, 메서드 설정 가능하다..
// * public : 클래스 내부에 선언된 멤버에 자유롭게 접근할 수 있음. (공개)
// * private : 클래스 외부에서 접근 할 수 없음. (비공개)
// * protected : protected로 선언된 멤버를 상속된 클래스 내부에서만 사용할 수 있음.

class Person9 {
  // 객체 프로퍼티 사용
  public name: string = "Mark";
  private age!: number; 
  // private _age!: number;  
  public constructor(age?: number) {
    if (age === undefined) {
      this.age = 20;
    } else {
      this.age = age;
    }
  }

  public async init() {}
}

const p25:Person9 = new Person9(39);
// console.log(p25.age);    // error : 'Person9' 클래스 내에서만 접근 가능함.


class Person10 {
  public constructor(public name: string, private age: number) {
    // this.name = name;
    // this.age = age;
  }
  public async init() {}
}

const p26: Person10 = new Person10("Mark", 39);
console.log(p26.name);
// console.log(p26.age);   // private 접근제한자로 접근 못함.