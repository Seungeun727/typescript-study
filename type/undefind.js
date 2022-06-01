"use strict";
// Undefined & Null
// 1. 둘다 소문자로 작성해야 한다. 
// 2. null과 undefind가 모든 타입의 하위 타입으로 하지 않도록 해야 한다.
// => --strictNullChecks을 설정해야 타입으로 안전하다!!! 
// 3. union type을 사용한다.
// let myName: string = null;   // No
// let u: undefined = null;  // No
let v = undefined;
// union type 작성
let union = null;
union = "Mark";
// null vs undefined
// null
// null 이라는 값이 할당된 상태
// 사용자가 사용할 준비가 덜 된 상태
// typeof 연산자를 이용해보면 object 출력된다.
let nullValue = null;
console.log("nullValue check", nullValue);
console.log("nullValue typeof", typeof nullValue);
// undefind
// 선언만 하고 값을 할당하지 않는 변수.
// 아예 준비가 안된 상태
// typeof 연산자로 이용하면 undefind임.
