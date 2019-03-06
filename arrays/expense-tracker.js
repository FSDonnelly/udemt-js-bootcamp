const account = {
    name: 'Frank Donnelly',
    expenses: [],
    income: [],
    addExpense: function (description, amount) {
        this.expenses.push({
            description: description,
            amount: amount
        })
    },
    addIncome: function (desctiption, amount) {
        this.income.push({
            description: desctiption,
            amount: amount
        })
    },
    getAccountSummary: function () {
        let totalExpenses = 0
        let totalIncome = 0
        let accountBalance = 0

        this.expenses.forEach(function (expense) {
            totalExpenses = totalExpenses + expense.amount
        })
        this.income.forEach(function (income) {
            totalIncome = totalIncome + income.amount
        })

        accountBalance = totalIncome - totalExpenses

        return `${this.name} has $${totalExpenses} in expenses, $${totalIncome} in income, and $${accountBalance} is the account balance.`
    }
}

account.addExpense('rent', 950)
account.addExpense('coffee', 2)
account.addIncome('job', 1000)
console.log(account.getAccountSummary())