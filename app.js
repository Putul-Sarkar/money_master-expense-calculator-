
//EXPENSES//

function calculateExpenses() {

    const income = parseFloat(document.getElementById("income").value);
    const food = parseFloat(document.getElementById("food").value);
    const rent = parseFloat(document.getElementById("rent").value);
    const transport = parseFloat(document.getElementById("transport").value);




    if (isNaN(income) || isNaN(food) || isNaN(rent) || isNaN(transport)) {
        alert("Please enter valid numbers for income and expenses.");


    }
    if (income < 0 || food < 0 || rent < 0 || transport < 0) {
        alert('Please enter non-negative numbers.');

    }


    const totalExpenses = food + rent + transport;
    const balance = income - totalExpenses;

    document.getElementById("totalExpenses").textContent = totalExpenses;
    document.getElementById("balance").textContent = balance;
}

//SAVINGS//
function calculateSavings() {
    const income = parseFloat(document.getElementById("income").value);
    const food = parseFloat(document.getElementById("food").value);
    const rent = parseFloat(document.getElementById("rent").value);
    const transport = parseFloat(document.getElementById("transport").value);
    const savePercentage = parseFloat(document.getElementById("savePercentage").value);




    if (isNaN(income) || isNaN(food) || isNaN(rent) || isNaN(transport) || isNaN(savePercentage)) {
        alert("Please enter valid numbers for income, expenses, and savings percentage.");
        return;
    }



    const totalExpenses = food + rent + transport;
    const balance = income - totalExpenses;
    const savingAmount = (savePercentage / 100) * income;
    const remainingBalance = balance - savingAmount;

    if (savingAmount > balance) {
        alert("input amount is larger than your remaining balance");
    }



    document.getElementById("savingAmount").textContent = savingAmount;
    document.getElementById("remainingBalance").textContent = remainingBalance;
}