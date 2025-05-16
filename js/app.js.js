function checkCode(value) {
  if (value.length === 6) {
    document.querySelector("button").disabled = false;
  } else {
    document.querySelector("button").disabled = true;
  }
}

function submitCode() {
  window.location.href = "dashboard.html";
}

function sendCode() {
  alert("Code envoyé par email !");
  window.location.href = "index.html";
}

function sendTransaction() {
  alert("Transaction envoyée !");
}

function buyCard(amount) {
  const total = amount * 1.15;
  document.getElementById("totalPrice").innerText = `Total avec frais : ${total.toFixed(2)} €`;
}

function convertToEth() {
  const usdt = parseFloat(document.getElementById("usdtAmount").value);
  const ethRate = 0.0003; // Exemple : 1 USDT = 0.0003 ETH
  document.getElementById("ethAmount").value = (usdt * ethRate).toFixed(6);
}

function convertToUsdt() {
  const eth = parseFloat(document.getElementById("ethAmountReverse").value);
  const usdtRate = 3300; // Exemple : 1 ETH = 3300 USDT
  document.getElementById("usdtAmountReverse").value = (eth * usdtRate).toFixed(2);
}
