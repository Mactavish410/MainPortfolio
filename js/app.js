function genereteRandomColor() {
    const hexCode = '0123456789ABCDEF'
    let color = ''
    for (let i = 0; i < 6; i++) {
        color += hexCode[Math.floor(Math.random() * hexCode.length)]
    }
    return '#' + color
}

document.addEventListener ('keydown', (event) => {
    event.preventDefault()
    if (event.code.toLowerCase() === "space") {
        if (localStorage.getItem('bgc') === 'true'){
            bgColor.style.background = genereteRandomColor()
        }
    }
})

let checkbox = document.querySelector('.checkbox')
let bgColor = document.getElementsByTagName('body')[0]

if(localStorage.getItem('bgc') == 'true') {
    bgColor.style.background = genereteRandomColor()
    checkbox.checked = true
}
checkbox.onchange = function() {
    if(this.checked) {
        localStorage.setItem('bgc', true)
        bgColor.style.background = genereteRandomColor()
        
    } else {
        localStorage.setItem('bgc', false)
        bgColor.style.background = '#111827'
    }
}

// function animationHand() {
//     let hand = $('.header__hand')
//     if (hand[0].alt === '1'){
//         hand[0].src = 'img/hand/hand-2.svg'
//         hand[0].alt = '2'
//     } else {
//         hand[0].src = 'img/hand/hand-1.svg'
//         hand[0].alt = '1'
//     }
// }

// setInterval(animationHand, 1000)

