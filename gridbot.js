let lastNetProfitPerOrder = 0;
let lastInvest = 0;
let lastGrids = 0;
let lastOrderSize = 0;

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
  const netProfitPercent = profit - (feeBuy + feeSell);
  const netProfitPerOrder = orderSize * (netProfitPercent / 100);
  const totalProfit = netProfitPerOrder * grids;
  const roi = (totalProfit / invest) * 100;

  lastNetProfitPerOrder = netProfitPerOrder;
  lastInvest = invest;
  lastGrids = grids;
  lastOrderSize = orderSize;

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

  if (isNaN(fires) || fires <= 0 || !lastNetProfitPerOrder || !lastInvest) {
    roiContainer.innerText = "Введите количество срабатываний после расчета основной прибыли.";
    return;
  }

  // 💰 расчёт чистой прибыли в USDT
  const dailyProfitUSDT = lastNetProfitPerOrder * fires;
  const weeklyProfitUSDT = dailyProfitUSDT * 7;
  const monthlyProfitUSDT = dailyProfitUSDT * 30;

  // 📊 расчёт ROI по чистой прибыли
  const dailyROI = (dailyProfitUSDT / lastInvest) * 100;
  const weeklyROI = (weeklyProfitUSDT / lastInvest) * 100;
  const monthlyROI = (monthlyProfitUSDT / lastInvest) * 100;

  roiContainer.innerHTML = `
    📅 <strong>ROI за день:</strong> ${dailyROI.toFixed(2)}% (${dailyProfitUSDT.toFixed(2)} USDT)<br>
    📆 <strong>ROI за неделю:</strong> ${weeklyROI.toFixed(2)}% (${weeklyProfitUSDT.toFixed(2)} USDT)<br>
    🗓️ <strong>ROI за месяц:</strong> ${monthlyROI.toFixed(2)}% (${monthlyProfitUSDT.toFixed(2)} USDT)
  `;
}
