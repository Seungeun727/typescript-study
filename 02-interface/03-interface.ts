// 인터페이스- 함수 타입

// 인터페이스 Person4 정의
interface Person4 {
  name: string;
  age: number;
  hello(): void;
}

// 함수 (1)
const p41: Person4 = {
  name: 'Mark',
  age: 39,
  hello: function(): void {
    console.log(`안녕하세요. ${this.name} 입니다.`);
  },
};

// 함수 (2)
const p42: Person4 = {
  name: 'Mark',
  age: 39,
  hello(this: Person4): void {
    console.log(`안녕하세요. ${this.name} 입니다.`);
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


// TypeScrit Guidebook 공부

// 인터페이스와 매개변수
// : 강의를 듣다가 매개변수가 이해가 가지 않아서 공부함.
// * 매개변수 : 함수 호출 시 함수 내부에서 사용 가능한 변수.

// 인터페이스 정의
interface OnInitInterface {
  onInit(): void;
  initialize(): void;
}

// 인터페이스 요구 조건을 충족한 객체임.
const p43 = {
  onInit(): void {
    console.log('onInit');
  },
  initialize(): void {
    console.log('initialize');
  }
};

// 매개변수에 인터페이스가 설정된 함수!!
function ready(m: OnInitInterface):void {
  m.onInit();
  m.initialize();
}

ready(p43);

// 실습 문제 풀어보기
// 인터페이스 설정.

// 인터페이스 Hero 정의
interface Hero2 {
  superhero: string;
  alter_ego: string;
  superPower(gage: number): string;
}

// Hero 인터페이스 충족하는 객체
let batman: Hero2 = {
  superhero: "Batman",
  alter_ego: "Bruce Wayne",
  superPower(gage: number): string {
    return `${this.superhero} 슈퍼파워! 파워게이지 ${gage}`; 
  }
};

// Hero 인터페이스 총족하지 않은 객체
// let superman: Hero= {
//   superhero: "Superman",
//   alter_ego: "Kal-El",
// };

function callHero(hero: Hero2): void {
  console.log(`도와줘요 ${hero.superhero}`);
}

callHero(batman);
// callHero(superman);


// 예제 만들어보기 
// 인터페이스 cat 정의
interface cat {
  name: string,
  weight: number,
  age: number,
  moveFunc(): void;
}

// 인터페이스 조건에 충족한 객체 설정
const catList: cat = {
  name: '나비',
  weight: 8,
  age: 2,
  moveFunc(): void {
    console.log(`hello ${this.name}!`);
  }
};

catList.moveFunc();