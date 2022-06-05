// 인터페이스 - readonly 속성 이해
// 수정할 수 없도록 설정하고 싶은 경우

interface Person5 {
  name: string;
  age?: number;
  readonly gender: string;
}

const p81: Person5 = {
  name: 'Mark',
  gender: 'male',
};

// p81.gender = "female";  // error: 읽기 전용 속성이므로 'gender'에 할당할 수 없음.


// TypeScript Guidebook
interface NoteBook {
  readonly CPU: string;
  RAM: string;
}

const mackbook: NoteBook = {
  CPU: '2.96GHZ 코어 i9',
  RAM: '32GB'
};

// mackbook.CPU = '128GB'; // error: 읽기 전용 속성이므로 수정할 수 없음.

// 실습 풀기
interface Hero5 {
  readonly superhero: string;
  publisher: string;
  readonly alter_ego: string;
  first_appearance?: string;
  characters?: string;
  onInit?(): void;
  superPower?(gage: number): string;
}

let flash2: Hero5 = {
  superhero: '토르',
  publisher: '마블 시네마틱 유니버스',
  alter_ego: '크리스 헴스워스'
}

// flash2.alter_ego = "크리스";  error 발생함.
