// input 엘리먼트가 보관하는 값은 자료형이 문자열입니다.

var a = "10";
var b = "20";

console.log(a+b);
console.log(a-b);
console.log(a*b);
console.log(a/b);
console.log("----------");
console.log("a+b="+a+b);
console.log("a-b="+a-b);
console.log("a*b="+a*b);
console.log("a/b="+a/b);
console.log("----------");
a = parseInt(a, 10); // 문자열을 10진수 정수로 변경
b = parseInt(b, 10);
console.log("----------");
console.log(a+b);
console.log(a-b);
console.log(a*b);
console.log(a/b);
console.log("----------");
console.log("a+b="+(a+b));
console.log("a-b="+(a-b));
console.log("a*b="+(a*b));
console.log("a/b="+(a/b));
