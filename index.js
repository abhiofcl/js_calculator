var oldValue = "";
var isClicked = false;

function btnClick(val) {
  //   normal(val);
  modified(val);
}

function normal(val) {
  document.getElementById("screen").value += val;
}

function modified(val) {
  var operand = document.getElementById("screen").value;
  oldValue += val;
  if (val == "+" || val == "-" || val == "*" || val == "/") {
    document.getElementById("screen").value = "";
    isClicked = true;
    return;
  }
  if (isClicked) {
    document.getElementById("screen").value = val;
    isClicked = false;
  } else {
    document.getElementById("screen").value += val;
  }
}
function clearScreen() {
  document.getElementById("screen").value = "";
  oldValue = "";
  isClicked = false;
}

function equalClick() {
  var expression = document.getElementById("screen").value;
  try {
    var result = eval(oldValue);
    document.getElementById("screen").value = result;
  } catch {
    document.getElementById("screen").value = "Invalid operation";
  }
  console.log(result);
}
