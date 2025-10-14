let lastROI = 0;
let lastInvest = 0;

function gridcalcCalculate() {
  const invest = parseFloat(document.getElementById("gridcalc-invest").value);
  const grids = parseFloat(document.getElementById("gridcalc-grids").value);
  const profit = parseFloat(document.getElementById("gridcalc-profit").value);
  const feeBuy = parseFloat(document.getElementById("gridcalc-buyfee").value);
  const feeSell = parseFloat(document.getElementById("gridcalc-sellfee").value);

  if (isNaN(invest) || isNaN(grids) || isNaN(profit) || isNaN(feeBuy) || isNaN(feeSell) || grids <= 0) {
    document.getElementById("gridcalc-result").innerText = "Пожалуйста, введите корректные значения.";
    return;
  }

  const orderSize = invest / grids;
//   const netProfitPercent = profit - (feeBuy + feeSell) / 2;
  const netProfitPerOrder = orderSize * (profit / 100);
  const totalProfit = netProfitPerOrder * grids;
  const roi = (totalProfit / grids) * 100;
  lastROI = roi;
  lastInvest = invest;

  document.getElementById("gridcalc-result").innerHTML = `
    💰 <strong>Размер одного ордера:</strong> ${orderSize.toFixed(4)} USDT<br>
    📈 <strong>Чистая прибыль с ордера:</strong> ${netProfitPerOrder.toFixed(4)} USDT<br>
    💹 <strong>Итоговая прибыль всей сетки:</strong> ${totalProfit.toFixed(4)} USDT<br>
    📊 <strong>ROI всей сетки:</strong> ${roi.toFixed(2)}%
  `;

  gridcalcRecalcROI();
}

function gridcalcRecalcROI() {
  const fires = parseFloat(document.getElementById("gridcalc-fires").value);
  const roiContainer = document.getElementById("gridcalc-roiresult");

  if (!lastROI || isNaN(fires) || fires <= 0) {
    roiContainer.innerText = "Введите количество срабатываний после расчета основной прибыли.";
    return;
  }

  const dailyROI = lastROI * fires;
  const weeklyROI = dailyROI * 7;
  const monthlyROI = dailyROI * 30;

  // 💰 расчёт прибыли в USDT
  const dailyProfitUSDT = lastInvest * (dailyROI / 100);
  const weeklyProfitUSDT = lastInvest * (weeklyROI / 100);
  const monthlyProfitUSDT = lastInvest * (monthlyROI / 100);

  roiContainer.innerHTML = `
    📅 <strong>ROI за день:</strong> ${dailyROI.toFixed(2)}% (${dailyProfitUSDT.toFixed(2)} USDT)<br>
    📆 <strong>ROI за неделю:</strong> ${weeklyROI.toFixed(2)}% (${weeklyProfitUSDT.toFixed(2)} USDT)<br>
    🗓️ <strong>ROI за месяц:</strong> ${monthlyROI.toFixed(2)}% (${monthlyProfitUSDT.toFixed(2)} USDT)
  `;
}