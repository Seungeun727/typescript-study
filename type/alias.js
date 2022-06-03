"use strict";
// 타입 별칭 (Type Alias)
const str = 'world';
let myStr = 'hello';
myStr = str;
// Aliasing Union Type
let personName = 0;
personName = 'Mark';
let another1 = 0;
another1 = 'Anna;';
// Aliasing Tuple
let person_info = ['Mark', 35];
let another2 = ['Anna', 24];
let sum = {
    data: [10, 20, 30],
    ouput(num) {
        return this.data.map(n => n + num);
    }
};
let multiplay = {
    data: [110, 230, 870, 231],
    ouput(num) {
        return this.data.map(n => n * num);
    }
};
let heroGame_A = {
    title: 'DC 언체인드',
    price: '인앱 구매 제공',
    desc: 'DC 히어로 & 빌런 각각의 개성은 물론, 액션의 재미까지!',
    category: '액션',
    platform: '모바일'
};
let heroGame_B = {
    title: 'MARVEL 퓨처파이트',
    price: '',
    desc: '마블 유니버스 히어로와 함께하는 대규모 블록버스터 액션 RPG!',
    category: '롤플레잉',
    platform: '모바일'
};
// 다른 방식으로 구현한 방법 찾아보기.
