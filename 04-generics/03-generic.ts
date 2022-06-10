// Generics function

// 1. type Alias를 이용
type HelloFunctionGeneric1 = <T>(message: T) => T;

const HelloFunction1: HelloFunctionGeneric1 = <T>(message: T): T => {
  return message;
};

// 2. interface 
interface HelloFunctionGeneric2 {
  <T>(message: T): T;
}

const HelloFunction2: HelloFunctionGeneric2 = <T>(message: T): T => {
  return message;
};

// typescript document 공부
// 제네릭 타입
// 함수자체의 타입과 일반 인터페이스로 만드는 방법이 있음.

// 함수자체의 타입
function identityFunction<T>(arg: T): T {
  // console.log("arg length check", arg.length);    // error : 'T' 형식에 'length' 속성이 없음
  return arg;

}
const myIdentity: <T>(arg: T) => T = identityFunction;

function arrayGeneric<T>(arg: T[]): T[] {
  console.log(arg.length);
  return arg;
}

// 일치하는 유형의 일반 유형 매개변수에 대해 다른 이름을 사용할 수 있음.
function identityFunction2<T>(arg: T): T {
  return arg;
}

const myIdentity2: <Input>(arg: Input) => Input = identityFunction2;

// 객체 리터럴 유형의 호출 서명으로 작성 가능함.
function identityFunction3<T>(arg: T): T {
  return arg;
}

let myIdentity3: { <T>(arg: T): T } = identityFunction3;


// Interface
// 인터페이스명 뒤에 제너릭 매개변수로 옮길 수도 있음.
interface GenericFunction<T> {
  (arg: T): T;
}

function interfaceFunc<T>(arg: T): T {
  return arg;
}

const myInterface1: GenericFunction<number> = interfaceFunc;