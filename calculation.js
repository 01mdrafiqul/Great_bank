// deposit btn
const depositBtn = document.getElementById('btn-deposit').addEventListener('click', function(){
    // Deposit field
    const depositField = document.getElementById('deposit-field');
    const depositAmountString = depositField.value;
    const currentDepositAmount = parseFloat(depositAmountString);
    // Deposit element
    const depositElement = document.getElementById('deposit-amount');
    const depositElementString = depositElement.innerText;
    const previousDepositTotal = parseFloat(depositElementString);
    const currentDepositTotal = previousDepositTotal + currentDepositAmount; 
    depositElement.innerText = currentDepositTotal;
    // Balance element
    const balance = document.getElementById('Balance');
    const balanceAmountString = balance.innerText;
    const previousBalanceAmount = parseFloat(balanceAmountString);
    const currentBalanceTotal = previousBalanceAmount + currentDepositAmount;
    balance.innerText = currentBalanceTotal;
    // To make the deposit input field empty after taking input
    depositField.value = '';
})
// Withdrow btn 
const withdrowBtn = document.getElementById('withdrow-btn').addEventListener('click', function(){
    const withdrowField = document.getElementById('withdrow-field');
    const withdrowAmountString = withdrowField.value;
    const withdrowAmount = parseFloat(withdrowAmountString);
    // withdrow element
    const withdrowElement = document.getElementById('Withdrow');
    const previousWithdrowElementString = withdrowElement.innerText;
    const previousWithdrowElement = parseFloat(previousWithdrowElementString);
    const currentWithdrowAmount = previousWithdrowElement + withdrowAmount;
    withdrowElement.innerText = currentWithdrowAmount;
    // balance deduction
    const balance = document.getElementById('Balance');
    const balanceAmountString = balance.innerText;
    const previousBalanceAmount = parseFloat(balanceAmountString);
    const currentBalanceTotal = previousBalanceAmount - currentWithdrowAmount;
    balance.innerText = currentBalanceTotal;
    // To make the withdrow input field empty after taking input
    withdrowField.value = '';
})