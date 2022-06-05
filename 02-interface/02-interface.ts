// 인터페이스 옵션 속성

interface Person2 {
  name: string,     // 필수 속성
  age?: number      // 속성이 있는지 없는지 모를때 ?를 붙여준다.
}

function hello2(person: Person2): void {
  console.log(`안녕하세요. ${person.name}입니다.`);
}

hello2({name: 'Mark', age: 39});
hello2({name: 'Anna'});


interface Person3 {
  name: string;
  age?: number;
  [index: string]: any     // 객체의 옵션 property
}

function hello3(person: Person3): void {
  console.log(`안녕하세요. ${person.name}입니다.`);
}

const p31: Person3 = {
  name: 'Mark',
  age: 39,
};

const p32: Person3 = {
  name: 'Anna',
  systers: ["Sung", "Chan"]
};

const p33: Person3 = {
  name: 'Bok',
  father: p31,
  mother: p32
};


hello3(p33);