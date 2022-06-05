// 인터페이스 - 클래스 타입
// 객체지향(oop)에서 많이 사용됨.
// 다시 이해 필요함.

// 인터페이스 IPerson1 정의
interface IPerson1 {
  name: string;
  age?: number;
  hello(): void;
}

class Person implements IPerson1 {
  name: string;
  age?: number | undefined;

  // 초기값 지정을 위해 constructor 이용함.
  constructor(name: string) {
    this.name = name;
  }
  hello(): void {
    console.log(`안녕하세요! ${this.name} 입니다.`);
  }  
}

const p11: IPerson1 = new Person('Mark');
p11.hello();

// 강의 끝나고 TypeScript Guidebook 공부

// 인터페이스 Button 정의 
interface ButtonInterface1 {
  onInit(): void;
  onClick(): void;
}

// 클래스 YgButton 인터페이스 Button 확장
class YgButton implements ButtonInterface1 {
  width: number;  // 1. 'width'은(는) 이니셜라이저가 없고 생성자에 할당되어 있지 않음.
  height: number;

  // 2. 초기값 지정을 위해 constructor 이용
  constructor (width: number, height: number) {
    this.width = width;
    this.height = height;
  }
  onInit(): void {
    console.log(`onInit: width는 ${this.width}이고 height는 ${this.height}입니다.`);
  }
  onClick(): void {
   console.log('onClick');
  }
}

const p12: ButtonInterface1 = new YgButton(5, 6);
p12.onInit();

// 실습 
// 저번에 작성한 인터페이스를 바탕으로 클래스 SuperHero를 정의해봅시다.
interface Hero3 {
  superhero: string;
  publisher: string;
  alter_ego?: string;
  first_appearance?: string;
  characters?: string;
  onInit(): void;
  superPower?(gage: number): string;
}

class SuperHero implements Hero3 {
  superhero: string;
  alter_ego?: string; 
  publisher: string;
  first_appearance?: string | undefined;
  characters?: string | undefined;

  // 초기값을 위한 constructor 사용 필요함
  constructor(superhero: string,  pulisher: string) {
    this.superhero = superhero;
    this.publisher = pulisher;
  }

  onInit(): void {
    console.log(`${this.superhero}, ${this.publisher}`);
  }

  superPower(gage: number): string {
    return `${this.superhero} 수퍼파워! 파워 게이지 ${gage}`
  }
}

let p13: Hero3 = new SuperHero('플래시(flash)', 'DC 코믹스');
let p14: Hero3 = new SuperHero('울버린(wolverline)', 'Marvel 코믹스');
p13.onInit();
p14.onInit();