// 타입 별칭 (Type Alias)

// Aliasing Primitive
type MyStringType = string;

const str = 'world';

let myStr: MyStringType = 'hello';
myStr = str;


// Aliasing Union Type
let personName: string | number = 0;
personName = 'Mark';

type StringorNumber = string | number;

let another1: StringorNumber = 0;
another1 = 'Anna;'


// Aliasing Tuple
let person_info: [ string, number] = ['Mark', 35];

type PersonTuple = [string, number];

let another2: PersonTuple = ['Anna', 24];


// Aliasing Function 
type EatType = (food: string) => void;


// Typescript Document 공부
// 사용자 정의 타입
// 사용자 정의하여 재사용 용이를 높임

type operation = {
  data: number[],
  ouput: (num: number) => number[]
};

let sum: operation = {
  data: [ 10 , 20, 30 ],
  ouput(num) {
    return this.data.map(n => n + num);
  }
};

let multiplay: operation = {
  data: [ 110 , 230, 870, 231 ],
  ouput(num) {
    return this.data.map(n => n * num);
  }
};


// 실습 
//  2개의 변수를 모두 허용하는 타입을 정의해보세요.
// 스스로 작성해봄.
type a = {
  title: string,
  price: string,
  desc: string,
  category: string,
  platform: string
}

type b = {
  title: string,
  price: string,
  desc: string,
  category: string,
  platform: string
}
type UserOperation = a | b;

let heroGame_A: UserOperation = {
  title: 'DC 언체인드',
  price: '인앱 구매 제공',
  desc: 'DC 히어로 & 빌런 각각의 개성은 물론, 액션의 재미까지!',
  category: '액션',
  platform: '모바일'
};

let heroGame_B: UserOperation = {
  title: 'MARVEL 퓨처파이트',
  price: '',    // 빈 문자  typeof로 체크하면 string...
  desc: '마블 유니버스 히어로와 함께하는 대규모 블록버스터 액션 RPG!',
  category: '롤플레잉',
  platform: '모바일'
};

// 다른 방식으로 구현한 방법 찾아보기.
