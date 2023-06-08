//

let title = prompt("Как называется ваш проект?");
const screens = prompt('Какие типы экранов нужно разработать ?');
const screenPrice = +prompt("Сколько будет стоить данная работа?");
const adaptive = confirm("Нужен ли адаптив на сайте ?");
const rollback = 60;
const service1 = prompt("Какие типы экранов нужно разработать ?");
const servicePrice1 = +prompt("Сколько это будет стоить?");
const service2 = prompt("Какой дополнительный тип услуги нужен ?");
const servicePrice2 = +prompt("Сколько это будет стоить?");
let fullPrice = 0;
let servicePercentPrice = 0;
let allServicePrices = 0;
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

    return allServicePrices = servicePrice1 + servicePrice2;

}

const getFullPrice = function () {

    return fullPrice = screenPrice + allServicePrices;

}

const getTitle = function () {
    title = title.trim();
    return title = title[0].toUpperCase() + title.toLowerCase().slice(1);

}

const getServicePercentPrices = function () {

    return servicePercentPrice = (1 - rollback / 100) * fullPrice;

}

//
console.log("проверка результатов работы функций:");

console.log(getAllServicePrices());
console.log(getFullPrice());
console.log(getTitle());
console.log(getRollbackMessage(fullPrice));
console.log(getServicePercentPrices());

console.log("проверка типов переменных:");

showTypeof(title);
showTypeof(fullPrice);
showTypeof(adaptive);
console.log("Стоимость верстки экранов " + screenPrice + " долларов");
console.log("Стоимость разработки сайта " + fullPrice + " долларов");





