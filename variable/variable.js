// Typescript Gitbook 참고
// 배열 구조 분해
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
function exampleFunction(_a) {
    var first = _a[0], second = _a[1];
    console.log("first", first);
    console.log("second", second);
}
exampleFunction([1, 2]);
var _a = ['apple', 'banana', 'mango'], apple = _a[0], reset = _a.slice(1);
console.log("result apple :", apple);
console.log("reset data :", reset);
// tuple을 이용한 구조 분해
var tuple = [7, "hello", true];
var numValue = tuple[0], stringValue = tuple[1], boolValue = tuple[2];
// 객체 구조 분해
var object = {
    foo: "foo",
    score: 12,
    bar: "bar"
};
// let { foo, score } = object;
// 선언없이 할당 가능함.
// ({ foo, score } = { foo: "change", score: 25 });
var foo = object.foo, passthrough = __rest(object, ["foo"]);
var total = passthrough.score + passthrough.bar.length;
console.log("total", total); // result : 15
var product = {
    item: "Mango",
    price: 10,
    inventory: 5
};
var item = product.item, remain = __rest(product, ["item"]);
var productTotal = remain.price + remain.inventory;
console.log("productTotal", productTotal);
