"use strict";
// string
let myName = "Mark";
myName = "Anna";
// ES6 Template String
// 행 걸쳐 있거나, 표현식 넣을 수 있는 문자열
// bactkick (`) 기호를 사용함.
// 보간 즉 표현식 `${ age }  으로 사용됨.
// 줄바꿈 가능함.
let fullName = 'Mark Lee';
let age = 39;
let sentence = `Hello, My name is ${fullName}.

I'll be ${age + 1} years old next month.`;
console.log("sentence check", sentence);
