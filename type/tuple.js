"use strict";
// Tuple
// 다른 Type, 같은 Type을 대괄호로 표현함
// 단 타입 유형, 순서도 같아야 함.
let x;
x = ["hello", 39];
// x = [ 39, "hello" ];   // error 
// 인덱스 표현 가능함.
// 인덱스의 해당 요소가 없으면 undefind로 지정된다.
// x[3] = "world";  // error
const person = ["Mark", 39];
// 분해 할당
const [] = person;
// const [ first, second, third ] = person; // first: string, second : number
