'use srict';
let budget = prompt('Ваш бюджет на месяц', '');
let date = prompt('Введите дату в формате YYYY-MM-DD');
let appData = {
    budg: budget,
    time: date,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false
};

let q1 = prompt('Введите обязательную татью расходов в этом месяце', '');
    q2 = prompt('Во сколько вам обойдется  ', '');
    q3 = prompt('Введите обязательную татью расходов в этом месяце', '');
    q4 = prompt('Во сколько вам обойдется  ', '');

appData.expenses.q1 = q2;
appData.expenses.q3 = q4;

alert(appData.budg / 30);