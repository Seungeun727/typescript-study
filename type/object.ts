// object
// 1. non-primitive type 
// 2. primitive type 이 아닌 것을 나타내고 싶을 때 사용하는 타입

// object literal
const person1 = { name: "Mark", age: 39 };

//  object create
const person2 = Object.create({ name: "Mark", age: 39 });

// Bad Object example
// const num = Object.create(3);  // 3 은 number type이라 error 발생함. 
