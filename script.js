"use strict";

const appdata = {
    title: "",
    screens: "",
    screenPrice: 0,
    adaptive: true,
    rollback: 60,
    fullPrice: 0,
    servicePercentPrice: 0,
    allServicePrices: 0,
    service1: "",
    service2: "",
    asking: function () {
        appdata.title = prompt("Как называется ваш проект?", "Калькулятор верстки");
        appdata.screens = prompt('Какие типы экранов нужно разработать ?', "Простые, сложные");

        do {
            appdata.screenPrice = prompt("Сколько будет стоить данная работа?");
        } while (!isNumber(appdata.screenPrice));

        appdata.adaptive = confirm("Нужен ли адаптив на сайте ?");
    },
    start: function () {
        appdata.asking();
        appdata.title = getTitle();
        appdata.fullPrice = getFullPrice();
        appdata.allServicePrices = getAllServicePrices();
        appdata.servicePercentPrice = getServicePercentPrices();
        appdata.logger();

    },
    logger: function () {
        for (let key in appdata) {
            console.log(key);
        }
    }

}



const isNumber = function (num) {

    return !isNaN(parseFloat(num) && isFinite(num));

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
            appdata.service1 = prompt("Какие дополнительные услуги надо разработать?");
        } else if (i === 1) {
            appdata.service2 = prompt("Какие дополнительные услуги надо разработать?");
        }

        do {
            addsum = prompt("Сколько это будет стоить?");
        } while (!isNumber(addsum));

        sum += +addsum;

    }

    return sum;
}

const getFullPrice = function () {

    return appdata.screenPrice + appdata.allServicePrices;

}

const getTitle = function () {

    appdata.title = appdata.title.trim();
    return appdata.title[0].toUpperCase() + appdata.title.toLowerCase().slice(1);

}

const getServicePercentPrices = function () {

    return (1 - appdata.rollback / 100) * appdata.fullPrice;

}


appdata.start();

///


console.log("Стоимость верстки экранов " + appdata.screenPrice + " долларов");
console.log("Стоимость разработки сайта " + appdata.fullPrice + " долларов");





//

// console.log("проверка результатов работы функций:");
// console.log("AllServicePrices", allServicePrices);
// console.log(getFullPrice());
// console.log(getTitle());
// console.log(getRollbackMessage(fullPrice));
// console.log(getServicePercentPrices());

// console.log("проверка типов переменных:");

// showTypeof(title);
// showTypeof(fullPrice);
// showTypeof(adaptive);
// showTypeof(screenPrice);