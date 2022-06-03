"use strict";
// Array 
// 표현 방식 (2가지)
// 많이 사용되는 방식 ..
let list = [1, 2, 3];
// let list: Array<number> = [ 1, 2, 3];
// union type 작성 
let list1 = [1, 2, 3, "4"];
// typescript guidebook study
// Array 
// 1. 특정 문자 아이템만 허용함.
let stringList = ['Mike', 'doil', 'steve'];
// 2. 모든 데이터 타입을 아이템에 허용함.
// any[] 
// 배열 타입 명시적으로 선언함
// 어떤 데이터 타입도 배열 아이템으로 설정 가능함
// * 명시적 선언: 선언문을 통해 변수의 이름, 데이터 타입 속성 부여함.
// 다른 데이터 타입으로 재할당시 오류 반환함. 
let anyList = [{ name: 'minji' }, 'Mike', 'doil', 'steve'];
// anyList = true;  // error 발생
// 3.특정 데이터 타입만 배열 아이템으로 허용함.
// union type ( 다중 타입 )
let selectList = [100, 'Mike'];
// 실습 적용해보기
let memberList = ['손흥민', '이승우', '이강인'];
console.log("memberList item", memberList);
let data_list = [
    { type: '뉴스' },
    false,
    {},
    [],
    1,
    (x) => Math.pow(x, 3)
];
console.log("data_list check", data_list);
let only_num_str_boo = [10, true, '프로그래밍'];
// only_num_str_boo.push(10);
// only_num_str_boo.push(true);
// only_num_str_boo.push('프로그래밍');
console.log("only_num_str_boo item", only_num_str_boo);
