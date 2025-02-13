let string = document.querySelector('#string')
let stringText = document.querySelector('#stringText')

string.addEventListener('input', () => {
    if (typeof(eval(string.value)) == 'number') {
        stringText.innerHTML = eval(string.value.replaceAll('^', '**'))
    } else {
        stringText.innerHTML = ''
    }
})