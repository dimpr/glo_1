//

const title = prompt("Как называется ваш проект?");
const screens = prompt('Какие типы экранов нужно разработать ?');
const screenPrice = +prompt("Сколько будет стоить данная работа?");
const adaptive = confirm("Нужен ли адаптив на сайте ?");
const rollback = 60;
const service1 = prompt("Какие типы экранов нужно разработать ?");
const servicePrice1 = +prompt("Сколько это будет стоить?");
const service2 = prompt("Какой дополнительный тип услуги нужен ?");
const servicePrice2 = +prompt("Сколько это будет стоить?");
const fullPrice = (screenPrice + servicePrice1 + servicePrice2);
const servicePercentPrice = (1 - rollback / 100) * fullPrice;

//

if (fullPrice > 30000) {
    console.log("Даем скидку в 10%");
} else if ((fullPrice <= 30000) && (fullPrice >= 15000)) {
    console.log("Даем скидку в 5%");
} else if ((fullPrice <= 15000) && (fullPrice >= 0)) {
    console.log("скидка не предусмотренна");
} else if (fullPrice < 0) {
    console.log("Что то пошло не так");
}



//

console.log(typeof (title));
console.log(typeof (fullPrice));
console.log(typeof (adaptive));
console.log(screens.length);
console.log("Стоимость верстки экранов " + screenPrice + " долларов");
console.log("Стоимость разработки сайта " + fullPrice + " долларов");
console.log(screens.toLowerCase().split(""));
console.log(servicePercentPrice);

//

