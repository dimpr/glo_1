"use strict";

const appdata = {
    title: "",
    screens: [],
    screenPrice: 0,
    adaptive: true,
    rollback: 10,
    fullPrice: 0,
    servicePercentPrice: 0,
    allServicePrices: 0,
    services: {},
    asking: function () {
        appdata.title = prompt("Как называется ваш проект?", "Калькулятор верстки");

        for (let i = 0; i < 2; i++) {
            let name;

            do {
                name = prompt('Какие типы экранов нужно разработать?');
            } while (!appdata.isString(name));

            let price = 0;

            do {
                price = prompt("Сколько будет стоить данная работа?");
            } while (!appdata.isNumber(price));

            appdata.screens.push({ id: i, name: name, price: price });
        }

        for (let i = 0; i < 2; i++) {
            let name = prompt("Какой дополнительный тип услуги нужен?");
            let price = 0;

            do {
                price = prompt("Сколько это будет стоить?");
            } while (!appdata.isNumber(price));

            appdata.services[name] = +price;
        }

        appdata.adaptive = confirm("Нужен ли адаптив на сайте ?");
    },

    addPrices: function () {

        appdata.screenPrice = appdata.screens.reduce(function (sum, current) {
            return sum + +current['price'];
        }, 0);

        for (let key in appdata.services) {
            appdata.allServicePrices += appdata.services[key];
        }
    },

    start: function () {
        appdata.asking();
        appdata.addPrices();
        appdata.getFullPrice();
        appdata.getServicePercentPrices();
        appdata.getTitle();

        appdata.logger();
    },
    logger: function () {
        console.log(appdata.fullPrice);
        console.log(appdata.servicePercentPrice);
        console.log(appdata.screens);
    },

    isNumber: function (num) {
        return !isNaN(parseFloat(num) && isFinite(num));
    },

    isString: function (str) {

        return (typeof str === 'string') && (!appdata.isNumber(str));
        // &&(!Number.isFinite(str)))
    },

    showTypeof: function (variable) {
        console.log(variable, typeof variable);
    },

    getRollbackMessage: function (price) {

        if (price > 30000) {
            return "Даем скидку в 10%";
        } else if ((price <= 30000) && (price >= 15000)) {
            return "Даем скидку в 5%";
        } else if ((price <= 15000) && (price >= 0)) {
            return "Скидка не предусмотренна";
        } else {
            return "Что то пошло не так";
        }
    },
    getFullPrice: function () {
        appdata.fullPrice = +appdata.screenPrice + appdata.allServicePrices;
    },
    getTitle: function () {
        appdata.title = appdata.title.trim();
        appdata.title = appdata.title[0].toUpperCase() + appdata.title.toLowerCase().slice(1);
    },
    getServicePercentPrices: function () {
        appdata.servicePercentPrice = (1 - appdata.rollback / 100) * appdata.fullPrice;
    }
}

appdata.start();

console.log("Стоимость верстки экранов " + appdata.screenPrice + " долларов");
console.log("Стоимость разработки сайта " + appdata.fullPrice + " долларов");

