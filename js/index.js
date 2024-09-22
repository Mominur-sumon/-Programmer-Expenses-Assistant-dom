
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
    balance.innerText = (income - totalExpense).toFixed(2);

    const result = document.getElementById("results");
    result.classList.remove("hidden");
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