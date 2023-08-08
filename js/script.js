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

controlsScreen.addEventListener('change', () => {
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
    rollback: 0,
    fullPrice: 0,
    servicePercentPrice: 0,
    servicePricesPercent: 0,
    servicePricesNumber: 0,
    servicesPercent: {},
    servicesNumber: {},
    screensCount: 0,
    checkedScreens: false,

    init() {
        this.addTitle();

        startBtn.addEventListener('click', this.start.bind(appdata));
        resetBtn.addEventListener('click', this.reset.bind(appdata));

        btnPlus.addEventListener('click', this.addScreenBlock.bind(appdata));
        inputRange.addEventListener('change', this.changeRollback.bind(appdata));
    },
    addTitle() {
        document.title = title.textContent;
    },
    start() {

        this.addScreens();
        this.addServices();
        this.addPrices();
        this.showResult();
        startBtn.style.display = 'none';
        resetBtn.style.display = '';

        // let control = [];
        let control = document.querySelectorAll('.main-controls__item select, .main-controls__item input[type=text]');
        control.forEach((cont) => {
            cont.disabled = 'true';
        })


    },
    reset() {
        let checkbox = document.querySelectorAll('.main-controls__views input[type=checkbox]');
        checkbox.forEach((item) => {
            if (item.checked) {
                item.checked = "";
            }
        })

        let input = document.querySelectorAll('.total-input');
        input.forEach((item) => {
            item.value = 0;
        })

        let screenAll = document.querySelectorAll('.screen');
        screenAll.forEach((item, index) => {
            if (index == 0) {

                let control = item.querySelectorAll('.main-controls__item select, .main-controls__item input[type=text]');
                control.forEach((cont) => {
                    cont.disabled = '';
                })
                item.getElementsByTagName('option')[0].selected = 'selected';
                item.getElementsByTagName('input')[0].value = 0;

            } else {
                item.remove();
            }
        })
        this.screens = [];
        this.screenPrice = 0;
        this.rollback = 0;
        this.fullPrice = 0;
        this.servicePercentPrice = 0;
        this.servicePricesPercent = 0;
        this.servicePricesNumber = 0;
        this.screensCount = 0;

        screenAll = [];
        inputRange.value = 0;
        inputRangeValue.textContent = 0;

        startBtn.style.display = '';
        resetBtn.style.display = 'none';

        console.log('после reset', this.screensCount);
    },
    changeRollback() {
        inputRangeValue.textContent = inputRange.value;
        this.rollback = inputRange.value;

    },
    showResult() {
        total.value = this.screenPrice;
        totalCount.value = this.screensCount;
        totalCountOther.value = this.servicePricesPercent + this.servicePricesNumber
        fullTotalCount.value = this.fullPrice;
        totalCountRollback.value = this.servicePercentPrice;
    },
    addScreens() {

        screens = document.querySelectorAll('.screen');
        screens.forEach((screen, index) => {
            const select = screen.querySelector('select')
            const input = screen.querySelector('input')
            const selectName = select.options[select.selectedIndex].textContent
            this.screens.push({
                id: index,
                name: selectName,
                price: +select.value * +input.value,
                count: +input.value
            })
        })

    },
    addServices() {
        otherItemsPercent.forEach((item) => {
            const check = item.querySelector('input[type=checkbox]')
            const label = item.querySelector('label')
            const input = item.querySelector('input[type=text]')
            if (check.checked) {
                this.servicesPercent[label.textContent] = +input.value;
            }
        })
        otherItemsNumber.forEach((item) => {
            const check = item.querySelector('input[type=checkbox]')
            const label = item.querySelector('label')
            const input = item.querySelector('input[type=text]')
            if (check.checked) {
                this.servicesNumber[label.textContent] = +input.value;
            }
        })
    },

    addScreenBlock() {
        screens = document.querySelectorAll('.screen');

        const cloneScreen = screens[0].cloneNode(true);
        screens[screens.length - 1].after(cloneScreen);

        startBtn.setAttribute("disabled", "");

        //обнулили в клоне значения, 
        // cloneScreen.querySelectorAll('.screen input[type=text]')[screens.length - 1].value = '0';


        startBtn.style.backgroundColor = '#e4bebe';

        cloneScreen.addEventListener('change', () => {
            let screensSelect = cloneScreen.querySelectorAll('.screen .main-controls__select>select ')
            let screensInput = cloneScreen.querySelectorAll('.screen .main-controls__input>input')

            if ((screensSelect[0].value !== "") && (+screensInput[0].value > 0)) {
                startBtn.style.backgroundColor = '#A52A2A';
                startBtn.removeAttribute('disabled');
            } else {
                startBtn.setAttribute("disabled", "");
                startBtn.style.backgroundColor = '#e4bebe';
            }
        })


    },

    addPrices() {

        console.log('screensCount до', this.screensCount);
        console.log('screens до', this.screens);

        this.screenPrice = this.screens.reduce((sum, current) => {


            return sum + +current['price'];
            console.log('внутри sum screenPrice:', sum);
        }, 0);

        this.screensCount = this.screens.reduce((sum, current) => {

            return sum + +current['count'];
            console.log('внутри sum screensCount:', sum);
        }, 0);


        for (let key in this.servicesNumber) {
            this.servicePricesNumber += this.servicesNumber[key];
        }
        for (let key in this.servicesPercent) {
            this.servicePricesPercent += this.screenPrice * (this.servicesPercent[key] / 100);
        }
        this.fullPrice = +this.screenPrice + this.servicePricesPercent + this.servicePricesNumber;
        this.servicePercentPrice = (1 - this.rollback / 100) * this.fullPrice;
    },

    // isString(str) {
    //     return (typeof str === 'string') && (!appdata.isNumber(str));
    // },
    // showTypeof: (variable) => {
    //     console.log(variable, typeof variable);
    // },
    // logger() {
    //     console.log(appdata.fullPrice);
    //     console.log(appdata.servicePercentPrice);
    //     console.log(appdata.screens);
    // },
}

appdata.init();

