let balance =  5000;
let transactionHistory = [];
 
function balanceUpdate () {
    document.getElementById("balance").textContent = `${balance}`;
}

    function withdraw(){
        let amount = prompt("Amount to withdraw");
        amount = parseFloat(amount);
    
        if (isNaN(amount) || amount<= 0 ){
          alert ( "Please enter valid amount.");
          return 0;
        } 

        if ( amount >= 5000){
            alert (" You have insufficient balance.")
            return 0;
        }

       balance -= amount
       alert (`You have withdrawn ₱${amount}. Your new balance is ₱${balance}. `);
       balanceUpdate();
    }