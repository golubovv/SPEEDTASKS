let rangeRed = document.querySelector('#rangeRed')
let rangeBlue = document.querySelector('#rangeBlue')
let rangeGreen = document.querySelector('#rangeGreen')
let code = document.querySelector('#code')
let box = document.querySelector('#colorBox')
let red = rangeRed.value
let blue = rangeBlue.value
let green = rangeGreen.value
code.innerHTML = `${red} ${blue} ${green}`

rangeRed.addEventListener('input', () => {
    red = rangeRed.value
    code.innerHTML = `${red} ${blue} ${green}`
    box.style.backgroundColor = `rgb(${red}, ${blue}, ${green})`
})
rangeBlue.addEventListener('input', () => {
    blue = rangeBlue.value
    code.innerHTML = `${red} ${blue} ${green}`
    box.style.backgroundColor = `rgb(${red}, ${blue}, ${green})`
})
rangeGreen.addEventListener('input', () => {
    green = rangeGreen.value
    code.innerHTML = `${red} ${blue} ${green}`
    box.style.backgroundColor = `rgb(${red}, ${blue}, ${green})`
})