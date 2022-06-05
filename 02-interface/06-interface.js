// 인터페이스 함수 타입
var helloPerson = function (name, age) {
  console.log("\uC548\uB155\uD558\uC138\uC694. ".concat(name, "\uC785\uB2C8\uB2E4."));
};
helloPerson("Mark", 39);
// 인터페이스를 함수 타입으로 설정해서 매개변수, 리턴값 생략 가능함..
// 단 인터페이스가 적용된 함수의 매개변수, 리턴값을 임의로 바꿀 수 없다.
var factorial = function (n) {
  if (n === 0) {
    return 0;
  }
  if (n === 1) {
    return 1;
  }
  return n * factorial(n - 1);
};
