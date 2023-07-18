"use strict";




const title = document.getElementsByTagName('h1')[0];
const btnPlus = document.querySelector('.screen-btn');
const otherItemsPercent = document.querySelectorAll('.other-items.percent');
const otherItemsNumber = document.querySelectorAll('.other-items.number');

const inputRange = document.querySelector('.rollback input');
const inputRangeValue = document.querySelector('.rollback .range-value');

const startBtn = document.getElementsByClassName('handler_btn')[0];
const resetBtn = document.getElementsByClassName('handler_btn')[1];

const total = document.getElementsByClassName('total-input')[0];
const totalCount = document.getElementsByClassName('total-input')[1];
const totalCountOther = document.getElementsByClassName('total-input')[2];
const fullTotalCount = document.getElementsByClassName('total-input')[3];
const totalCountRollback = document.getElementsByClassName('total-input')[4];
let screens = document.querySelectorAll('.screen');
startBtn.setAttribute("disabled", "");
startBtn.style.backgroundColor = '#e4bebe';

let screensSelect = document.querySelector('.main-controls__select>select')
let screensInput = document.querySelector('.main-controls__input>input')
let controlsScreen = document.querySelector('.main-controls__item')

controlsScreen.addEventListener('change', function () {
    if ((screensSelect.value !== "") && (+screensInput.value > 0)) {
        startBtn.style.backgroundColor = '#A52A2A';
        startBtn.removeAttribute('disabled');
    } else {
        startBtn.setAttribute("disabled", "");
        startBtn.style.backgroundColor = '#e4bebe';
    }
});

const appdata = {
    title: "",
    screens: [],
    screenPrice: 0,
    adaptive: true,
    rollback: 10,
    fullPrice: 0,
    servicePercentPrice: 0,
    servicePricesPercent: 0,
    servicePricesNumber: 0,
    servicesPercent: {},
    servicesNumber: {},
    screensCount: 0,
    checkedScreens: false,

    init: function () {
        appdata.addTitle();
        // appdata.checkScreens();
        startBtn.addEventListener('click', appdata.start);
        btnPlus.addEventListener('click', appdata.addScreenBlock);
        inputRange.addEventListener('change', appdata.changeRollback);

    },
    addTitle: function () {
        document.title = title.textContent;
    },
    start: function () {
        appdata.addScreens();
        appdata.addServices();
        appdata.addPrices();
        appdata.showResult();
        // appdata.logger();

    },
    changeRollback: function () {
        inputRangeValue.textContent = inputRange.value;
        appdata.rollback = inputRange.value;

    },
    showResult: function () {
        total.value = appdata.screenPrice;
        totalCount.value = appdata.screensCount;
        totalCountOther.value = appdata.servicePricesPercent + appdata.servicePricesNumber
        fullTotalCount.value = appdata.fullPrice;
        totalCountRollback.value = appdata.servicePercentPrice;
    },

    addScreens: function () {
        screens = document.querySelectorAll('.screen');
        screens.forEach(function (screen, index) {
            const select = screen.querySelector('select')
            const input = screen.querySelector('input')
            const selectName = select.options[select.selectedIndex].textContent
            appdata.screens.push({
                id: index,
                name: selectName,
                price: +select.value * +input.value,
                count: +input.value
            })

        })

    },
    addServices: function () {
        otherItemsPercent.forEach(function (item) {
            const check = item.querySelector('input[type=checkbox]')
            const label = item.querySelector('label')
            const input = item.querySelector('input[type=text]')
            if (check.checked) {
                appdata.servicesPercent[label.textContent] = +input.value;
            }
        })
        otherItemsNumber.forEach(function (item) {
            const check = item.querySelector('input[type=checkbox]')
            const label = item.querySelector('label')
            const input = item.querySelector('input[type=text]')
            if (check.checked) {
                appdata.servicesNumber[label.textContent] = +input.value;
            }
        })
    },

    addScreenBlock: function () {
        const cloneScreen = screens[0].cloneNode(true);
        screens[screens.length - 1].after(cloneScreen)


        startBtn.setAttribute("disabled", "");
        startBtn.style.backgroundColor = '#e4bebe';

        cloneScreen.addEventListener('change', function () {

            let screensSelect = cloneScreen.querySelectorAll('.screen .main-controls__select>select ')
            console.log(screensSelect[0].value)

            let screensInput = cloneScreen.querySelectorAll('.screen .main-controls__input>input')
            console.log(screensInput[0].value)

            if ((screensSelect[0].value !== "") && (+screensInput[0].value > 0)) {
                startBtn.style.backgroundColor = '#A52A2A';
                startBtn.removeAttribute('disabled');
            } else {
                startBtn.setAttribute("disabled", "");
                startBtn.style.backgroundColor = '#e4bebe';
            }


        })



    },

    addPrices: function () {
        appdata.screenPrice = appdata.screens.reduce(function (sum, current) {
            return sum + +current['price'];
        }, 0);

        appdata.screensCount = appdata.screens.reduce(function (sum, current) {
            return sum + +current['count'];
        }, 0);

        for (let key in appdata.servicesNumber) {
            appdata.servicePricesNumber += appdata.servicesNumber[key];
        }
        for (let key in appdata.servicesPercent) {
            appdata.servicePricesPercent += appdata.screenPrice * (appdata.servicesPercent[key] / 100);
        }
        appdata.fullPrice = +appdata.screenPrice + appdata.servicePricesPercent + appdata.servicePricesNumber;

        appdata.servicePercentPrice = (1 - appdata.rollback / 100) * appdata.fullPrice;
    },
    isString: function (str) {
        return (typeof str === 'string') && (!appdata.isNumber(str));
    },
    showTypeof: function (variable) {
        console.log(variable, typeof variable);
    },
    logger: function () {
        console.log(appdata.fullPrice);
        console.log(appdata.servicePercentPrice);
        console.log(appdata.screens);
    },
}

appdata.init();

