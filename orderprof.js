function profitcalcCalculate() {
  const P = parseFloat(document.getElementById("profitcalc-buy").value);
  const TP = parseFloat(document.getElementById("profitcalc-tp").value);
  const feeBuy = parseFloat(document.getElementById("profitcalc-buyfee").value);
  const feeSell = parseFloat(document.getElementById("profitcalc-sellfee").value);

  if (isNaN(P) || isNaN(TP) || isNaN(feeBuy) || isNaN(feeSell)) {
    document.getElementById("profitcalc-result").innerText = "Пожалуйста, введите корректные значения.";
    return;
  }

  const result = ((P * (1 + TP / 100)) * (1 + feeBuy / 100)) / (1 - feeSell / 100);
  document.getElementById("profitcalc-result").innerHTML = 
    `💰 Цена продажи: <strong>${result.toFixed(4)} USDT</strong>`;
}