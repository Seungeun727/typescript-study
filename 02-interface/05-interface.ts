// 인터페이스 확장
// extends 키워드로 인터페이스를 확장할 수 있음.

// 인터페이스 IPerson2 정의
interface IPerson2 {
  name: string;
  age?: number;
}

// IPerson2를 상속한 IKorean
interface IKorean extends IPerson2 {
  city: string;
}

// 인터페이스 조건에 충족한 객체
const k1: IKorean = {
  name: "나비",
  city: "서울",
  age: 39
};

// 강의 끝나고 TypeScript Guidebook 공부

// interface ButtonInterface 정의
interface ButtonInterface2 {
  readonly _type: string;
  width?: number;
  height?: number;
  onInitButton?(): void;
  onClickButton?(): void;
}

// ButtonInterface 확장한 ToggleButtonInterface 
interface ToggleButoonInterface extends ButtonInterface2 {
  toggle(): void;
  onToggled?(): void;
}

// 실습 
// Hero 인터페이스를 확장하는 새로운 MageHero 인터페이스를 정의해보세요.

interface Hero4 {
  superhero: string;
  publisher: string;
  alter_ego?: string;
  first_appearance?: string;
  characters?: string;
  onInit?(): void;
  superPower?(gage: number): string;
}

interface MageHero extends Hero4 {
  gender: string,
  age?: number,
}

const k2: MageHero = {
  superhero: "토르",
  publisher: "마블 시네마틱 유니버스",
  gender: "남성",
  age: 1500,
};