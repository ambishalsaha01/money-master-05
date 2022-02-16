// **********get income balance**********
function getIncomeBalance(){
    const incomeField = document.getElementById('my-income');
    const incomeFieldValue = incomeField.value;
    const parseIncome = parseFloat(incomeFieldValue);
    return parseIncome;
}
// **********get cost field**********
function getTotalcost(costField){
    const costInputField = document.getElementById(costField);
    const costInputFieldValue = costInputField.value;
    const parseCostField = parseFloat(costInputFieldValue);
    return parseCostField;
}

// **********get expenses field**********
function getExpensexBalance(balancdeField, amount){
    const expensesBalance = document.getElementById(balancdeField);
    const expensesBalanceInner = expensesBalance.innerText;
    const parseExpensesBalance = parseFloat(expensesBalanceInner);
    expensesBalance.innerText = parseExpensesBalance + amount;
}

// **********handle calculate btn**********
document.getElementById('calculate-btn').addEventListener('click', function(){
    // get income
    const totalIncome = getIncomeBalance(); 
    // if(totalIncome > 0){
    //     console.log('thik ase')
    // }
    // else{
    //     console.log('thik nai')
    // }

    // get cost field
    const foodCost = getTotalcost('food-cost');
    const rentCost = getTotalcost('rent-cost');
    const clothCost = getTotalcost('cloth-cost');
    const totalCost = foodCost + rentCost + clothCost;

    // update expens balance
    getExpensexBalance('total-expenses', totalCost);

    // update total-balance
    const finalBalance = totalIncome - totalCost;
    getExpensexBalance('total-balance', finalBalance);
})