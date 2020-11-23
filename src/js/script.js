'use strict';
let money = prompt("Ваш бюджет на месяц"),
    time = prompt("Введите дату в формате Год-Месяц-День", "2020-07-05"),
    first = prompt("Введите обязательную статью расхода"),
    second = prompt("Во сколько это обойдется");
let appData = {
    allMoney : money,
    timeData : time,
    expenses : first + second,
    optionalExpenses : undefined,
    income : [],
    savings : false
};
alert("Ваш бюджет на день :" + (appData.allMoney-second)/30);