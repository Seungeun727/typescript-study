// Generics Class
var Child2 = /** @class */ (function () {
    function Child2(name, age) {
        this._name = name;
        this._age = age;
    }
    return Child2;
}());
new Child2("Mark", 39);
// new Person<string>(39);
// new Child2<string, number>("Mark", "age"); //'string' 형식의 인수는 'number' 형식의 매개 변수에 할당될 수 없음
// TypeScript Document 공부
// 클래스 이름명 뒤에 <T> 사용 가능함.
var GenericNumber = /** @class */ (function () {
    function GenericNumber() {
    }
    return GenericNumber;
}());
var myGenericNumber = new GenericNumber();
myGenericNumber.zeroValue = 0;
myGenericNumber.add = function (x, y) {
    return x + y;
};
// const myGenericString = new GenericNumber<string>();
// myGenericString.zeroValue = "";
// myGenericString.add = function (x, y) {
//   return x + y
// };
// console.log(myGenericString.add(myGenericString.zeroValue, "test"));
