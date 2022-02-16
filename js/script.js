// get income balance
function getIncomeBalance(){
    const incomeField = document.getElementById('my-income');
    const incomeFieldValue = incomeField.value;
    const parseIncome = parseFloat(incomeFieldValue);
    // clear income balance
    // incomeField.value = '';
    return parseIncome;
}
// get cost field
function getTotalcost(costField){
    const costInputField = document.getElementById(costField);
    const costInputFieldValue = costInputField.value;
    const parseCostField = parseFloat(costInputFieldValue);
    // costInputField.value = '';
    // return costInputField.value = parseCostField;  
    return parseCostField;
}

function getExpensexBalance(amount){
    const expensesBalance = document.getElementById(amount);
    const expensesBalanceInner = expensesBalance.innerText;
    const parseexpensesBalance = parseFloat(expensesBalanceInner);
    return parseexpensesBalance;
}

// handle calculate btn
document.getElementById('calculate-btn').addEventListener('click', function(){
    // get income
    const totalIncome = getIncomeBalance(); 
    if(totalIncome > 0){
        console.log('thik ase')
    }
    else{
        console.log('thik nai')
    }
    // get cost field
    const foodCost = getTotalcost('food-cost');
    const rentCost = getTotalcost('rent-cost');
    const Cost = getTotalcost('cloth-cost');
})