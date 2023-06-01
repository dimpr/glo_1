const title = "строка с названием проекта";
const screens = "Простые, Сложные, Интерактивные";
const screenPrice = 5;
const rollback = 99;
const fullPrice = 200;
const adaptive = true;

console.log(typeof (title));
console.log(typeof (fullPrice));
console.log(typeof (adaptive));
console.log(screens.length);
console.log("Стоимость верстки экранов " + screenPrice + " долларов");
console.log("Стоимость разработки сайта " + fullPrice + " долларов");
console.log(screens.toLowerCase().split(""));
console.log(fullPrice * (rollback / 100));

console.log("любое сообщение");
console.log(16 ** 0.5); //оказывается так тоже можно