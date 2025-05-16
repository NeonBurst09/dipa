function calculateTip() {
  const bill = parseFloat(document.getElementById("bill").value);
  const tipPercent = parseFloat(document.getElementById("tipPercent").value);
  if (isNaN(bill) || isNaN(tipPercent)) {
    document.getElementById("result").innerText = "Please enter valid numbers.";
    return;
  }
  const tip = bill * (tipPercent / 100);
  const total = bill + tip;
  document.getElementById("result").innerText = `Tip: NPR ${tip.toFixed(2)}, Total: NPR ${total.toFixed(2)}`;
}
