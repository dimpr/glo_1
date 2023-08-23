'use strict'

class Person {
    constructor(name, age) {
        this.name = name
        this.age = age
    }

    sayHello() {
        console.log(`Hello my name is ${this.name}`);
    }
}

class FrontEndDev extends Person {
    constructor(name, age, skills = []) {
        super(name, age)
        this._skills = skills;
    }
    get skills() {
        return this._skills
    }
    set skills(str) {
        this._skills.push(str);
    }
}

const dev = new FrontEndDev('Vlad', 23)

dev.skills = '1 sv'
dev.skills = '2 sv'
dev.skills = '3 sv'

console.log(dev);


////////////// деструктуризация прямо при передаче обьекта в функцию

const logger = ({ first, second, third }) => {
    console.log(first);
    console.log(second);
    console.log(third);
}

logger({ first: 'I', third: 'JavaScript', second: 'love' })

// rest и spread

const sum = (a, b, c, ...params) => {
    console.log(params)
}
sum(1, 2, 3, 4, 5, 6, 'args', false)

// ответом будет массив [4,5,6,'args',false]
console.log('rest и spread');

const sum1 = (...params) => {
    return params.reduce((sum, num) => sum + num)
}

console.log(sum1(1, 2, 3, 4, 5, 6))

// spread

const first = [1, 2, 3, 4];
const second = [5, 6, 7, 8];

console.log(23232, ...first, 121312, ...second);



///////////

// Напишите расширения метода прототипа:
// 1) Два класса, First и Second, Second наследует от First.

// 2) В First есть метод hello - он печатает в консоль "Привет я метод родителя!".

// 3) Нужно написать в Second метод hello, чтоб он сначала вызывал метод hello из First, а потом сразу печатал в консоль "А я наследуемый метод!"

// Проверить, чтобы все работало без ошибок в консоли
// Запушить задание в репозиторий на github или реализовать на доске CodePen и прикрепить ссылку


console.log(`Домашка:`)

class First {
    constructor() {

    }
    hello() {
        console.log("Привет я метод родителя!")
    }
}



class Second extends First {
    constructor() {
        super()
    }
    hello() {
        super.hello()
        console.log("А я наследуемый метод!")
    }

}

const test = new Second

test.hello()


