
// getting all the value from the input fields






const calculateBtn = document.getElementById("calculate");
calculateBtn.addEventListener("click", function () {

    const income = Number(document.getElementById("income").value);
    const software = Number(document.getElementById("software").value);
    const courses = Number(document.getElementById("courses").value);
    const internet = Number(document.getElementById("internet").value);

    const totalExpense = software + courses + internet;

    const totalExpenseElement = document.getElementById("total-expenses");
    totalExpenseElement.innerText = totalExpense.toFixed(2);

    const balance = document.getElementById("balance");
    const newBalance = income - totalExpense;
    balance.innerText = newBalance.toFixed(2);

    const result = document.getElementById("results");
    result.classList.remove("hidden");


    const historyItem = document.createElement("div");
    historyItem.classList.add( "border-b", "rounded-md", "border-gray-300", "py-2");
    historyItem.innerHTML = `
    <p class="text-lg font-semibold">${new Date().toLocaleDateString()}</p>
    <p class="text-lg font-semibold">Income:  ${income}</p>
    <p class="text-lg font-semibold">Expense:  ${totalExpense}</p>
    <p class="text-lg font-semibold"> Balance:  ${newBalance}</p>
    `
    const historyList = document.getElementById("history-list");
    historyList.insertBefore(historyItem, historyList.firstChild);
});

const calculateSavingsBtnEl = document.getElementById("calculate-savings");
calculateSavingsBtnEl.addEventListener("click", function () {

    const income = Number(document.getElementById("income").value);
    const software = Number(document.getElementById("software").value);
    const courses = Number(document.getElementById("courses").value);
    const internet = Number(document.getElementById("internet").value);

    const savingspercentange = Number(document.getElementById("savings").value);
    const totalExpense = software + courses + internet;
    const balance = income - totalExpense;
    const savings = (balance * savingspercentange) / 100;
    const savingsElement = document.getElementById("savings-amount");
    savingsElement.innerText = savings.toFixed(2);

    const remainigBalance = document.getElementById("remaining-balance");
    remainigBalance.innerText = (balance - savings).toFixed(2);

});


// history tab functionality

const historyTabBtn = document.getElementById("history-tab");
const assistantTabBtn = document.getElementById("assistant-tab");
historyTabBtn.addEventListener("click", function () {
    historyTabBtn.classList.add("text-white", "font-semibold", "bg-gradient-to-r", "from-blue-500", "to-purple-600");

    assistantTabBtn.classList.remove("text-white", "font-semibold", "bg-gradient-to-r", "from-blue-500", "to-purple-600");

    document.getElementById("expense-form").classList.add("hidden");
    document.getElementById("history-section").classList.remove("hidden");

});

assistantTabBtn.addEventListener("click", function () {
    assistantTabBtn.classList.add("text-white", "font-semibold", "bg-gradient-to-r", "from-blue-500", "to-purple-600");

    historyTabBtn.classList.remove("text-white", "font-semibold", "bg-gradient-to-r", "from-blue-500", "to-purple-600");

});