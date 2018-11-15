function buttonClicked(){
  var elem = document.getElementById('input');
  // console.log(elem);
  // alert(elem.value);
  var target = document.getElementById('output');
  console.log(target.innerText);

  target.innerText = target.innerText + elem.value;
  console.log(target.innerText);
}
