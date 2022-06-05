// 인터페이스 - 클래스 타입
// 객체지향(oop)에서 많이 사용됨.
// 다시 이해 필요함.
var Person = /** @class */ (function () {
    // 초기값 지정을 위해 constructor 이용함.
    function Person(name) {
        this.name = name;
    }
    Person.prototype.hello = function () {
        console.log("\uC548\uB155\uD558\uC138\uC694! ".concat(this.name, " \uC785\uB2C8\uB2E4."));
    };
    return Person;
}());
var p11 = new Person('Mark');
p11.hello();
// 클래스 YgButton 인터페이스 Button 확장
var YgButton = /** @class */ (function () {
    // 2. 초기값 지정을 위해 constructor 이용
    function YgButton(width, height) {
        this.width = width;
        this.height = height;
    }
    YgButton.prototype.onInit = function () {
        console.log("onInit: width\uB294 ".concat(this.width, "\uC774\uACE0 height\uB294 ").concat(this.height, "\uC785\uB2C8\uB2E4."));
    };
    YgButton.prototype.onClick = function () {
        console.log('onClick');
    };
    return YgButton;
}());
var p12 = new YgButton(5, 6);
p12.onInit();
var SuperHero = /** @class */ (function () {
    // 초기값을 위한 constructor 사용 필요함
    function SuperHero(superhero, pulisher) {
        this.superhero = superhero;
        this.publisher = pulisher;
    }
    SuperHero.prototype.onInit = function () {
        console.log("".concat(this.superhero, ", ").concat(this.publisher));
    };
    SuperHero.prototype.superPower = function (gage) {
        return "".concat(this.superhero, " \uC218\uD37C\uD30C\uC6CC! \uD30C\uC6CC \uAC8C\uC774\uC9C0 ").concat(gage);
    };
    return SuperHero;
}());
var p13 = new SuperHero('플래시(flash)', 'DC 코믹스');
var p14 = new SuperHero('울버린(wolverline)', 'Marvel 코믹스');
p13.onInit();
p14.onInit();
