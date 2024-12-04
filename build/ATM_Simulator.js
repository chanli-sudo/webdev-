let money = 5000;
let result = document.getElementById("result");
let exit = document.getElementById("exit");
var txt;

function myFunction(sel) {
  switch (Number(sel)) {
    case 1:
      txt = prompt("Enter any ammount to withdraw: ");
      money -= Number(txt);

      if (isNaN(txt)) {
        alert("letter is not allowed!");
        return;
      }
      result.textContent = `₱ ${Number(money)}`;
      break;
    case 2:
      txt = prompt("Enter any ammount to deposit: ");
      money += Number(txt);
      if (isNaN(txt)) {
        alert("letter is not allowed!");
        return;
      }
      result.textContent = (`₱ ${Number(money)}`);
      break;
    case 3:
      txt = alert(`Your Balance is : $${Number(money)}`);
  }
  while (sel == 4) {
    alert("Goodbye! and thank you");
    location.reload(true);
    break;
  }
}
