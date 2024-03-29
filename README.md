# TypeScript 

## 🔦 Description 
- 패스트 캠퍼스 강의를 통해 typeScript와 JavaScript를 비교한다.
- TypeScript는 자바스크립트에 타입을 부여한 언어임.
- TypeScript는 React, Vue 등 여러 프레임워크를 지원한다.
- 동적 언어인 자바스크립트와 달리 컴파일 언어로 에러를 사전에 방지할 수 있다.

<br />

## ⚙️ 프로젝트 설치

### npm install 

```
  npm init -y
```

### typeScript 패키지 설치

```
 npm install -D typescript
```

### 실행 : node_modules => typescript

```
npx tsc
node_modules./bin/tsc
node_modules/typescript/bin/tsc
```
### tsconfig.json 파일 생성

```
npx tsc --init
```

### 파일 생성  

```
nano [파일이름명.ts]
```

### 파일 변경 내용 감지 

``` 
tsc -watch 
```

### build

```
npm run build
```
<br />

## Type annotation
- 특정 변수, 함수, 객체에 type을 지정한다.
- 변수명 뒤에 :을 붙이고 타입명을 지정함.0
- 가독성, 유지보수에 장점이 있음 

```typescript
let stringVal:string = "Apple";
let booleanVal: boolean = false;
let numberVal: number = 10;
```
<br />

## 원시 자료형 (Primitive Type)
- 실제 값을 저장하는 자료형

  타입 | 의미  
  |:---|:---|
  boolean |  true 혹은 false를 반환함
  number | 부동소수점 값으로 정수, 분수에 사용됨
  string | 문자열의 데이터 형태
  symbol | 고유한 데이터
  null | 변수 선언 시 null 값을 할당한 상태 (typeof =>  object)
  undefined | 선언하고 값을 할당한 상태 (typeof => undefind)

- primitive type은 소문자로 작성한다.
-  ⚠️ 래퍼 객체로 만들 수 있음 <br />
    `new Boolean(false);`
    - typescript는 new 키워드를 이용한 **래퍼 객체를 사용하는 것을
      권장하지 않는다.**
    - **리터럴 값으로 Primitive type을 사용하는 것을 권고한다.**

## Type system
- 1.타입을 명시적으로 지정할 수 있다.
- 2.타입을 명시적으로 선언하지 않으면 컴파일러가 자동으로 타입을 추론함.

## Type alias (타입 별칭)
- 기타 직접 작성해야 하는 타입을 다른 이름으로 지정 가능함.
- 만들어진 타입을 새로운 이름으로 만드는 것.
- Primititve, Union Type, Tuple에 사용함

## Interface 
- 컴파일 타임동안 타입체크를 위해 사용한다.
- JavaScript 환경에서는 지원하지 않는다.
- 변수, 함수, 클래스에 사용 가능함.

## Class 
- object를 만드는 설계도
- new를 사용해서 class를 통해 object 만들 수 있다.
- constructor를 이용해 object 생성하여 값을 전달한다.
- this를 이용해 obejct를 가리킬 수 있음.


## tsconfig 
- tsconfig.json 파일은 프로젝트의 루트에 위치한다.
- 컴파일에 필요한 컴파일 옵션을 지정한다.

### 최상위 프로퍼티 

옵션 | default |의미  
|:---|:---:|:---
complieOnSave | false | 파일 변경후 자동 컴파일 실행 , true / false 
extends | string | 파일 상대 경로명
compileOptions | | 타입스크립트 컴파일 옵션
files |  |상대 혹은 절대 경로의 리스트 배열
include |  | 컴파일 포함 : gitignore 패턴임
exclude | | 컴파일 제외 : 설정 안하면 (node_modules, bower_components, jspm_packaga, <outDir>)로 제외함 
<br />

### CompoilOptions
옵션 | 의미  
|:---|:---|
typeRoots | 배열 내 경로들 아래만 가져옴
types | 배열 안의 모듈, ./node_modules/@type 내 모듈 이름 가져옴 
target| 빌드의 결과물의 버전 처리
lib | 기본 타입 definition 라이브러리 선택
outDir | 출력할 directory
outFile | 단일 파일 출력되는 파일명
rootDir | 진입 directory
strict | 엄격한 타입을 옵션으로 체크
<br />

### CompileOptions - strict type
옵션 | 의미  
|:---|:---|
--nolmplicitAny | 명시적이지 않게 any 판단을 하게 되어 컴파일 에러 발생
--nolmplicitReturns | 함수 내 값을 리턴하지 않을 경우 컴파일 에러 발생함
--strictNullChecks | 모든 타입에 null과 undefined를 제거함
--strictFunctionTypes | 함수의 매개 변수 타입이 같거나 슈퍼타입이 아닌 경우 에러 경고함.
<br />

## 참고 
- [TypeScript 공식문서](https://www.typescriptlang.org)
- [TypeScript Guidebook](https://yamoo9.gitbook.io)

<br />

## 부연 설명<문서 다시 읽기..>

- files 
  - exclude 보다 강하다.
- include와 clude는 glob과 유사한 파일 패턴 목록을 갖음
  * glob란? 
  - * : 0개 이상의 문자와 매칭
  - ? : 한 문자와 매칭
  - **/ : 반복적으로 하위 디렉토리와 매칭
- include 
  - exclude 보다 약하다.
  - * 사용하면, .ts/ .tsx /.d.ts만 include
- exclude
  -<outDir>은 항상 제외임.