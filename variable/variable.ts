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


// let { item, ...remain} = product;
// let productTotal = remain.price + remain.inventory;

// console.log("productTotal", productTotal);


// 프로퍼티 rename
// let { item: newName1, price: newName2 } = product;
// let newName1 = product.item;
// let newName2 = product.price;

let { item, price }: {item: string, price: number} = product;

// 전개
// 배열을 다른 배열 안에 전개할 때 사용함


// 배열을 이용한 전개
// 전개로 인해 값이 변하지 않음
let first = [1, 2];
let second = [3, 4];
let bothPlus = [0, ...first, ...second, 5];
console.log("bothPlus", bothPlus);    // result : [0, 1, 2, 3, 4, 5]

// 객체를 이용한 전개
// 전개 객체에 마지막에 작성한 프로퍼티가 이전에 프로퍼티를 덮어쓰기한다.
let defualts = {
  food: "spicy",
  price: "$$",
  ambiance: "noisy"
};

let search = {
  ...defualts,
  food: "rich"
};

console.log("search", search);  // result : { food: 'rich', price: '$$', ambiance: 'noisy' }


let store = {
  staff: "steve",
  product: "food",
  invenory: 5
};

let modifyStore = {
  ...store,
  staff: "jane"
};

console.log("modifyStore", modifyStore);