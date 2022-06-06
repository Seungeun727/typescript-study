// 클래스(class)
// 1. 이름은 보통 대문자로 작성한다.
// 2. 클래스 이전에는 es5는 함수로 변경된다.
// 3. new를 사용해서 class를 통해 object 만들 수 있다.
// 4. constructor를 이용해 object 생성하여 값을 전달한다.
// 5. this를 이용해 obejct를 가리킬 수 있음.
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
// class1 : class Person6 정의
var Person6 = /** @class */ (function () {
    function Person6(name) {
        this.name = name;
    }
    return Person6;
}());
var p21 = new Person6("Mark");
console.log(p21);
// class2 : !옵션이 있는 경우
// * 클래스 내부에서 프로퍼티 선언하지 않거나, 생성자 값을 할당하지 않은 경우 붙임.
// * 클래스 프로퍼티 선언이 되어 있지만 값을 대입하지 않으면 undefind 출력됨.
// * !는 주의해야 한다.
var Person7 = /** @class */ (function () {
    function Person7() {
        // 1. 프로퍼티 선언 시 값을 할당하는 방법.
        this.name = "Mark";
        // 2. 생성자 안에 this로 클래스 멤버 접근하는 방법.
        // constructor(age: number) {
        //   this.age = age;
        // }
    }
    return Person7;
}());
var p22 = new Person7(); // 생성자를 작성하지 않을 때는 default 생성자 호출됨.
console.log(p22);
// p22.age = 37;
console.log(p22.age); // result: undefind 
// class 3 
// 단 생성자는 async를 설정할 수 없다.
var Person8 = /** @class */ (function () {
    // undefind 혹은 number를 출력하고 싶은 경우
    function Person8(age) {
        this.name = "Mark";
        if (age === undefined) {
            this.age = 20;
        }
        else {
            this.age = age;
        }
    }
    Person8.prototype.init = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/];
            });
        });
    };
    return Person8;
}());
var p23 = new Person8(39);
var p24 = new Person8();
console.log(p23);
// p22.age = 37;
console.log(p23.age);
// TypeScript Document 예시
// 클래스 Gretter 정의
var Gretter = /** @class */ (function () {
    // 생성자
    function Gretter(message) {
        // this 키워드로 클래스 멤버를 접근한다.
        this.gretting = message;
    }
    Gretter.prototype.greet = function () {
        return "Hello, " + this.gretting;
    };
    return Gretter;
}());
// new 키워드로 클래스의 인스턴스를 생성한다.
var gretter = new Gretter("world");
