 const a1 = document.getElementById("a1");
    const b1 = document.getElementById("b1");
    const c1 = document.getElementById("c1");

    function calculate() {
      const a = parseFloat(a1.value);
      const b = parseFloat(b1.value);
      if (!isNaN(a) && !isNaN(b) && a !== 0) {
        const result = b / a;
        c1.textContent = result.toFixed(2);
      } else {
        c1.textContent = "—";
      }
    }

    a1.addEventListener("input", calculate);
    b1.addEventListener("input", calculate);