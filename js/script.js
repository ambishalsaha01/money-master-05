// //////////Get Income Balance\\\\\\\\\\
function getIncomeBalance(incomeAmount){
    const incomeField = document.getElementById(incomeAmount);
    const incomeFieldValue = incomeField.value;
    const parseIncome = parseFloat(incomeFieldValue);
    return parseIncome;
}

// //////////Get Cost Field\\\\\\\\\\
function getTotalcost(costField){
    const costInputField = document.getElementById(costField);
    const costInputFieldValue = costInputField.value;
    const parseCostField = parseFloat(costInputFieldValue);
    return parseCostField;
}

// //////////Get Expenses & Balance Field\\\\\\\\\\
function getExpensexBalance(balancdeField, amount){
    const expensesBalance = document.getElementById(balancdeField);
    const expensesBalanceInner = expensesBalance.innerText;
    const parseExpensesBalance = parseFloat(expensesBalanceInner);
    expensesBalance.innerText = parseExpensesBalance + amount;
}

// //////////Handle Calculate btn\\\\\\\\\\
document.getElementById('calculate-btn').addEventListener('click', function(){
    // Update Income Field
    const totalIncome = getIncomeBalance('my-income'); 
    if(totalIncome > 0){
        document.getElementById('income-error').style.display = 'none'
    }
    else {
        document.getElementById('income-error').style.display = 'block';
    }

    // Update Cost Field
    const foodCost = getTotalcost('food-cost');
    const rentCost = getTotalcost('rent-cost');
    const clothCost = getTotalcost('cloth-cost');
    const totalCost = foodCost + rentCost + clothCost;

    // Update Expenses & Balance Field
    if(totalIncome > totalCost){
        getExpensexBalance('total-expenses', totalCost);
        document.getElementById('expenses-error').style.display = 'none';
    }
    else {
        document.getElementById('expenses-error').style.display = 'block';
    }

    // Update Total Balance Field
    const finalBalance = totalIncome - totalCost;
    getExpensexBalance('total-balance', finalBalance);
});