//   Second code rentable
function calculaterent() {
  var input1 = parseFloat(document.getElementById("input1").value);
  var input2 = parseFloat(document.getElementById("input2").value);
  var input3 = parseFloat(document.getElementById("input3").value);
  var input4 = parseFloat(document.getElementById("input4").value);
  var input5 = parseFloat(document.getElementById("input5").value);
  var input6 = parseFloat(document.getElementById("input6").value);
  var input7 = parseFloat(document.getElementById("input7").value);
  var input8 = parseFloat(document.getElementById("input8").value);


  var result1 = (input2 / input3) - ((input2 / input3) * (input7 / 100));
  document.getElementById("input1").value = result1.toFixed(2);

  var result2 = (result1 * input4) - ((result1 * input4) * (input8 / 100));
  document.getElementById("input5").value = result2.toFixed(4);

  var result3 = result2 - input2;
  document.getElementById("input6").value = result3.toFixed(4);

  var indicator = document.getElementById("indicator");
  if (result2 > input2) {
    indicator.textContent = "win";
    indicator.classList.remove("text-center", "bg-danger");
    indicator.classList.add("bg-success");
  } else {
    indicator.textContent = "loss";
    indicator.classList.remove("text-center", "bg-success");
    indicator.classList.add("bg-danger");
  }
  
  indicator.classList.add("text-center");
  

}