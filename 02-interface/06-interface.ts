// 인터페이스 함수 타입

interface HelloPerson {
  (name: string, age?: number): void;  
}

const helloPerson: HelloPerson = function(name: string, age?: number) {
  console.log(`안녕하세요. ${name}입니다.`);
}

helloPerson("Mark", 39);


// TypeScript Guidebook 공부

interface FactorialInterface {
  (n: number): number;
}

// 인터페이스를 함수 타입으로 설정해서 매개변수, 리턴값 생략 가능함..
// 단 인터페이스가 적용된 함수의 매개변수, 리턴값을 임의로 바꿀 수 없다.
const factorial: FactorialInterface = (n) => {
  if (n === 0) {
    return 0;
  }
  if (n === 1) {
    return 1;
  }
  return n * factorial(n-1);
};