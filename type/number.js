"use strict";
// number
// 1. javaScript, TypeScript 모두 숫자는 부동 소수점 값임.
// 2. 10진수, 16진수, 2진수, 8진수 리터럴 지원함.
// 3. Nan, _ 표기 가능
// 10진수
let deciaml = 6;
// 16진수
let hex = 0xf00d;
// 2진수
let binary = 0b1010;
// 8진수
let octal = 0o744;
// NaN 
let notANumber = NaN;
let underscoreNum = 1000000;
// TypeScript Doc - Primitive type : number 찾아보기
// 1. toExponential() 
// * 숫자의 지수 표현을 문자형 형식으로 반환함.
let myNumber = 123456;
myNumber.toExponential(); // 1.23456e+5
myNumber.toExponential(1); // 1.23e+5
myNumber.toExponential(2); // 1.23e+5
// 확인하기
let exponentNum = 129435;
exponentNum.toExponential(3);
// 2. toFixed() 
// * 고정 소수점 표기법을 문자열 형식으로 반환함
let FixedNum = 10.8788;
FixedNum.toFixed(); // return 11
FixedNum.toFixed(1); // return 10.9
FixedNum.toFixed(2); // return 10.88
// 확인하기
let FixedValue = 13.2395;
FixedNum.toFixed(); // return 13
FixedNum.toFixed(1); // return 13.2
FixedNum.toFixed(3); // return 13.24
// 3. toLocaleString()
// * 숫자를 숫자의 로컬 특정 표현으로 변환함.
// * 숫자를 사람이 읽을 수 있는 문자열로 변환함.
let LocalStringNum = 10667.987;
LocalStringNum.toLocaleString(); // return 10,667.987 - US English
LocalStringNum.toLocaleString('de-DE'); // return 10.667,987 - German
console.log("toLocalString Number", LocalStringNum.toLocaleString());
console.log("toLocalString Number German", LocalStringNum.toLocaleString('de-DE'));
// 4. toPrecision() : 정밀
// 다시 이해 필요함.
// 지정된 정밀도에 대한 지수, 고정 소수점의 문자열 표현을 반환함.
let precisionNum = 10.5679;
precisionNum.toPrecision(1); // return 1e+1
precisionNum.toPrecision(2); // return 11
