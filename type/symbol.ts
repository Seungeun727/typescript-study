// Symbol : Unique Type 
// 1. Primitive 타입의 값을 담아서 사용한다.
// 2. 고유하고 수정 불가능한 값으로 만든다.
// 3. 주로 (접근 제어) 접근을 막거나 필요 하는데 쓰인다.

console.log("symbol", Symbol('foo') === Symbol('foo'));  // return false

// symbol은 고유한 형태로 let을 안써도 된다.
// 생성된 심볼을 변수를 통해서 심볼에 접근 할 수 있다.
const sym = Symbol();

const obj = {
  [sym]: "value", // 접근을 막음
};

// obj["sym"];  // sym 속성이 없음.
obj[sym];   // 접근이 가능해짐


// TypeSript Document 공부
// Symbol
// * Symbol 생성자를 호출해서 symbol값이 생성된다.
// * 고유하고 유일하다.
// * 객체 속성의 키로 사용된다.

// 1. 타입 표현 시 symbol을 사용한다.
let sym1: symbol;

let sym2 = Symbol("key");
let sym3 = Symbol("key");
sym2 === sym3;  // return false => symbol은 유일하다.

// 2. 심볼 생성시  Symbol을 사용한다.
const symKey = Symbol();

let obj1 = {
  [symKey]: "value"
};

console.log("symKey Value", obj1[symKey]);    // result: value
console.log("symKey typeof", typeof symKey);  // result: symbol

const getClassNameSymbol = Symbol(); 

// 3. 객체 프로퍼티와 클래스 멤버를 선언이 가능하다.
class C {
  [getClassNameSymbol]() { 
    return "C";
  }
}

let c = new C();
let className1 = c[getClassNameSymbol]();  // 'C' 형식에 '[getClassNameSymbol]' 속성이 없음
let className2 = c[getClassNameSymbol](); 