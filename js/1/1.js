/*
  JS는 자바의 클래스가 없다.
*/

// 문법 무조건 외우자
// 문법이 왜 그럴까? WHY?
// class start {
//   Object global = new Object();
//
//   public static void main(String[] args){
//     // global.b = 100;
//     // 설계도 대로 써야한다.
//     // First Class : JS 객체는 일급 객체다.
//
//     X x = new X();
//     x.print(10);
//     System.out.println(global.b);
//   }
// }
//
// class X {
//   int a = 10;
//   public void print(int a){
//     System.out.println(a);
//   }
// }

global.b = 100; // 설계도 개뿔, 하고 싶은 대로 해라.
var a = 10;

funcion print(a){
  console.log(a);
}

print(a);
consol.log(global.b);

// alt + r : 코드 실행
