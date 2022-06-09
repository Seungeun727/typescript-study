// Generic

function helloString(message: string): string {
  return message;
}

function helloNumber(message: number): number {
  return message;
}

// 함수에 들어오는 인수와 리턴하는 타입이 일치하여 반복되는 함수들이 생김.

function hello(message: any): any {
  return message;
}

// console.log(hello('Mark').length);   
// console.log(hello(39).length);  


function helloGeneric<T>(message: T): T {
  return message;
}


console.log(helloGeneric('Mark').length);
// console.log(helloGeneric(39).length);   // number는 length 사용할 수 없음
console.log(helloGeneric(true));  


// TypeScript Guidebook 공부
// 제네릭 : 클래스, 함수에 사용할 타입을 결정하는 기법.
// 1. any 사용 시 일정되지 않는 반환 타입과 런타임상 타입 검사의 한계가 있음.
// 2. 상속을 사용하는 경우 다른 타입 사용시 클래스 추가와 중복되는 코드의 한계가 있음.

// 제네릭과 any 비교

// * any는 함수의 모든 타입의 유형을 허용함 => 범용적인 코드 만들 수 있음
// * any 타입은 함수의 반환되는 타입의 유추가 어려움
// * number 타입만 받는 것은 범용적인 코드의 한계가 있음.
function identity(item: any): any {
  return item;
}

console.log(identity("hero").length); // any로 추론됨
console.log(identity(5).length);  // result : undefind

function genericFunc<T>(item: T): T {
  return item;
}

console.log(genericFunc('hero'));

// 제네릭을 사용하지 않는 클래스
// 참고만 하기

class Model {
  private _data: any[] = [];

  constructor(data: any[]) {
    this._data = data;
  }

  add(item: any): void {
    this._data.push(item);
  }

  remove(index: number): void {
    this._data.splice(index, 1);
  }
}

class ObjectModel extends Model {
  constructor(data: object[]=[]) {
    super(data);
  }

  add(item: object): void {
    super.add(item);
  }
}