"use strict";

let title;
let screens;
let screenPrice;
let adaptive;
let rollback = 60;
let fullPrice;
let servicePercentPrice;
let allServicePrices;

let service1;
let service2;

const isNumber = function (num) {

    return !isNaN(parseFloat(num) && isFinite(num));

}

const asking = function () {
    title = prompt("Как называется ваш проект?", "Калькулятор верстки");
    screens = prompt('Какие типы экранов нужно разработать ?', "Простые, сложные");

    do {
        screenPrice = prompt("Сколько будет стоить данная работа?");
    } while (!isNumber(screenPrice) && confirm("Хотите еще услугу"));

    adaptive = confirm("Нужен ли адаптив на сайте ?");
}
//

const showTypeof = function (variable) {

    console.log(variable, typeof variable);

}

const getRollbackMessage = function (price) {

    if (price > 30000) {
        return "Даем скидку в 10%";
    } else if ((price <= 30000) && (price >= 15000)) {
        return "Даем скидку в 5%";
    } else if ((price <= 15000) && (price >= 0)) {
        return "Скидка не предусмотренна";
    } else {
        return "Что то пошло не так";
    }

}

const getAllServicePrices = function () {
    let sum = 0;
    let addsum;
    for (let i = 0; i < 2; i++) {

        if (i === 0) {
            service1 = prompt("Какие типы экранов нужно разработать ?");
        } else if (i === 1) {
            service2 = prompt("Какие типы экранов нужно разработать ?");
        }

        do {
            addsum = prompt("Сколько это будет стоить?");
        } while (!isNumber(addsum));

        sum += addsum;

    }

    return sum;
}

const getFullPrice = function () {

    return screenPrice + allServicePrices;

}

const getTitle = function () {

    title = title.trim();
    return title[0].toUpperCase() + title.toLowerCase().slice(1);

}

const getServicePercentPrices = function () {

    return (1 - rollback / 100) * fullPrice;

}


asking();
title = getTitle();
fullPrice = getFullPrice();
allServicePrices = getAllServicePrices();
servicePercentPrice = getServicePercentPrices();

//

console.log("проверка результатов работы функций:");

console.log("AllServicePrices", allServicePrices);
console.log(getFullPrice());
console.log(getTitle());
console.log(getRollbackMessage(fullPrice));
console.log(getServicePercentPrices());

console.log("проверка типов переменных:");

showTypeof(title);
showTypeof(fullPrice);
showTypeof(adaptive);
showTypeof(screenPrice);

console.log("Стоимость верстки экранов " + screenPrice + " долларов");
console.log("Стоимость разработки сайта " + fullPrice + " долларов");





