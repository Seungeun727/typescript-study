// any 
// 1. 어떤 타입도 상관없다.
// 2. 정상적인 컴파일 타입이 이뤄지지 않아 최대한 지양할 것.
// 3. nolmplicitAny :  any를 쓰지 않으면 오류 발생하는 컴파일 옵션
// 4. 타입 안정성을 낮춤.

function returnAny(message: any):any {
  console.log(message);
}

const any1 = returnAny('return any');

// any1.toString(); 

let looselyTyped: any = {};

// const d = looselyTyped.a.b.c.d;   // 개체를 통해 전파됨.

function leakingAny(obj: any) {
  const a: number = obj.num;  // 누수 막힘
  const b = a + 1; 
  return b;
}

// const c =  leakingAny({ num: 0 }); 
// c.indexOf("0");


// TypeScript Guidbook

// any
// 외부 라이브러리, 동적 콘텐츠 등 어떤 타입도 할당할 지 모르는 경우 사용함
// 어떤 타입도 가능하다.

// 명시적 선언으로 any 타입 부여함
let proudctId: any = 212356; 

// 어떤 유형의 값을 재할당 가능함.
proudctId = 'Mike';

// 암시적 선언으로 any 타입 부여함
let product_name;
product_name = 12345;
product_name = 'Mike';

// 실습 풀기

// 1. 명시적 선언을 통해 any 타입을 지정하자.
let explicit_type: any = true;
explicit_type = 'OK!';  
console.log("explicit_type", explicit_type);

// 2. 암시적 선언을 통해 any 타입을 지정하자.
let implicit_type;
implicit_type = false;
implicit_type = 'NO!';
console.log("implicit_type", implicit_type);
