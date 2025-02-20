const canvas = document.querySelector('canvas')
canvas.width = 500
canvas.height = 500
const ctx = canvas.getContext('2d')
down = false
color = 'red'

canvas.addEventListener('mousemove', (event) => {
    if (down) {
        x = event.offsetX
        y = event.offsetY
        ctx.beginPath()
        ctx.fillStyle = color
        ctx.arc(x, y, 5, 0, 360)
        ctx.fill()
        // ctx.fillRect(x, y, 5, 5)
    }
})
document.addEventListener('mousedown', (event) => {
    down = true
})
document.addEventListener('mouseup', (event) => {
    down = false
})

function red() {
    color = 'red'
}
function green() {
    color = 'green'
}
function blue() {
    color = 'blue'
}