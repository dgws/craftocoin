function tpcalc() {
  const q1 = parseFloat(document.getElementById("tpcalc-q1").value);
  const p1 = parseFloat(document.getElementById("tpcalc-p1").value);
  const p2 = parseFloat(document.getElementById("tpcalc-p2").value);
  const target = parseFloat(document.getElementById("tpcalc-target").value);
  const leverage = parseFloat(document.getElementById("tpcalc-leverage").value);

  if (isNaN(q1) || isNaN(p1) || isNaN(p2) || isNaN(target) || isNaN(leverage)) {
    document.getElementById("tpcalc-output").innerHTML = "⚠️ Пожалуйста, заполните все поля.";
    return;
  }

  // Расчёт количества докупки Q2
  const q2 = ((target * q1) - (q1 * p1)) / (p2 - target);

  if (q2 <= 0) {
    document.getElementById("tpcalc-output").innerHTML = "⚠️ Докупка невозможна: цена цели выше текущей или введены неверные данные.";
    return;
  }

  const sum = q2 * p2;
  const margin = sum / leverage;

  document.getElementById("tpcalc-output").innerHTML = `
    📉 Нужно докупить: <b>${q2.toFixed(4)} ETH</b><br>
    💰 Сумма покупки: <b>${sum.toFixed(2)} $</b><br>
    ⚙️ Требуемая реальная сумма в USDT: (x${leverage}): <b>${margin.toFixed(2)} $</b><br>
    🎯 Новый средний вход ≈ ${target.toFixed(2)} $
  `;
}