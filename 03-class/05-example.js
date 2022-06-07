// static property & method 
// static 키워드를 통해 클래스의 속성과 메서드를 정의한다.
var Animal3 = /** @class */ (function () {
    function Animal3() {
    }
    Animal3.prototype.hello = function () {
        console.log("안녕하세요.", Animal3.city);
    };
    Animal3.prototype.change = function () {
        Animal3.city = "LA";
        // console.log("안녕하세요.", Animal3.city);
    };
    Animal3.city = 'Seoul';
    return Animal3;
}());
var p51 = new Animal3();
p51.hello(); // result : "안녕하세요. Seoul"
var p52 = new Animal3();
p52.hello(); // result : "안녕하세요. Seoul"
// Animal3.hello();
// Animal3.city;
p51.change();
p52.hello(); // result : "안녕하세요. LA"
// Singleton
var ClassName = /** @class */ (function () {
    function ClassName() {
    }
    // getInstance()로 인스턴스 한번만 실행 가능함.
    ClassName.getInstance = function () {
        // ClassName으로부터 만든 object가 있을시 return.
        // ClassName으로부터 만든 object가 없으면 만들어서 return   
        if (ClassName.instance === null) {
            // 클래스 내부 => private constructor 호출 가능함
            ClassName.instance = new ClassName();
        }
        return ClassName.instance;
    };
    ClassName.instance = null;
    return ClassName;
}());
// 각각 다른 object를 생성함.
// private 붙인 생성자를 호출해서 new 키워드로 인스턴스 생성을 못한다.
// const p53 = new ClassName();
// const p54 = new ClassName();
var p53 = ClassName.getInstance();
var p54 = ClassName.getInstance();
console.log("check", p53 === p54); // result: true
