const hours = document.querySelector('#hours')
const minutes = document.querySelector('#minutes')
const seconds = document.querySelector('#seconds')
const timer = document.querySelector('#timer')
const ogg = new Audio('./MintMRRRRAlertSound.ogg')

function startTimer() {
    let h = hours.value
    let m = minutes.value
    let s = seconds.value
    setInterval(() => {
        if (s == 0 & m == 0 & h == 0) {
            ogg.play()
            alert('ASSAAAAAASAA')
        }
        if (s == 0 & m > 0) {
            s = 60
            m -= 1
        }
        if (m == 0 & h > 0) {
            m = 60
            h -= 1
        }
        s -= 1
        console.log(h.toString())
        hours.value = h.toString().length > 1 ? h : '0' + h
        minutes.value = m.toString().length > 1 ? m : '0' + m
        seconds.value = s.toString().length > 1 ? s : '0' + s
    }, 1000)
}