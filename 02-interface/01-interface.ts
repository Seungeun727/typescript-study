// 인터페이스
// 1. 작성 시 PascalCase를 사용한다.
// 2. I를 접두어로 사용하지 않음.
// 3. 선언을 병합할 수 있음.

interface Person1 {
  name: string,
  age: number
}

function hello1(person: Person1 ): void {
  console.log(`안녕하세요! ${person.name} 입니다.`);
}

const p1: Person1 = {
  name: "Mark",
  age: 39
};

hello1(p1);


// TypeScript GuideBook 공부
 
// 실습 
// 01. 플래시, 울버린을 추상하는 인터페이스를 정의.

interface Person4 {
  superhero: string;
  publisher: string;
  alter_ego: string;
  first_appearence: string;
  characters: string;
}

function personFunc(person: Person4):void {
  // return "hello" + person.superhero;
  console.log("person.superhero check", person.superhero);
}

let flash: Person4 = {
  "superhero": "플래시(flash)",
  "publisher": "DC 코믹스",
  "alter_ego": "제미 게릭",
  "first_appearence": "Flash 코믹스 #1",
  "characters": "제이 게릭, 베리 알런, 윌리 웨스트, 바트 알렌"
};


let wolverine: Person4 =  {
  "superhero": "울버린(Wolverine)",
  "publisher": "Marvel 코믹스",
  "alter_ego": "제임스 하울렛(로건)",
  "first_appearence": "인크레더블 헐크 #180",
  "characters": "제이 게릭, 베리 알런, 윌리 웨스트, 바트 알렌"
};

personFunc(flash);
