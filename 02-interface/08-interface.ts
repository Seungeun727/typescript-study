// interface 와 type alias 비교
// 내용 정리!!

// type alias: type 명칭
// interface: 새로운 타입을 만들어내는 것.

// 1. function 비교
// type alias
type TypeEat = (food: string) => void;

// interface
interface IEat {
  (food: string): void;
}

// 2. array 비교
// type alias
type PersonList = string[];

// interface
interface IPersonList {
  [index: number]: string;
}


// 3. intersection 
interface ErrorHandle {
  success: boolean;
  error?: { message: string };
}

interface ArtistData {
  artists: { name: string };
}

// type alias
type ArtistDataAlias = ArtistData & ErrorHandle;

// interface 
interface IArtistDataInterface extends ArtistData, ErrorHandle { }
let art: ArtistData;
let iar: IArtistDataInterface;

// 4. union type
interface Bird {
  fly(): void;
  layEggs(): void;
}

interface Fish {
  swim(): void;
  layEggs(): void;
}

// type alias
type petType = Bird | Fish;

// interface
// interface IPet extends petType {} // 인터페이스는 개체 형식 또는 정적으로 알려진 멤버가 포함된 개체 형식의 교집합만 확장할 수 있음


// 5. Declarration Merging 

// interface
// 인터페이스 가능함.
// ex- element 확장시 용이.
interface MergingInterface {
  name: string;
}

interface MergingInterface {
  address: string;
}

let mi: MergingInterface;


// type alias
// 불가능함.
// type MergingType = {
//   name: string;
// };

// type MergingType = {
//   address: string;
// };

