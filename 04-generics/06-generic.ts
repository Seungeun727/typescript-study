// Generic Keyof Type

interface IHuman {
  name: string;
  age: number;
}

const human: IHuman = {
  name: "mark",
  age: 39
};

type Keys = keyof IHuman;

const keys: Keys = "age";

// IHuman[keyof IHuman] 
// => IHuman["name" | "age"] 
// => IHuman["name"] | IHuman["age"]
// => string | number 

// function getProp(obj: IHuman, key: keyof IHuman): IHuman[keyof IHuman] {
//   return obj[key];
// }

// function getProp<T>(obj: T, key: keyof T): T[keyof T] {
//   return obj[key];
// }

function getProp<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key];
}

getProp(human, "name");


function setProp<T, K extends keyof T>(obj: T, key: K, value: T[K]): void {
  obj[key] = value;
}

setProp(human, "name", "Anna");

// function setProp<T>(obj: T, key: keyof T, value: T[keyof T]): void {
//   obj[key] = value;
// }

// function setProp(obj: IHuman, key: keyof IHuman, value: string | number): void {
//   obj[key] = value;
// }