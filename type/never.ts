// never
// 1. 모든 타입의 서브타입이며 모든 타입에 할당 가능함.
// 2. never에는 어떤 것도 할당 할 수 없다. (any도 할당 못함)
// 3. 타입 가드

// 어떠한 형태도 리턴되지 않는다.
// function error(message: string): never {
//   throw new Error(message);
// }  

function fail() {
  return error("failed");  // never 추론 가능해짐
}

function infiniteLoop(): never {
  while(true) { infiniteLoop(); }
}


// 타입 가드 
declare const a: string | number ;
if (typeof a !== 'string') {
  // number로 간주됨.
  // a;
}

// 조건부 타입
// 재이해 필요함 ..
type Indexable<T> =  T extends string ? T & {[ index: string]: any }: never;

// type ObjectIndexable = Indexable<{}>;


// TypeScript Guidebook 공부

// never
// 일반적으로 함수의 리턴 타입으로 사용된다.
// function에서 예외값, 어떠한 형태도 리턴되지 않도록 함.


// never 타입 지정한 변수는 타입을 할당할 수 없음.
// any도 할당할 수 없다.
let never_type: never;

// never 타입으로 오류 발생하지 않음
never_type = (function():never {

  throw new Error('Error') 
})();


// 실습 풀기
// 1. never 타입을 함수 결과값으로 지정하자.
// function error(message: string) {
//   throw new Error(message);
// };

function error(message: string): never {
  throw new Error(message);
};


// 2. 엄격한 타입 검사를 위한 error()함수를 사용할 것.
// 다시 풀어보기!!
// function $(selector:string):HTMLElement|NodeList {
//   if (typeof selector === 'string') {
//     return document.querySelectorAll(selector);
//   }
// }

// let body = $('body');
// let id = $(1988);