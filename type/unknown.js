"use strict";
// unknown
// 모르는 변수의 타입을 사용하는 경우
// 동적의 내용이 값으로 들어올 때
// const aNumber: number = maybe;   // unknown은 number에 할당할 수 없음.
// 타입 가드
if (maybe === true) {
    const aBoolean = maybe;
    // const aString: string = maybe;  // 할당할 수 없음.
}
if (typeof maybe === 'string') {
    const aString = maybe;
    // const aBoolean: boolean = maybe;  // 할당할 수 없음.
}
