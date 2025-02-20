let c1 = document.querySelector('#c1')
let c2 = document.querySelector('#c2')
let gradient = document.querySelector('#gradient')
c1.addEventListener('input', () => {
    gradient.style.backgroundImage = `linear-gradient(${c1.value}, ${c2.value})`
})
c2.addEventListener('input', () => {
    gradient.style.backgroundImage = `linear-gradient(${c1.value}, ${c2.value})`
})