// structural type system
// 구조가 같으면 같은 타입임.

interface IPerson {
  namge: string;
  age: string;
  speack(): string;
}

type PersonType = {
  namge: string;
  age: string;
  speack(): string;
};

let psersonInterface: IPerson = {} as any;
let psersonType: PersonType = {} as any;

psersonInterface = psersonType;
psersonType = psersonInterface;

// nominal type system
// 구조가 같아도 이름이 다르면 다른 타입임

type PersonID = string & { readonly brand: unique symbol };

function PersonID(id: string): PersonID {
  return id as PersonID;
}

function getPersonById(id: PersonID) {}

getPersonById(PersonID('id-aaaa'));
