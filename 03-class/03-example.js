// class - getters / setters
var Animal = /** @class */ (function () {
    function Animal(_name, age) {
        this._name = _name;
        this.age = age;
    }
    Object.defineProperty(Animal.prototype, "name", {
        get: function () {
            return this._name + " cat";
        },
        enumerable: false,
        configurable: true
    });
    return Animal;
}());
var A1 = new Animal("Navi", 2);
console.log(A1.name); // get을 하는 함수 => getter
// A1.name = "Sogumm";     // set을 하는 함수 => setter   
console.log(A1.name);
// getter 없을 경우 undefind로 출력됨
// setter 없을 경우 작성하는 동안 컴파일 에러를 발생시킨다.
// class - readonly properties
// 1. readonly는 constructor 내부나 프로퍼티를 선언 시 초기값 할당 가능함.
// 2. readonly는 public이 붙더라도 다른 값으로 바꿀 수 없다.
var Animal2 = /** @class */ (function () {
    function Animal2(_name, age) {
        this._name = _name;
        this.age = age;
        this.name = "Mark";
        this.country = "korea";
        this.country = "America";
    }
    Animal2.prototype.hello = function () {
        // this.country = "America";  // 기 전용 속성이므로 'country'에 할당할 수 없음
    };
    return Animal2;
}());
var A2 = new Animal2("Navi", 2);
console.log(A2.name); // get을 하는 함수 => getter
// A2.name = "Sogumm";     // set을 하는 함수 => setter   
console.log(A2.name);
