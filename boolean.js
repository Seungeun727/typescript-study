// type annotation
// 1. 변수, 함수, 객체 속성의 타입을 지정한다.
// 2. 변수명 뒤에 :을 붙이고 타입명을 지정함.
// boolean
var isDone = false;
isDone = true; // 가능함
// isDone = 5;       // 불가능함 (변수 선언시 boolean 타입으로 정해졌음)
console.log(typeof isDone); // result : 'boolean'
var isOk = true;
// let isNotOk: boolean = new Boolean(true);
