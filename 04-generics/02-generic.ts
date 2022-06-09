// Generic Syntax 

function helloBasic<T, U>(message: T, comment: U): T  {
  return message;
}

helloBasic<string, number>("Mark", 39);
helloBasic(36, 39);   // T가 추론됨

 
// Generic Array & Tuple

// Tuple
// * 다른 Type, 같은 Type을 대괄호로 표현함
// * 단 타입 유형, 순서도 같아야 함.

function helloArray<T>(message: T[]): T {
  return message[0];
} 

helloArray(["Hello", "World"]);
helloArray(["Hello", 5]);

function helloTuple<T, K>(message: [T, K]): T {
  return message[0];
}

helloTuple(["Hello", "World"]);
helloTuple(["helllo", 5]).length;


// TypeScript Guidebook 

type pairArray = [any, any][];

// Generic에서 멀티 타입을 지정할 수 있음.
function pushPairItem<T, M>(arr: pairArray, item:[T, M]): pairArray {
  arr.push(item);
  console.log("array data", arr);  // result : [2022, '2022년']
  return arr;
}

const data: pairArray = [];

pushPairItem<number, string>(data, [2022, "2022년"]);
