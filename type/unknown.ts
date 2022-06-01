// unknown
// 모르는 변수의 타입을 사용하는 경우
// 동적의 내용이 값으로 들어올 때

// any 처럼 아무거나 할당할 수 있음.
// 타입의 유형을 확정해줘야 한다. 
// unknown 타입을 사용하면 런타임 에러를 줄일 수 있다.

declare const maybe: unknown;

// const aNumber: number = maybe;   // unknown은 number에 할당할 수 없음.

// 타입 가드
if ( maybe === true ) {
  const aBoolean: boolean = maybe;

  // const aString: string = maybe;  // 할당할 수 없음.
}

if ( typeof maybe === 'string') {
  const aString: string = maybe;

  // const aBoolean: boolean = maybe;  // 할당할 수 없음.
}