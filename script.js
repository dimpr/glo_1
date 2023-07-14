const text = document.getElementById('text')

console.dir(text)

const btn = document.getElementById('btn')

console.dir(btn)

const square = document.getElementById('square')

console.dir(square)

const badBtn = document.getElementById('e_btn')

const range = document.getElementById('range')

console.dir(range)

const rangeSpan = document.getElementById('range-span')

console.dir(rangeSpan)

const circle = document.getElementById('circle')

console.dir(circle)

const changeBack = function (event) {
    square.style.backgroundColor = text.value
    badBtn.style.display = 'none'
}

const changeRange = function (event) {
    rangeSpan.textContent = range.value
    circle.style.width = range.value + '%'
    circle.style.height = range.value + '%'
}


btn.addEventListener('click', changeBack)

range.addEventListener('change', changeRange)

