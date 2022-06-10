// Generics function
var HelloFunction1 = function (message) {
    return message;
};
var HelloFunction2 = function (message) {
    return message;
};
// typescript document 공부
// 제네릭 타입
// 함수자체의 타입과 일반 인터페이스로 만드는 방법이 있음.
// 함수자체의 타입
function identityFunction(arg) {
    // console.log("arg length check", arg.length);    // error : 'T' 형식에 'length' 속성이 없음
    return arg;
}
var myIdentity = identityFunction;
function arrayGeneric(arg) {
    console.log(arg.length);
    return arg;
}
// 일치하는 유형의 일반 유형 매개변수에 대해 다른 이름을 사용할 수 있음.
function identityFunction2(arg) {
    return arg;
}
var myIdentity2 = identityFunction2;
// 객체 리터럴 유형의 호출 서명으로 작성 가능함.
function identityFunction3(arg) {
    return arg;
}
var myIdentity3 = identityFunction3;
function interfaceFunc(arg) {
    return arg;
}
var myInterface1 = interfaceFunc;
