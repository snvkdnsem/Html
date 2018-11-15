var elem = document.getElementById("txt");
// console.log(elem.value);

// 111222<!>
var targetElem = document.getElementById("target");
// innerText의 Text는 약자가 아니므로 처음만 대문자(HTML은 약자이기 때문에 대문자)
targetElem.innerText = elem.value;

//111222
var targetElem2 = document.getElementById("target2");
targetElem2.innerHTML = elem.value;
