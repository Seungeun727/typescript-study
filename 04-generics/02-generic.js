// Generic Syntax 
function helloBasic(message, comment) {
    return message;
}
helloBasic("Mark", 39);
helloBasic(36, 39); // T가 추론됨
// Generic Array & Tuple
// Tuple
// * 다른 Type, 같은 Type을 대괄호로 표현함
// * 단 타입 유형, 순서도 같아야 함.
function helloArray(message) {
    return message[0];
}
helloArray(["Hello", "World"]);
helloArray(["Hello", 5]);
function helloTuple(message) {
    return message[0];
}
helloTuple(["Hello", "World"]);
helloTuple(["helllo", 5]).length;
// Generic에서 멀티 타입을 지정할 수 있음.
function pushPairItem(arr, item) {
    arr.push(item);
    console.log("array data", arr); // result : [2022, '2022년']
    return arr;
}
var data = [];
pushPairItem(data, [2022, "2022년"]);
