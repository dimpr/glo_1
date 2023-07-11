const books = document.querySelectorAll(".books")
const book = document.querySelectorAll(".book")

console.log(books)
console.log(book)


books[0].prepend(book[1])
books[0].append(book[2])
book[0].after(book[4])

document.querySelector(".adv").remove()

const body = document.querySelector("body")
body.style.backgroundImage = "url(./image/you-dont-know-js.jpg)"

book[4].querySelector('h2 a').textContent = "Книга 3. this и Прототипы Объектов"

const book2List = book[0].querySelectorAll('li')
const book5List = book[5].querySelectorAll('li')

console.log(book2List)
console.log(book5List)

book2List[9].after(book2List[2])
book2List[3].after(book2List[8])
book2List[3].after(book2List[6])
book5List[1].after(book5List[9])
book5List[4].after(book5List[2])
book5List[4].after(book5List[2])
book5List[7].after(book5List[5])


const book6List = book[2].querySelectorAll('li')

console.log(book6List)

const cloneElem = book6List[7].cloneNode()
cloneElem.textContent = "Глава 8: За пределами ES6"
book6List[8].after(cloneElem)





//
//
// 