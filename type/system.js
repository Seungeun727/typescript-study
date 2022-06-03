"use strict";
// structural type system
// 구조가 같으면 같은 타입임.
let psersonInterface = {};
let psersonType = {};
psersonInterface = psersonType;
psersonType = psersonInterface;
function PersonID(id) {
    return id;
}
function getPersonById(id) { }
getPersonById(PersonID('id-aaaa'));
