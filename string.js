// string
var myName = "Mark";
myName = "Anna";
// ES6 Template String
// 행 걸쳐 있거나, 표현식 넣을 수 있는 문자열
// bactkick (`) 기호를 사용함.
// 표현식 `${ age }  으로 사용됨.
// backtick의 내용 안 띄어쓰기 가능함.
var fullName = 'Mark Lee';
var age = 39;
var sentence = "Hello, My name is ".concat(fullName, ".\n\nI'll be ").concat(age + 1, " years old next month.");
console.log("sentence check", sentence);
