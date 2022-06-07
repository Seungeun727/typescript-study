// PART-01 : class 상속 
// protected: 외부에서 접근할 수 없고, 상속관계에서만 접근 가능함.
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Parent = /** @class */ (function () {
    function Parent(_name, _age) {
        this._name = _name;
        this._age = _age;
    }
    Parent.prototype.print = function () {
        console.log("\uC774\uB984\uC740 ".concat(this._name, "\uC774\uACE0 \uB098\uC774\uB294 ").concat(this._age, " \uC785\uB2C8\uB2E4."));
    };
    Parent.prototype.printName = function () {
        console.log(this._name, this._age);
    };
    return Parent;
}());
var Child = /** @class */ (function (_super) {
    __extends(Child, _super);
    // 상속받은 클래스는 부모 생성자를 호출할 것
    function Child(age) {
        var _this = _super.call(this, "Mark Jr", age) || this;
        // public _name = "Mark";  // 접근제한자도 오버라이드 함.
        _this.gender = "male";
        // 생성자 내부에 this 키워드로 호출하려면 super() 먼저 호출해야 함.
        _this.printName();
        return _this;
    }
    return Child;
}(Parent));
// Parent가 생성자 있으므로 같은 형태로 정의해야 함.
var p62 = new Child(1);
// p62.gender;
p62.print();
// const p61 = new Parent("Mark", 39);
// p61._age;    // error: _age는 private 속성이며, 클래스 내부에서만 접근 가능함.
// p61.print();
// PART-02 : Abstract Classes 
// 1. class 앞에 abstract 붙여줘야 한다.
// 2. abstract class는 new 키워드를 사용할 수 없다.
// 3. 완전하게 하기 위해 클래스 상속을 사용한다.
var AbstractPerson = /** @class */ (function () {
    function AbstractPerson() {
        this._name = "Mark";
    }
    return AbstractPerson;
}());
// new AbstractPerson(); // error: 추상 클래스의 인스턴스를 만들 수 없음.
var Person11 = /** @class */ (function (_super) {
    __extends(Person11, _super);
    function Person11() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Person11.prototype.setName = function (name) {
        this._name = name;
    };
    return Person11;
}(AbstractPerson));
var p63 = new Person11();
// p63.setName();
