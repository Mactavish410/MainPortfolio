function genereteRandomColor() {
    const hexCode = '0123456789ABCDEF'
    let color = ''
    for (let i = 0; i < 6; i++) {
        color += hexCode[Math.floor(Math.random() * hexCode.length)]
    }
    return '#' + color
}

// let bgColor = document.getElementsByTagName('body')[0]
// bgColor.style.background = genereteRandomColor()
// console.log(bgColor)