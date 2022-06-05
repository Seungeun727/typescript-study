// 인터페이스
// 1. 작성 시 PascalCase를 사용한다.
// 2. I를 접두어로 사용하지 않음.
// 3. 선언을 병합할 수 있음.
function hello1(person) {
    console.log("\uC548\uB155\uD558\uC138\uC694! ".concat(person.name, " \uC785\uB2C8\uB2E4."));
}
var p1 = {
    name: "Mark",
    age: 39
};
hello1(p1);
function personFunc(person) {
    // return "hello" + person.superhero;
    console.log("person.superhero check", person.superhero);
}
var flash = {
    "superhero": "플래시(flash)",
    "publisher": "DC 코믹스",
    "alter_ego": "제미 게릭",
    "first_appearence": "Flash 코믹스 #1",
    "characters": "제이 게릭, 베리 알런, 윌리 웨스트, 바트 알렌"
};
var wolverine = {
    "superhero": "울버린(Wolverine)",
    "publisher": "Marvel 코믹스",
    "alter_ego": "제임스 하울렛(로건)",
    "first_appearence": "인크레더블 헐크 #180",
    "characters": "제이 게릭, 베리 알런, 윌리 웨스트, 바트 알렌"
};
personFunc(flash);
