function btnClick(val) {
  document.getElementById("screen").value += val;
}

function clearScreen() {
  document.getElementById("screen").value = "";
}
function equalClick() {
  var expression = document.getElementById("screen").value;
  var result = eval(expression);
  console.log(result);
  document.getElementById("screen").value = result;
}
