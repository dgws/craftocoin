
        function calculate() {
            let A = parseFloat(document.getElementById("num1").value) || 0;
            let B = parseFloat(document.getElementById("num2").value) || 0;
            let C = parseFloat(document.getElementById("num3").value) || 1;
            if (C === 0) {
                alert("Ошибка: Деление на ноль!");
                return;
            }
            let result = (A * B ) / C;
            document.getElementById("result").innerText = result.toFixed(2);
        }

        function clearFields() {
            document.getElementById("num1").value = "";
            document.getElementById("num2").value = "";
            document.getElementById("num3").value = "";
            document.getElementById("result").innerText = "0";
        }
   