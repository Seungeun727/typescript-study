// const numValue: number = undefined;

// CompileOptions
// 1. type

// import React from "react";

// npm i --save-dev @types/react 설치 요구함.
// node_module/@types/react로 만들어짐

//  2. target
// const hello = () => {
//   // lib 지정하지 않으면 error 발생
//   console.log("hello");
// };


// 3. outDir
// 컴파일 결과를 폴더로 생성함
// 출력할 directory
// 진입 폴더를 설정해줘야 진입폴더로 컴파일 결과 폴더를 생성한다.
console.log('hello');

// 4. outFile
// 단일 파일 출력되는 파일명
// 5. rootDir
// 진입폴더

// stric
// 엄격한 타입을 옵션으로 체크한다.

// 알고만 있기.
// --nolmplicitAny
// 1. 명시적이지 않게 any타입 사용으로 에러를 발생
// 2. 아무것도 쓰지 않으면 에러 발생함.
// 3. any라고 지정되지 않은 경우 any가 아닌 것(다시 이해)

// --nolmplicitThis
// 명시적이지 않게 any타입 사용하고 this 표현식에 사용하면 error 발생함.

// function nolmplicitThisFunc(this, name: string, age: number) {
//   // 첫번째 매개 변수를 this에 놓으면 error를 발생한다.
//   // this를 any로 명시적 지정은 합리적이다.
//   // 타입적으로 안전함.
//   this.name = name;
//   this.age = age;
//   return this;
// }


class NolimplicitThisClass {
  private _name: string;
  private _age: number;

  constructor(name: string, age: number) {
    this._name = name;
    this._age = age;
  }

  public print(this: NolimplicitThisClass) {
    console.log("ths._name check", this._name);
    console.log("ths._age check", this._age);
  }
}

// --strictNullChecks
// 적용하지 않으면 모든 타입이 null, undefined를 가짐.
// 적용 시 가지려면 union Type을 통해 명시적으로 선언을 해줘야 한다.
// 예외: void 타입은 undefined를 가짐.


// --strictFunctionTypes
// 함수의 서브타입 체크.
// 반환타입: 공변적
// 인자타입: 반공변적
// 타입스크립트는 인자타입이 공변적, 반공변적이다


// --stictPropertyInitialization
// 정의되지 않는 클래스의 속성이 생성자에서 초기화되었는지 체크함.
// 구조체에서 초기값을 할당한 경우는 정상으로 체크함.
// 구조체는 async 사용할 수 없음.

// --strictBindCallApply
// bind, call, apply 엄격한 검사 수행.

// --alwaysStrict
// javaScript의 strict 모드 코드 분석함.