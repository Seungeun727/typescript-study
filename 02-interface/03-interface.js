// 인터페이스- 함수 타입
// 함수 (1)
var p41 = {
    name: 'Mark',
    age: 39,
    hello: function () {
        console.log("\uC548\uB155\uD558\uC138\uC694. ".concat(this.name, " \uC785\uB2C8\uB2E4."));
    }
};
// 함수 (2)
var p42 = {
    name: 'Mark',
    age: 39,
    hello: function () {
        console.log("\uC548\uB155\uD558\uC138\uC694. ".concat(this.name, " \uC785\uB2C8\uB2E4."));
    }
};
// 함수 (3)
// const p43: Person4 = {
//   name: 'Mark',
//   age: 39,
//   //  error : 화살표 함수에는 'this' 매개 변수를 사용할 수 없음
//   hello: (this: Person4): void => {  
//     // console.log(`안녕하세요. ${this.name} 입니다.`); // error : 'typeof globalThis' 형식에 'name' 속성이 없습니다.
//   }
// };
p41.hello();
p42.hello();
// 인터페이스 요구 조건을 충족한 객체임.
var p43 = {
    onInit: function () {
        console.log('onInit');
    },
    initialize: function () {
        console.log('initialize');
    }
};
// 매개변수에 인터페이스가 설정된 함수!!
function ready(m) {
    m.onInit();
    m.initialize();
}
ready(p43);
// Hero 인터페이스 충족하는 객체
var batman = {
    superhero: "Batman",
    alter_ego: "Bruce Wayne",
    superPower: function (gage) {
        return "".concat(this.superhero, " \uC288\uD37C\uD30C\uC6CC! \uD30C\uC6CC\uAC8C\uC774\uC9C0 ").concat(gage);
    }
};
// Hero 인터페이스 총족하지 않은 객체
// let superman: Hero= {
//   superhero: "Superman",
//   alter_ego: "Kal-El",
// };
function callHero(hero) {
    console.log("\uB3C4\uC640\uC918\uC694 ".concat(hero.superhero));
}
callHero(batman);
// 인터페이스 조건에 충족한 객체 설정
var catList = {
    name: '나비',
    weight: 8,
    age: 2,
    moveFunc: function () {
        console.log("hello ".concat(this.name, "!"));
    }
};
catList.moveFunc();
