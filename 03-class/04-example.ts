// class - Index Signature

// class => object
// { mark: 'male', jade: 'male }
// { chloe: 'female', alex: 'male', anna: 'female' }

class Students {
  // mark: string = 'male';
  // [index: string]: string;    // Index Signature 작성
  [index: string]: "male" | "female";

  // mark = "hello";  => (x)
  // mark: "male" = "male"; => (o)
}

const B1 = new Students();
B1.mark = "male";
B1.jade = "male";

console.log(B1);

const C1 = new Students();
C1.chloe = "female";
C1.alex= "male";
C1.anna= "female";

console.log(C1);