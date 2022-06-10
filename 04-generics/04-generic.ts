// Generics Class

class Child2<T, K> {
  private _name: T;
  private _age: K;
  constructor(name: T, age: K) {
    this._name = name;
    this._age = age;
  }
}

new Child2("Mark", 39);
// new Person<string>(39);
// new Child2<string, number>("Mark", "age"); //'string' 형식의 인수는 'number' 형식의 매개 변수에 할당될 수 없음

// TypeScript Document 공부

// 클래스 이름명 뒤에 <T> 사용 가능함.
class GenericNumber<T> {
  zeroValue!: T;
  add!: (x: T, y: T) => T;
}
const myGenericNumber = new GenericNumber<number>();
myGenericNumber.zeroValue = 0;
myGenericNumber.add = function(x, y) { 
  return x + y 
};

// const myGenericString = new GenericNumber<string>();
// myGenericString.zeroValue = "";
// myGenericString.add = function (x, y) {
//   return x + y
// };

// console.log(myGenericString.add(myGenericString.zeroValue, "test"));