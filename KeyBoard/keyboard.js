let input = document.querySelector('input')
const shift = document.querySelector('#shift')
let isShift = -1
shift.addEventListener('click', () => {
    isShift *= -1
    if (isShift == -1) {
        shift.style.backgroundColor = 'rgb(240, 240, 240)'
    } else {
        shift.style.backgroundColor = 'gray'
    }
})

function pressKey(key) {
    if (isShift == -1) {
        input.value = input.value + key
    } else {
        input.value = input.value + key.toUpperCase()
    }
}