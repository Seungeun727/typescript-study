// PART01 - 강의 이후 클래스 다시 복습 필요해서 공부함.
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
// 클래스(Class)
// 1. class 키워드 뒤에 대문자로 클래스 이름을 작성한다.
// 2. 프로퍼티, 생성자, 메서드를 가진다.
// 3. new 키워드로 인스턴스를 생성한다.
var Circle = /** @class */ (function () {
    // 생성자 선언
    // * 생성자 : 객체 생성시 호출되고 객체의 멤버들을 초기화.
    // * 인수의 들어오는 데이터 타입을 지정하지 않으면 error 발생함.
    function Circle(width, height) {
        // 클래스 내부의 멤버 접근시 this키워드를 사용한다.
        this.width = width;
        this.height = height;
    }
    // 메서드 선언
    Circle.prototype.hello = function () {
        console.log("hello " + this.width);
    };
    return Circle;
}());
var c1 = new Circle(3, 5);
c1.hello(); // result :  3
console.log(c1); // Circle { width: 3, height: 5 }
// 클래스 접근 제한자 
// public: 클래스의 내부 멤버는 default로 public으로 누구나 접근됨(공개)
// private: 클래스 외부에서 접근 불가능
// protected: 클래스 외부에서 접근 불가능, 상속관계에서만 접근 가능함.
var Animal4 = /** @class */ (function () {
    function Animal4(name, age, gender) {
        this.name = name;
        this.age = age;
        this.gender = gender;
    }
    return Animal4;
}());
var a2 = new Animal4('mike', 5, 'female');
// a2.age;     // 'age' 속성은 private이며 'Animal4' 클래스 내에서만 접근 가능함.
// a2.gender;  // 'gender' 속성은 protected이며 하위 클래스 에서 사용 가능함.
var Hero = /** @class */ (function () {
    // name: string;
    // age: number;
    function Hero(name, age) {
        this.name = name;
        this.age = age;
        this.name = name;
        this.age = age;
    }
    return Hero;
}());
var hero1 = new Hero('Thor', 50);
console.log("hero1 data", hero1); // Hero { name: 'Thor', age: 50 }
// 상속 - 강의 때 예제 다시 풀어보기
var Animal5 = /** @class */ (function () {
    function Animal5(name, age) {
        this.name = name;
        this.age = age;
    }
    Animal5.prototype.print = function () {
        console.log("\uC774\uB984\uC740 ".concat(this.name, "\uC774\uACE0 \uB098\uC774\uB294 ").concat(this.age, " \uC785\uB2C8\uB2E4."));
    };
    return Animal5;
}());
var Dog = /** @class */ (function (_super) {
    __extends(Dog, _super);
    // 상속받은 클래스는 부모 생성자를 꼭 호출해줘야 한다.
    // 생성자 내부에 this 키워드 호출 시 super()를 먼저 작성한다.
    function Dog(name, age) {
        var _this = _super.call(this, name, age) || this;
        _this.text = "강아지입니다.";
        return _this;
    }
    Dog.prototype.printText = function () {
        console.log("\uC774\uB984: ".concat(this.name, ", \uB098\uC774: ").concat(this.age, ", \uC124\uBA85: ").concat(this.text));
    };
    return Dog;
}(Animal5));
var dog = new Dog('하루', 5);
dog.printText();
