// 구구단 출력

// for (var i = 1; i <=9; i++) {
//   for (var j = 1; j <=9; j++) {
//     console.log(i + "*" + j + "=" + (i*j));
//   }
// }

var ary = ["1", "2", "3"];
var result = ary.join("");
console.log(result);

var a = 1;

function twoDigit(x) {
  return "0"+x; //만약 x가 한자리라면 앞에 0을 붙여서 2자리 만들어 준다.
}

console.log(a.fixed(2));
