// Type Compatibility (타입 호환성)

// 슈퍼타입과 서브타입
// 슈퍼타입 : 다른 한 타입을 포함하는 타입을 뜻함.
// 서브타입: 슈퍼타입에 포함되는 서브타입을 뜻함.

let sub1: 1 = 1;
let sup1: number = sub1;
// sub1 = sup1;   // error: 'number' 형식은 '1' 형식에 할당할 수 없음

let sub2: number[] = [1];
let sup2: object = sub2;
// sub2 = sup2; // error

let sub3: [number, number] = [1, 2];
let sup3: number[] = sub3;
// sub3 = sup3;

// any
let sub4: number = 1;
let sup4: any = sub4;
sub4 = sup4;  // 예외

// never
let sub5: never = 0 as never;
let sup5: number = sub5;
// sub5 = sup5;  // error number는  never 할당할 수 없음.


// 1. 공변 : 같거나 서브타입인 경우 할당이 가능함.
// 예시
let sub7:  string = '';
let sup8: string | number = sub7;

// 2. 반변 : 함수의 매개변수 타입만 같거나 슈퍼타입인 경우 할당 가능함
// strictFunctionTypes 옵션 사용.


// TODO.인강 외 따로 찾아보기
// 1. 슈퍼타입 & 서브타입

let A: 1 = 1;     // A: 서브타입
let B: number = A;   // B : A의 슈퍼타입


// 2. 공변성 
// A가 B의 서브타입이 성립하면  T<A>가 T<B>의 서브타입도 성립한다.

let listA: Array<string> = [];
let listB: Array<string | number> = [];
listB = listA;

let sub9 = (a: number) => 0;
let sup9 = (b: number, s: string) => 0;

// sub9 = sup9;   // error
sup9 = sub9;    // success

// listA = listB; //  error : '(string | number)[]' 형식은 'string[]' 형식에 할당할 수 없음

// 3. 반변성
// A가 B의 서브타입이 성립하면 공변성과 반대로 <T>B는 T<A>의 서브타입이 성립된다.


// 따로 체크
let sub10 = () => ({ name: "Alice" });
let sup10 = () => ({ name: "Alice", location: "Seattle"});

sub10 = sup10;
// sup10 = sub10; // error location 속성이 없음.

