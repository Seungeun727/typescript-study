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

# Type annotation
- 특정 변수, 함수, 객체에 type을 지정한다.
- 변수명 뒤에 :을 붙이고 타입명을 지정함.0
- 가독성, 유지보수에 장점이 있음 

```typescript
let stringVal:string = "Apple";
let booleanVal: boolean = false;
let numberVal: number = 10;
```
<br />

# 원시 자료형 (Primitive Type)
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

