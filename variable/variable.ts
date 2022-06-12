// Typescript Gitbook 참고
// 배열 구조 분해

function exampleFunction([first, second]: [number,number]) {
  console.log("first", first);
  console.log("second", second);
}

exampleFunction([1, 2]);

let [apple, ...reset] = ['apple', 'banana', 'mango'];
console.log("result apple :", apple);
console.log("reset data :", reset);

// tuple을 이용한 구조 분해
let tuple: [number, string, boolean] = [7, "hello", true];

let [ numValue, stringValue, boolValue ] = tuple;

// 객체 구조 분해
let object = {
  foo: "foo",
  score: 12,
  bar: "bar"
};

// let { foo, score } = object;

// 선언없이 할당 가능함.
// ({ foo, score } = { foo: "change", score: 25 });

let { foo, ...passthrough } = object;
let total = passthrough.score +  passthrough.bar.length;

console.log("total", total);  // result : 15

let product = {
  item: "Mango",
  price: 10,
  inventory: 5,
};


let { item, ...remain} = product;
let productTotal = remain.price + remain.inventory;

console.log("productTotal", productTotal);