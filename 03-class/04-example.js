// class - Index Signature
// class => object
// { mark: 'male', jade: 'male }
// { chloe: 'female', alex: 'male', anna: 'female' }
var Students = /** @class */ (function () {
    function Students() {
    }
    return Students;
}());
var B1 = new Students();
B1.mark = "male";
B1.jade = "male";
console.log(B1);
var C1 = new Students();
C1.chloe = "female";
C1.alex = "male";
C1.anna = "female";
console.log(C1);
