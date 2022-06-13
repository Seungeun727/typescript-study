// Typescript Gitbook 참고
// 배열 구조 분해
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
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
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
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
// let { item, ...remain} = product;
// let productTotal = remain.price + remain.inventory;
// console.log("productTotal", productTotal);
// 프로퍼티 rename
// let { item: newName1, price: newName2 } = product;
// let newName1 = product.item;
// let newName2 = product.price;
var item = product.item, price = product.price;
// 전개
// 배열을 다른 배열 안에 전개할 때 사용함
// 배열을 이용한 전개
// 전개로 인해 값이 변하지 않음
var first = [1, 2];
var second = [3, 4];
var bothPlus = __spreadArray(__spreadArray(__spreadArray([0], first, true), second, true), [5], false);
console.log("bothPlus", bothPlus); // result : [0, 1, 2, 3, 4, 5]
// 객체를 이용한 전개
// 전개 객체에 마지막에 작성한 프로퍼티가 이전에 프로퍼티를 덮어쓰기한다.
var defualts = {
    food: "spicy",
    price: "$$",
    ambiance: "noisy"
};
var search = __assign(__assign({}, defualts), { food: "rich" });
console.log("search", search); // result : { food: 'rich', price: '$$', ambiance: 'noisy' }
var store = {
    staff: "steve",
    product: "food",
    invenory: 5
};
var modifyStore = __assign(__assign({}, store), { staff: "jane" });
console.log("modifyStore", modifyStore);
